const firebaseConfig = {
  apiKey: "AIzaSyBO0UR_VdqPSXzRMulrCNrx40nPespYXDE",
  authDomain: "my-test-project-be939.firebaseapp.com",
  databaseURL: "https://my-test-project-be939-default-rtdb.firebaseio.com",
  projectId: "my-test-project-be939",
  storageBucket: "my-test-project-be939.appspot.com",
  messagingSenderId: "139014992855",
  appId: "1:139014992855:web:bee272e4bab58b2754d192",
  measurementId: "G-NLWDVCB465",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const root = "my-test-project-be939-default-rtdb/";
const detail = "detail/";
const thread = "thread/";
$(document).ready(function () {
  var ref = database.ref(thread);

  ref.child("abc1").on(
    "value",
    (snapshot) => {
   console.log(snapshot.val())
    },
    (error) => console.log(error),
  );
});
//Lấy danh sách chat
function getListChat(searchKey) {}
