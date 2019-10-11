//  alert ("working");

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


 $("#btn-login").click(function(){
     var email= $("#username").val();
     var password= $("#password").val();

     if(email != "" && password != "")
     {

        var result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            alert("message : " + errorMessage);
        });
     }else{
        //  alert("");
     }
 });

 
 $("#btn-signup").click(function(){
    var email= $("#emailsignup").val();
    var password= $("#passwordsignup").val();
    var confirmPassword= $("#passwordsignup_confirm").val();

    if(email != "" && password != "" && confirmPassword != "")
    {

      if (password === confirmPassword){
        var result = firebase.auth().createUserWithEmailAndPassword(email, password);

        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

 
            alert("message : " + errorMessage);
       });
    }else{

        alert("password does not match");
    }
    }else{
       //  alert("");
    }
});


 $("#btn-logout").click(function(){

   firebase.auth().signOut();
 });

