var app_firebase  = {};
(function(){
    // App's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBTShxrQ86HXMkfliHBtOZd0iVhSAU5Gsg",
      authDomain: "music-database-255014.firebaseapp.com",
      databaseURL: "https://music-database-255014.firebaseio.com",
      projectId: "music-database-255014",
      storageBucket: "",
      messagingSenderId: "675453674002",
      appId: "1:675453674002:web:41a3b3249b9f468f17aecb",
      measurementId: "G-X2FFSDKZL8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    app_firebase = firebase;
})()