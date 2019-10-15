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

    $("#artistInfo").empty();
    $(".video").empty();

    var youtubeURL = youtubeBaseURL + youtubeSearch + typeVideo + "&key=" + youtubeAPIkey
    var bandsURL = bandsBaseURL + artistName + "?app_id=" + bandsAPIkey
    
    let recentSearch = $("#searchBar").val().trim()
    youtubeSearch = recentSearch
    artistName = recentSearch


    $.ajax({
        url:youtubeURL,
        method:"GET"
    }).then(function (response) {
        
        var videoID = (response.items["0"].id.videoId)
        const videoURL = "https://www.youtube.com/embed/" + videoID
    
        $(".video").append(`
        <iframe class="border solid 4px border-light" width="560" height="315" src="${videoURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    
        $("#artistInfo").empty()
        $("#artistInfo").append(`
        <div class="row">
            <div class="col-md-4">
                <img src="${artistImage}" height="300px" width="300px" class="border solid 4px border-light"></img>
            </div>
            <div class="col-md-8">
                <h3 class="mt-3">${artistName}</h3>    
                <a href="${artistFacebook}">Facebook Page</a>
                <h3 class="mt-3">Upcoming Events ${artistEvents}</h3>
                <p>Check out their bandsintown page for ticket and venue information!</p>
                <a href="${artistPage}">Bandsintown Page</a>
            </div>
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
