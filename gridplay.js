function lick(){
  document.getElementsByClassName("frankielick")[0].style.opacity = "1";
  document.getElementsByClassName("frankiehappy")[0].style.opacity = "0";
  document.getElementsByClassName("frankiesad")[0].style.opacity = "0";
  document.getElementsByClassName("frankielicking")[0].style.opacity = "0";

   setTimeout(function(){
    document.getElementsByClassName("frankielick")[0].style.opacity = "0";
    document.getElementsByClassName("frankiehappy")[0].style.opacity = "1";
  },1000);
}

function binJuice(){
  document.getElementsByClassName("bin")[0].style.opacity = "1";
  document.getElementsByClassName("frankielick")[0].style.opacity = "0";
  document.getElementsByClassName("frankiehappy")[0].style.opacity = "0";
  document.getElementsByClassName("frankiesad")[0].style.opacity = "0";
  document.getElementsByClassName("frankielicking")[0].style.opacity = "1";
  var sound = document.getElementById("audio");
  sound.play();

  setTimeout(function(){
    document.getElementsByClassName("frankielick")[0].style.opacity = "1";
    document.getElementsByClassName("frankielicking")[0].style.opacity = "0";
  },400);

  setTimeout(function(){
    document.getElementsByClassName("frankielick")[0].style.opacity = "0";
    document.getElementsByClassName("frankielicking")[0].style.opacity = "1";
  },800);

  setTimeout(function(){
    document.getElementsByClassName("frankielick")[0].style.opacity = "1";
    document.getElementsByClassName("frankielicking")[0].style.opacity = "0";
  },1200);

  setTimeout(function(){
    document.getElementsByClassName("frankielick")[0].style.opacity = "0";
    document.getElementsByClassName("frankielicking")[0].style.opacity = "1";
  },1600);

  setTimeout(function(){
    document.getElementsByClassName("frankielicking")[0].style.opacity = "0";
    document.getElementsByClassName("frankiehappy")[0].style.opacity = "1";
  },2000);
}

function badgerPoo(){
  document.getElementsByClassName("badger")[0].style.opacity = "1";
  document.getElementsByClassName("frankielick")[0].style.opacity = "0";
  document.getElementsByClassName("frankiehappy")[0].style.opacity = "0";
  document.getElementsByClassName("frankiesad")[0].style.opacity = "0";
  document.getElementsByClassName("frankielicking")[0].style.opacity = "1";

    var sound = document.getElementById("woof");
  sound.play();

  setTimeout(function(){
    document.getElementsByClassName("frankielicking")[0].style.opacity = "0";
    document.getElementsByClassName("frankiehappy")[0].style.opacity = "1";
  },1000);
}


function dogTreats(){
  document.getElementsByClassName("treats")[0].style.opacity = "1";
  document.getElementsByClassName("frankielick")[0].style.opacity = "1";
  document.getElementsByClassName("frankiehappy")[0].style.opacity = "0";
  document.getElementsByClassName("frankiesad")[0].style.opacity = "0";
  document.getElementsByClassName("frankielicking")[0].style.opacity = "0";

  var sound = document.getElementById("double");
  sound.play();

  setTimeout(function(){
    document.getElementsByClassName("frankielick")[0].style.opacity = "0";
    document.getElementsByClassName("frankiehappy")[0].style.opacity = "1";
  },1000);
}


function fishTails(){
  document.getElementsByClassName("fish")[0].style.opacity = "1";
  document.getElementsByClassName("frankielick")[0].style.opacity = "1";
  document.getElementsByClassName("frankiehappy")[0].style.opacity = "0";
  document.getElementsByClassName("frankiesad")[0].style.opacity = "0";
  document.getElementsByClassName("frankielicking")[0].style.opacity = "0";

    var sound = document.getElementById("sharp");
  sound.play();

  setTimeout(function(){
    document.getElementsByClassName("frankielick")[0].style.opacity = "0";
    document.getElementsByClassName("frankielicking")[0].style.opacity = "1";
  },400);

  setTimeout(function(){
    document.getElementsByClassName("frankielick")[0].style.opacity = "1";
    document.getElementsByClassName("frankielicking")[0].style.opacity = "0";
  },800);

  setTimeout(function(){
    document.getElementsByClassName("frankielick")[0].style.opacity = "0";
    document.getElementsByClassName("frankielicking")[0].style.opacity = "1";
  },1200);

  setTimeout(function(){
    document.getElementsByClassName("frankielick")[0].style.opacity = "1";
    document.getElementsByClassName("frankielicking")[0].style.opacity = "0";
  },1600);

  setTimeout(function(){
    document.getElementsByClassName("frankielick")[0].style.opacity = "0";
    document.getElementsByClassName("frankiehappy")[0].style.opacity = "1";
  },2000);
}


function reset(){
  document.getElementsByClassName("bin")[0].style.opacity = "0";
  document.getElementsByClassName("badger")[0].style.opacity = "0";
  document.getElementsByClassName("treats")[0].style.opacity = "0";
  document.getElementsByClassName("fish")[0].style.opacity = "0";

  document.getElementsByClassName("frankielick")[0].style.opacity = "0";
  document.getElementsByClassName("frankiehappy")[0].style.opacity = "0";
  document.getElementsByClassName("frankiesad")[0].style.opacity = "1";
  document.getElementsByClassName("frankielicking")[0].style.opacity = "0";

  var sound = document.getElementById("whimper");
  sound.play();

  setTimeout(function(){
    document.getElementsByClassName("frankiesad")[0].style.opacity = "0";
    document.getElementsByClassName("frankiehappy")[0].style.opacity = "1";
  },3600);
}

function instruct(){
  var sound = document.getElementById("woof");
  sound.play();

  document.getElementsByClassName("buttons")[0].style.transform = "scale(1.1)"; 

  setTimeout(function(){
    document.getElementsByClassName("buttons")[0].style.transform = "scale(1)"; 
  },400);

  setTimeout(function(){
    document.getElementsByClassName("buttons")[0].style.transform = "scale(1.1)"; 
  },800);

  setTimeout(function(){
    document.getElementsByClassName("buttons")[0].style.transform = "scale(1)"; 
  },1200);

  setTimeout(function(){
    document.getElementsByClassName("buttons")[0].style.transform = "scale(1.1)"; 
  },1600);

  setTimeout(function(){
    document.getElementsByClassName("buttons")[0].style.transform = "scale(1)"; 
  },2000);
}

  var audio = document.getElementById("song");
  audio.volume = 0.1;


function playMusic() { 
  audio.play(); 
} 

function pauseMusic() { 
  audio.pause(); 
}
