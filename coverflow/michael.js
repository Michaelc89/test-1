 var chainsmokers = document.createElement("AUDIO");


$(document).ready(function(){

           $(this).find('.well').hide();
 //function to hide the album cover then show the list of songs div
    $('#myPic').click(function(){
        $('.well').show();
         //$('#album1').hide();
        //$('#album1').fadeTo( "slow", 0 );
        
    });
    
        $('#button').click(function(){
        $('#myPic').show();
        $('.well').hide();
        
    });
    
    $("#closer").click(function() {
        chainsmokers.src = 'chainsmokers.mp3';
        chainsmokers.play();
    });
    
}); 
    
    


