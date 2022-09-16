// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPmt2djM1NmBWKGH1mCM5_-28qA9ZW3UQ",
  authDomain: "cbgddc-website.firebaseapp.com",
  databaseURL: "https://cbgddc-website-default-rtdb.firebaseio.com",
  projectId: "cbgddc-website",
  storageBucket: "cbgddc-website.appspot.com",
  messagingSenderId: "1048860190995",
  appId: "1:1048860190995:web:e70c61a1055fa429ddd2e6",
  measurementId: "G-VSFBVQPP8J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference messages
var messagesRef = firebase.database().ref('messages');

//Listen to submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Function to submit form
function submitForm(e) {
  e.preventDefault();
  let name = getInput('name');
  let email = getInput('email');
  let member = document.getElementById('member').checked;
  let message = getInput('message');

  saveMessage(name, email, member, message);
  success();
}

//Function to get input values
function getInput(id) {
  return document.getElementById(id).value;
}

//Save messages
function saveMessage(name, email, member, message) {
  newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    member: member,
    message: message
  });
}

function success() {
  let success = document.getElementById('success').style;
  success.display = 'block';
  setTimeout(() => {
    success.display = 'none';
  }, 4000);
  document.getElementById('contactForm').reset();
}

