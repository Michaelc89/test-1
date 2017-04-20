var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var player = document.createElement("AUDIO");
var x = "Albums";

$(document).ready(function ()  {
    
   var counter1 =0, counter2=0, counter3 =0,counter4=0;
     //album1 - ed sheeran
   /*********************************************************************************************/
    
        $("#album1").click(function()
        {
            counter1++;
            var key = {album1: counter1, album2: counter2, album3: counter3, album4: counter4};
            localStorage.setItem(x, JSON.stringify(key));
             $('#well1').show();
         $('#myPic').hide();
            //$('#album1').hide();
        $('#album1').fadeTo( "fast", 0 );

        });
    
     $('#button').click(function(){
        $('#album1').show();
         $('#album1').fadeTo( "fast", 1 );
        $('#well1').hide();
        
    });
    $("#galway").click(function() {
        player.src = 'music/EdSheeran.mp3';
       player.play();
        
    });
    
    $("#castle").click(function() {
        player.src = 'music/castleOnTheHill.mp3';
       player.play();
        
    });
    $("#shape").click(function() {
        player.src = 'music/shape.mp3';
       player.play();
        
    });
    
    //album 2 - eminem
    /*********************************************************************************************/
    
    $("#album2").click(function()
        {
            counter2++;
            var key = {album1: counter1, album2: counter2, album3: counter3, album4: counter4};
            localStorage.setItem(x, JSON.stringify(key));
            
        $('#well2').show();
         $('#myPic2').hide();
            //$('#album1').hide();
        $('#album2').fadeTo( "fast", 0 );

        });
    
     $('#button2').click(function(){
        $('#album2').show();
         $('#album2').fadeTo( "fast", 1 );
        $('#well2').hide();
        
    });
    $("#lose").click(function() {
        player.src = 'music/LoseYourself.mp3';
       player.play();
        
    });
    
    $("#justLoseIt").click(function() {
        player.src = 'music/JustLoseIt.mp3';
       player.play();
        
    });
    $("#mockingbird").click(function() {
        player.src = 'music/Mockingbird.mp3';
       player.play();
    });
    
    //album 3
   /*********************************************************************************************/
    $("#album3").click(function()
        {
            counter3++;
           
         var key = {album1: counter1, album2: counter2, album3: counter3, album4: counter4};
            localStorage.setItem(x, JSON.stringify(key));
            
        $('#well3').show();
         $('#myPic3').hide();
            //$('#album1').hide();
        $('#album3').fadeTo( "fast", 0 );

        });
    
     $('#button3').click(function(){
        $('#album3').show();
         $('#album3').fadeTo( "fast", 1 );
        $('#well3').hide();
        
    });
    $("#idiot").click(function() {
        player.src = 'music/AmericanIdiot.mp3';
       player.play();
        
    });
    
    $("#holiday").click(function() {
        player.src = 'music/holiday.mp3';
       player.play();
        
    });
    $("#dreams").click(function() {
        player.src = 'music/BoulevardOfBrokenDreams.mp3';
       player.play();
    });
    
    //album4
    /*********************************************************************************************/
    
     $("#album4").click(function()
        {
            counter4++;
             var key = {album1: counter1, album2: counter2, album3: counter3, album4: counter4};
            localStorage.setItem(x, JSON.stringify(key));
            
        $('#well4').show();
         $('#myPic4').hide();
            //$('#album1').hide();
        $('#album4').fadeTo( "fast", 0 );

        });
    
     $('#button4').click(function(){
        $('#album4').show();
         $('#album4').fadeTo( "fast", 1 );
        $('#well4').hide();
        
    });
    $("#staunch").click(function() {
        player.src = 'music/BeStaunch.mp3';
       player.play();
        
    });
    
    $("#snappin").click(function() {
        player.src = 'music/snappin.mp3';
       player.play();
        
    });
    $("#fullFat").click(function() {
        player.src = 'music/fullFat.mp3';
       player.play();
    });
   
    
    /*********************************************************************************************/
    //high charts plugin 
    
    $('#btn').click(function(){
        
        var val1,
            val2,
            val3,
            val4,
            options;
        for (var i = 0, len = localStorage.length; i < len; i++) 
    {
        var Book=JSON.parse(localStorage.getItem(localStorage.key(i)));
        val1 = Book.album1;
        val2 = Book.album2;
        val3 = Book.album3;
        val4 = Book.album4;
    }
       
        options = {
            title: {
    text: 'How often you have played each song'
},
            series: [{
                
                type: 'pie',
                name: 'Plays',
                
                
               data: [{
            name: 'Ed Sheeran',
            y: val1
        }, {
            name: 'Eminem',
            y: val2,
            sliced: true,
            selected: true
        }, {
            name: 'Green Day',
            y: val3
        }, {
            name: 'This Side Up',
            y: val4
        
         }]
    }]
};

        $('#container').highcharts(options);
       
    });
    
});