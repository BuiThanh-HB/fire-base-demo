const firebaseConfig = {
  apiKey: "AIzaSyBO0UR_VdqPSXzRMulrCNrx40nPespYXDE",
  authDomain: "my-test-project-be939.firebaseapp.com",
  databaseURL: "https://my-test-project-be939-default-rtdb.firebaseio.com",
  projectId: "my-test-project-be939",
  storageBucket: "my-test-project-be939.appspot.com",
  messagingSenderId: "139014992855",
  appId: "1:139014992855:web:6cd329a32da030b054d192",
  measurementId: "G-NJ3H4W36L9"
};
const database = firebase.database();

firebase.initializeApp(firebaseConfig);
firebase.analytics();