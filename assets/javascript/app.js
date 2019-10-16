// alert ("working");

var bandsAPIkey = "939b9a06865777665ef5b95c31a05910"
var bandsBaseURL = "https://rest.bandsintown.com/artists/"
var artistName = " "

var youtubeAPIkey = "AIzaSyCdWjeDZ0p9AKLIU5uB2fh_k4ZUbOxxeFs"
var youtubeBaseURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="
var youtubeSearch = " "
var typeVideo = "&type=video"


//Search bar youtube/bandsintown ajax
$("#searchButton").on("click", function (event) {
    event.preventDefault();

    $("#artistInfo").empty();
    $(".video").empty();

    var youtubeURL = youtubeBaseURL + youtubeSearch + typeVideo + "&key=" + youtubeAPIkey
    var bandsURL = bandsBaseURL + artistName + "?app_id=" + bandsAPIkey
    var bandsURLEvents = bandsBaseURL + artistName + "/events" + "?app_id=" + bandsAPIkey
    
    let recentSearch = $("#searchBar").val().trim()
    youtubeSearch = recentSearch
    artistName = recentSearch


    $.ajax({
        url:youtubeURL,
        method:"GET"
    }).then(function (response) {
        
        $(".video").empty()
        
        var videoID = (response.items["0"].id.videoId)
        const videoURL = "https://www.youtube.com/embed/" + videoID
    
        $(".video").append(`
        <iframe class="border solid 4px border-light" width="560" height="315" src="${videoURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `)
    });

    $.ajax({
        url:bandsURL,
        method:"GET"
    }).then(function (response) {
    
        var artistImage = response.image_url
        var artistEvents = response.upcoming_event_count
        var artistPage = response.url
        var artistName = response.name
        var artistFacebook = response.facebook_page_url
    
        
        $("#artistInfo").append(`
        <div class="row">
            <div class="col-md-4">
                <img src="${artistImage}" height="300px" width="300px" class="border solid 4px border-light"></img>
            </div>
            <div class="col-md-8">
                <h3 class="mt-3">${artistName}</h3>    
                <a href="${artistFacebook}">Facebook Page</a>
                <h3 class="mt-3">Upcoming Events ${artistEvents}</h3>
                <a href="${artistPage}">Bandsintown Page</a>
            </div>
        </div>
        `)
    })
    
    $.ajax({
        url:bandsURLEvents,
        method:"GET"
    }).then(function (response) {
        console.log(response)
        
        var eventDate = response[0].datetime
        var eventDescription = response[0].description
        var eventLocationCity = response[0].venue.city
        var eventLocationCountry = response[0].venue.country

        console.log(eventDate)
        console.log(eventDescription)
        console.log(eventLocationCity)
        console.log(eventLocationCountry)


        $("upcomingEvent").append(`
        <div class="col-md-6" id="eventInfo">
        <h3>Nearest Event</h3>
        <p>${eventDate}</p>
        <p>${eventDescription}</p>
        <p>${eventLocationCity}</p>
        <p>${eventLocationCountry}</p>
        </div>
         `)
    })

})

//Comment bar click event
$("#commentButton").on("click", function (event) {
    event.preventDefault();
    let currentComment = $("#commentBar").val().trim()
    console.log(currentComment)
    $("#comments").append(`
    <p>${currentComment}</p>
    `)

})


// Ends jQuery Ajax Call

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

            // console.log(errorCode);
            // console.log(errorMessage);

 
            alert("message : " + errorMessage);
       });
    }else{

        alert("password does not match");
    }
    }else{
       
    }
});


 $("#btn-logout").click(function(){

   firebase.auth().signOut();
 });


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

   
 
 $("#btn-update").click(function(){

  var phone = $("#phonenumber").val();
  var address = $("#address").val();
  var bio = $("#bio").val();
  var fName= $("#fName").val();
  var mName = $("#mName").val();
  var lName = $("#lName").val();
  var gender = $("#gender").val();

  var rootRef = firebase.database().ref().child("Users");
  var userID = firebase.auth().currentUser.uid;
  var usersRef = rootRef.child(userID);


  // database.ref().on("child_added", function(snapshot){
  //   console.log(snapshot.val());
  //   console.log(snapshot.val().bio);

  //   $("#address").text(snapshot.val().address);
  //   $("#phonenumber").text(snapshot.val().phone);
  //   $("#bio").text(snapshot.val().bio);
  //   $("#fName").text(snapshot.val().fName);
  //   $("#mName").text(snapshot.val().mName);
  //   $("#lName").text(snapshot.val().lName);
  //   $("#gender").text(snapshot.val().gender);
  // });

  if(fName!="" && lName!="" && phone!="" && mName!="" && gender!="" && bio!="" && address!=""){
  
    var userData = {
      "phone": phone,
      "address": address,
      "bio": bio,
      "firstname": fName,
      "middlename": mName,
      "lastname": lName,
      "gender": gender,

    };
       
    usersRef.set(userData, function(error){
      if(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        // console.log(errorCode);
        // console.log(errorMessage);


        alert("message : " + errorMessage);
      }else{
        window.location.href = "music.html";
        
      }
    });
  }else{
    alert("Form is incomplete. Please fill out all fields.");

  }
});

// Usercomments and details 

var dataRef = firebase.database();
// Initial Values
var name = "";
var email = "";
var age = 0;
var comment = "";
// Capture Button Click
$("#add-user").on("click", function(event) {
  event.preventDefault();
  // YOUR TASK!!!
  // Code in the logic for storing and retrieving the most recent user.
  // Dont forget to provide initial data to your Firebase database.
  name = $("#name-input").val().trim();
  email = $("#email-input").val().trim();
  age = $("#age-input").val().trim();
  comment = $("#comment-input").val().trim();
  // Code for the push
  dataRef.ref().push({
    name : name,
    email : email,
    age : age,
    comment : comment,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});
// Firebase watcher + initial loader HINT: .on("value")
dataRef.ref().on("child_added", function(snapshot) {
  // Log everything that's coming out of snapshot
  console.log(snapshot.val());
  console.log(snapshot.val().name);
  console.log(snapshot.val().email);
  console.log(snapshot.val().age);
  console.log(snapshot.val().comment);
  // Change the HTML to reflect
  $("#comment-display").append(`<p>${snapshot.val().email}</p> <p>${snapshot.val().comment}</p>`);  
  // $("#email-display").append(`<p>${snapshot.val().email}</p>`);
  // $("#age-display").append(`<p>${snapshot.val().age}</p>`);
  // $("#comment-display").append(`<p>${snapshot.val().comment}</p>`);

  // Handle the errors
 }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
 });