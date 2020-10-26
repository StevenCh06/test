import firebase from 'firebase'
import firestore from 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyA1QmEQaz4IKpUSsHWFokOn39hMHt91R34",
    authDomain: "backend-7032a.firebaseapp.com",
    databaseURL: "https://backend-7032a.firebaseio.com",
    projectId: "backend-7032a",
    storageBucket: "backend-7032a.appspot.com",
    messagingSenderId: "731150959348",
    appId: "1:731150959348:web:fa5fa4d639316dc25194a1"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots: true });

  export default firebaseApp.firestore();

