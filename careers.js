function onYouTubeIframeAPIReady() {
    console.log('YouTube Iframe API is ready');  // Debugging line
    var player = new YT.Player('video-massage', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// Event listener for when the player's state changes (e.g., playing, paused)
function onPlayerStateChange(event) {
    // When the video starts playing, the state is 1
    if (event.data == YT.PlayerState.PLAYING) {
        // Hide the overlay (firstnote) once the video starts playing
        document.getElementById('.firstnote').style.display = 'none';
    } else {
        console.log('Firstnote element not found!');
    }
}

// Optional: If you want to hide the note when the user clicks to play the video
document.getElementById('video-massage').addEventListener('click', function() {
    document.getElementById('.firstnote').style.display = 'none';
});
  