alert("working");
var config = {
    apiKey: "AIzaSyA97hzCgDRHVJFCiOAJ6RVzx2F1hZsfKj4",
    authDomain: "project-1-38041.firebaseapp.com",
    databaseURL: "https://project-1-38041.firebaseio.com",
    projectId: "project-1-38041",
    storageBucket: "project-1-38041.appspot.com",
    messagingSenderId: "521886266392",
    appId: "1:521886266392:web:c4cd23c4069f7b77533f6d",
    measurementId: "G-76GRV8ZP76"
  };

   firebase.initializeApp(config);


   firebase.auth.Auth.Persistence.LOCAL;


   
 $("#btn-logout").click(function(){

    firebase.auth().signOut();
  });
 