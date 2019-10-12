var bandsAPIkey = "939b9a06865777665ef5b95c31a05910"
var bandsBaseURL = "https://rest.bandsintown.com/artists/"
var artistName = " "

var youtubeAPIkey = "AIzaSyD2W-_IP5IKWaeNV7d397KtunHP7OawBYA"
var youtubeBaseURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="
var youtubeSearch = " "
var typeVideo = "&type=video"


//Search bar youtube/bandsintown ajax
$("#searchButton").on("click", function (event) {
    event.preventDefault();

    var youtubeURL = youtubeBaseURL + youtubeSearch + typeVideo + "&key=" + youtubeAPIkey
    var bandsURL = bandsBaseURL + artistName + "?app_id=" + bandsAPIkey
    
    let recentSearch = $("#searchBar").val().trim()
    youtubeSearch = recentSearch
    artistName = recentSearch

    $(".video").empty()
    $("#artistInfo").empty()

    $.ajax({
        url:youtubeURL,
        method:"GET"
    }).then(function (response) {
        
        var videoID = (response.items["0"].id.videoId)
        const videoURL = "https://www.youtube.com/embed/" + videoID
    
        $(".video").empty()
        $(".video").append(`
        <iframe width="560" height="315" src="${videoURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `)
    });

    $.ajax({
        url:bandsURL,
    }).then(function (response) {
    
        var artistImage = response.image_url
        var artistEvents = response.upcoming_event_count
        var artistPage = response.url
        var artistName = response.name
        var artistFacebook = response.facebook_page_url
        console.log(artistFacebook)
    
        $("#artistInfo").empty()
        $("#artistInfo").append(`
        <div>
        <img src="${artistImage}" height="300px" width="300px"></img>
        <h3>Upcoming Events ${artistEvents}</h3>
        <h3>${artistName}</h3>
        <a href="${artistPage}">Bandsintown Page</a>
        <a href="${artistFacebook}">Facebook Page</a>
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



