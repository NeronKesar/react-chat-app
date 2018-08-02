import firebase from 'firebase';

export const appName = 'react-chat-app-de99d';
export const firebaseConfig = {
  apiKey: "AIzaSyDjcJAgaq0nL2Hr57vqZ4qgaMW2xcQRI_M",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "129089518968"
};

firebase.initializeApp(firebaseConfig);