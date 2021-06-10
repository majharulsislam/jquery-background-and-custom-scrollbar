(function($){

    $(document).ready(function(){

        // Background Video
        $('.background_area').YTPlayer({
            fitToBackground: true,
            videoId: 'E29VlI9OWDs',
            playerVars: {
              modestbranding: 0,
              autoplay: 1,
              controls: 0,
              showinfo: 0,
              branding: 0,
              rel: 0,
              autohide: 0,
              start: 59
            }
        });

    });

}(jQuery));