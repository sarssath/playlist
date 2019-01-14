/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["BYF","Fu-Gee-La","Sin","Deja Vu", "Put Your Head On My Shoulder", "Unfair"];
// BELOW Add 4 More arrays to store images_links, artists, song_lengths, and links for each song
// Make sure they match the same order as your array above
var image_links =["https://upload.wikimedia.org/wikipedia/en/1/18/Cozy_Tapes_Too_Cozy_Cover_art.jpg", "https://cdn-images-1.medium.com/max/1600/0*0JesRLI1YbKPyZ4S.jpg", "https://ssle.ulximg.com/image/750x750/cover/1537972139_4aa76857adc1a662bd3f08b58c6ddbe6.jpg/1ecb38083af7fa3f905df9fbd64eeeab/1537972139_04a9ec8461f6a76ae201bebb627cedbe.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/J._Cole_%E2%80%94_4_Your_Eyez_Only_album_cover.jpg/220px-J._Cole_%E2%80%94_4_Your_Eyez_Only_album_cover.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Put_Your_Head_on_My_Shoulder_-_Paul_Anka.jpg/220px-Put_Your_Head_on_My_Shoulder_-_Paul_Anka.jpg", "https://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/dybzuhbblxbuwcprf2ie/6lack-unfair-been-a-while"];
var artists =["A$AP Mob","Fugees", "Young Thug ft. Jaden Smith", "J. Cole", "Paul Anka", "6lack"];
var song_lengths =["2:55", "4:20", "3:23", "4:25", "2:35", "4:49"];
var links =["https://www.youtube.com/watch?v=yGy2NIeJZa4", "https://www.youtube.com/watch?v=MPlb9HoOCxs", "https://www.youtube.com/watch?v=eHrGwEypJ2U", "https://www.youtube.com/watch?v=oigcRpBOoZk", "https://www.youtube.com/watch?v=uvxagNIBVLU", "https://www.youtube.com/watch?v=RK8Lf3YyMbY"];
var release_year =["2017", "1996", "2018", "2016", "1959", "2018"];
function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
