// alert ("working");

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

$("#btn-resetPassword").click(function(){

    var auth = firebase.auth();
    var email = $("#resetUsername").val();
  
    if(email != ""){
       auth.sendPasswordResetEmail(email).then(function(){
  
        alert("Email has been sent to you, Please check and verify.");
       })
  
       .catch(function(error){
  
        var errorCode = error.code;
        var errorMessage = error.message;
  
        console.log(errorCode);
        console.log(errorMessage);
  
  
        alert("message : " + errorMessage);
  
       });
    }else
  {
      alert("Please enter your email address")
    }
  });