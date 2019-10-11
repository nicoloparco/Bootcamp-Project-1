var bandsAPIkey = "b2736321a60be221b7bc3cf282cb3cb6"
var bandsBaseURL = "https://rest.bandsintown.com/artists/"
var artistName = ""
var bandsURL = bandsBaseURL + artistName + "?app_id=" + bandsAPIkey

var youtubeAPIkey = "AIzaSyD2W-_IP5IKWaeNV7d397KtunHP7OawBYA"
var youtubeBaseURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="
var youtubeSearch = "led zeppelin"
var typeVideo = "&type=video"
var youtubeURL = youtubeBaseURL + youtubeSearch + typeVideo + "&key=" + youtubeAPIkey



//Youtube API AJAX call (returns first result in .video)
$.ajax({
    url:youtubeURL,
    method:"GET"
}).then(function (response) {
    console.log(response)
    
    var videoID = (response.items["0"].id.videoId)
    const videoURL = "https://www.youtube.com/embed/" + videoID
    console.log(videoID)

    $(".video").empty()
    $(".video").append(`
    <iframe width="560" height="315" src="${videoURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `)
});

//Search bar click event
$("#searchButton").on("click", function (event) {
    event.preventdefault();
    let recentSearch = $("#searchBar").val.trim()
    youtubeSearch = recentSearch
    console.log(recentSearch)

})

//Comment bar click event
$("#commentButton").on("click", function (event) {
    event.preventdefault();
    let currentComment = $("#commentBar").val.trim()
    console.log(currentComment)
    $("#comments").append(currentComment)

})


