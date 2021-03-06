import firebase from 'firebase/app';
import { appName } from '../config';
import { Record } from 'immutable';
import { eventChannel } from 'redux-saga';
import { take, takeEvery, put, call, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { PATH_HOME, PATH_SIGN_IN } from '../constants/paths';

export const ReducerRecord = Record({
  user: null,
  error: null,
  loading: false,
});

export const moduleName = 'auth';
export const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`;
export const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`;

export const SIGN_IN_REQUEST = `${appName}/${moduleName}/SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `${appName}/${moduleName}/SIGN_IN_SUCCESS`;
export const SIGN_IN_ERROR = `${appName}/${moduleName}/SIGN_IN_ERROR`;

export const SIGN_OUT_REQUEST = `${appName}/${moduleName}/SIGN_OUT_REQUEST`;
export const SIGN_OUT_SUCCESS = `${appName}/${moduleName}/SIGN_OUT_SUCCESS`;

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload, error } = action;

  switch (type) {
    case SIGN_UP_REQUEST:
    case SIGN_IN_REQUEST:
      return state.set('loading', true);

    case SIGN_IN_SUCCESS:
      const {
        uid,
        nickname,
        firstName,
        lastName,
        birthday,
        email,
      } = payload.profile[1];

      return state
        .set('loading', false)
        .set('user', {
          uid,
          nickname,
          firstName,
          lastName,
          birthday,
          email,
        })
        .set('error', null);

    case SIGN_UP_ERROR:
    case SIGN_IN_ERROR:
      return state
        .set('loading', false)
        .set('error', error);

    case SIGN_OUT_SUCCESS:
      return new ReducerRecord();

    default:
      return state;
  }
}

export function signUp(
  nickname,
  firstName,
  lastName,
  birthday,
  email,
  password,
) {
  return {
    type: SIGN_UP_REQUEST,
    payload: {
      nickname,
      firstName,
      lastName,
      birthday,
      email,
      password,
    },
  }
}

export function signIn(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { email, password },
  }
}

export function signOut() {
  return {
    type: SIGN_OUT_REQUEST,
  }
}

export const signUpSaga = function* () {
  const auth = firebase.auth();
  const usersRef = firebase.database().ref('users');

  while(true) {
    const action = yield take(SIGN_UP_REQUEST);
    const {
      nickname,
      firstName,
      lastName,
      birthday,
      email,
      password,
    } = action.payload;

    try {
     yield call(
       [auth, auth.createUserWithEmailAndPassword],
       email,
       password,
      );

     yield call(
       [usersRef, usersRef.push],
       {
         nickname,
         firstName,
         lastName,
         birthday,
         email,
       },
     );


    } catch (error) {
      yield put({
        type: SIGN_UP_ERROR,
        error,
      })
    }
  }
};

export const signInSaga = function* () {
  const auth = firebase.auth();

  while (true) {
    const action = yield take(SIGN_IN_REQUEST);
    const { email, password } = action.payload;

    try {
      yield call(
        [auth, auth.signInWithEmailAndPassword],
        email,
        password,
      );

    } catch (error) {
      yield put({
        type: SIGN_IN_ERROR,
        error,
      })
    }
  }
};

const createAuthChannel = () => eventChannel(emit => firebase.auth().onAuthStateChanged(user => emit({ user })));

export const watchStatusChange = function* () {
  const channel = yield call(createAuthChannel);

  while (true) {
    const { user } = yield take(channel);
    const usersRef = firebase.database().ref('users');

    if (user) {
      const userData = yield call([usersRef, usersRef.once], 'value');

      let profile = null;

      Object.entries(userData.val()).forEach(item => {
        if (item[1].email === user.email) profile = item;
      });

      console.log('PASS', profile);

      yield put({
        type: SIGN_IN_SUCCESS,
        payload: { profile },
      });

      yield put(push(PATH_HOME))

    } else {
      yield put({
        type: SIGN_OUT_SUCCESS,
        payload: { user },
      });

      yield put(push(PATH_SIGN_IN))
    }
  }
};

export const signOutSaga = function* () {
  const auth = firebase.auth();

  try {
    yield call([auth, auth.signOut])
  } catch (error) {

  }
};

export const saga = function* () {
  yield all([
    signUpSaga(),
    signInSaga(),
    watchStatusChange(),
    takeEvery(SIGN_OUT_REQUEST, signOutSaga),
  ])
};
