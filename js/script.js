/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["BYF","Fu-Gee-La","Sin","Deja Vu", "Yosemite", "Unfair"];
// BELOW Add 4 More arrays to store images_links, artists, song_lengths, and links for each song
// Make sure they match the same order as your array above
var image_links =["https://upload.wikimedia.org/wikipedia/en/1/18/Cozy_Tapes_Too_Cozy_Cover_art.jpg", "https://cdn-images-1.medium.com/max/1600/0*0JesRLI1YbKPyZ4S.jpg", "https://ssle.ulximg.com/image/750x750/cover/1537972139_4aa76857adc1a662bd3f08b58c6ddbe6.jpg/1ecb38083af7fa3f905df9fbd64eeeab/1537972139_04a9ec8461f6a76ae201bebb627cedbe.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/J._Cole_%E2%80%94_4_Your_Eyez_Only_album_cover.jpg/220px-J._Cole_%E2%80%94_4_Your_Eyez_Only_album_cover.jpg", "https://consequenceofsound.files.wordpress.com/2018/07/travis-scott-astroworld-cover-art.png?w=807", "https://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/dybzuhbblxbuwcprf2ie/6lack-unfair-been-a-while"];
var artists =["A$AP Mob","Fugees", "Young Thug ft. Jaden Smith", "J. Cole", "Travis Scott", "6lack"];
var song_lengths =["2:55", "4:20", "3:23", "4:25", "2:31", "4:49"];
var links =["https://www.youtube.com/watch?v=yGy2NIeJZa4", "https://www.youtube.com/watch?v=MPlb9HoOCxs", "https://www.youtube.com/watch?v=eHrGwEypJ2U", "https://www.youtube.com/watch?v=oigcRpBOoZk", "https://www.youtube.com/watch?v=ykMHDKB0-1o", "https://www.youtube.com/watch?v=RK8Lf3YyMbY"];
var release_year =["2017", "1996", "2018", "2016", "2018", "2018"];
displaySongInfo();

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#links").empty();
    $("#year").empty();
    $("#lengths").empty();
}
 


function displaySongInfo() {
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>");
    });
    image_links.forEach(function(image) {
        $("#images").append("<img src=" + image + ">");
    });
    artists.forEach(function(artist) {
        $("#artists").append("<p>" + artist + "</p>");
    });
    song_lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>");
    });
    links.forEach(function(videolink) {
        $("#links").append("<a href=" + videolink + ">" +"Listen" + "</a>");
    });
    release_year.forEach(function(years) {
        $("#years").append("<p>" + years + "</p>");
    });
}

function addSongInfo() {
    var newSong = $("#song").val();
    songs.push(newSong); 
    var newArtist = $("#artist").val();
    artists.push(newArtist);
    var newLength = $("#length").val();
    song_lengths.push(newLength); 
    var newImage = $("#image").val();
    image_links.push(newImage);
    var newLink = $("#link").val();
    links.push(newLink); 
    var newYear = $("#year").val();
    release_year.push(newYear);
}

$('#add').click(function() {
    emptySongInfo();
    displaySongInfo();
    addSongInfo();
    // BELOW write the code to add new items to each of the arrays.
});