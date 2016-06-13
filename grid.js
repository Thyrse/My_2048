window.addEventListener("load", function() {
  var grille = document.getElementsByClassName('grid')[0],
  array = [[0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]];

  var sound = new Audio(["2048.mp3"]);

  function loadGrid() {
    for(var nbr_col = 0; nbr_col < 4; nbr_col += 1) {
      for(var nbr_line = 0; nbr_line < 4; nbr_line += 1) {
        if (array[nbr_col][nbr_line] !== 0){
          grille.children[nbr_col].children[nbr_line].innerHTML = array[nbr_col][nbr_line];
        } else {
          grille.children[nbr_col].children[nbr_line].innerHTML = '';
        }
      };
    };
  }
function lasttry()
{
  for (var nbr_col = 0; nbr_col < 4; nbr_col += 1) {
    for (var nbr_line = 0; nbr_line < 4; nbr_line += 1) {
      if(array[nbr_col][nbr_line] == '2')
      {
        grille.children[nbr_col].children[nbr_line].id = "nb_2";
      }
      else if(array[nbr_col][nbr_line] == '4')
      {
        grille.children[nbr_col].children[nbr_line].id = "nb_4";
      }
      else if(array[nbr_col][nbr_line] == '8')
      {
        grille.children[nbr_col].children[nbr_line].id = "nb_8";
      }
      else if(array[nbr_col][nbr_line] == '16')
      {
        grille.children[nbr_col].children[nbr_line].id = "nb_16";
      }
      else if(array[nbr_col][nbr_line] == '32')
      {
        grille.children[nbr_col].children[nbr_line].id = "nb_32";
      }
      else if(array[nbr_col][nbr_line] == '64')
      {
        grille.children[nbr_col].children[nbr_line].id = "nb_64";
      }
      else if(array[nbr_col][nbr_line] == '128')
      {
        grille.children[nbr_col].children[nbr_line].id = "nb_128";
      }
      else if(array[nbr_col][nbr_line] == '256')
      {
        grille.children[nbr_col].children[nbr_line].id = "nb_256";
      }
      else if(array[nbr_col][nbr_line] == '512')
      {
        grille.children[nbr_col].children[nbr_line].id = "nb_512";
      }
      else if(array[nbr_col][nbr_line] == '1024')
      {
        grille.children[nbr_col].children[nbr_line].id = "nb_1024";
      }
      else if(array[nbr_col][nbr_line] == '2048')
      {
        grille.children[nbr_col].children[nbr_line].id = "nb_2048";
        var youwin = document.getElementById('hidden');
     youwin.id = "winner";
   }
   else if(array[nbr_col][nbr_line] == '')
   {
     grille.children[nbr_col].children[nbr_line].id = "reset"; 
   }
 }
}
}

function cible()
{
  var nbr_col = Math.floor(Math.random() * 4);
  var nbr_line = Math.floor(Math.random() * 4);
  if(array[nbr_line][nbr_col] === 0)
  {
    var equal = generate();
    array[nbr_line][nbr_col] = equal;
  }
  else
  {
    cible();
  }
}
function generate()
{
  var rand = Math.floor(Math.random() * 16);
  if(rand === 0)
  {
    return 4;
  }
  else
  {
    return 2;
  }
}

  var divscore = document.getElementById("score-container");
  var score = parseInt(divscore.innerHTML);

  if (isNaN(score))
  {
      score = 0;
  }
  function mergeonleft()
  {
    var create = false;
    for(var x = 0; x < 4; x += 1)
    {
      for(var y = 0; y < 3; y += 1)
      {
        if(array[x][y] !== 0 && array[x][y] == array[x][y+1])
        {
          array[x][y] = array[x][y+1] * 2;
          array[x][y+1] = 0;
          create = true;
          movelineleft();
          sound.pause();
          sound.currentTime = 0;
          sound.play();
          score += parseInt(array[x][y]) * 2;
          document.getElementById('score-container').innerHTML = score;
        }
      }
    }
    return create;
  }
  function movelineleft()
  {
    var create = false;
    for(var m = 0; m < 3; m += 1)
    {
      for(var x = 0; x < 4; x += 1)
      {
        for(var y = 0; y < 3; y += 1)
        {
          if(array[x][y] === 0 && array[x][y+1] !== 0)
          {
            array[x][y] = array[x][y+1];
            array[x][y+1] = 0;
            if(array[x][y] !== 0)
            {
              create = true;
            }
      }
    }
  }
}
return create;
}
function goLeft()
{
  var move = movelineleft();
  var test = mergeonleft();
  if(move || test)
  {
    cible();
    loadGrid();
    lasttry();
  }
}
addEventListener('keydown', function(e)
{
  var key = e.keyCode || e.which;
  if(key == 37)
  {
    goLeft();
  }
});
var mybutton = document.getElementById("left");
mybutton.addEventListener('click', function(e)
{
  goLeft();
});
function mergeonright()
{
  var create = false;
  for(var x = 3; x >= 0; x -= 1)
  {
    for(var y = 4; y > 0; y -= 1)
    {
      if(array[x][y] !== 0 && array[x][y] == array[x][y-1])
      {
        array[x][y] = array[x][y-1] * 2;
        array[x][y-1] = 0;
        create = true;
        movelineright();
        sound.pause();
        sound.currentTime = 0;
        sound.play();
        score += parseInt(array[x][y]) * 2;
        document.getElementById('score-container').innerHTML = score;
      }
    }
  }
  return create;
}
function movelineright()
{
  var create = false;
  for(var m = 0; m < 3; m += 1)
  {
    for(var x = 3; x >= 0; x -= 1)
    {
      for(var y = 4; y > 0; y -= 1)
      {
        if(array[x][y] === 0 && array[x][y-1] !== 0)
        {
          array[x][y] = array[x][y-1];
          array[x][y-1] = 0;
          if(array[x][y] !== 0)
          {
            create = true;
          }
        }
      }
    }
  }
  return create;
}

function goRight() {
  var move = movelineright();
  var test = mergeonright();
  if(move || test)
  {
    cible();
    loadGrid();
    lasttry();
  }
}

addEventListener('keydown', function(e)
{
  var key = e.keyCode || e.which;
  if(key == 39)
  {
    goRight();
  }
});
var mybutton = document.getElementById("right");
mybutton.addEventListener('click', function(e)
{
  goRight();
});


function mergeonup()
{
  var create = false;
  for(var x = 0; x < 3; x += 1)
  {
    for(var y = 0; y < 4; y += 1)
    {
      if(array[x][y] !== 0 && array[x][y] == array[x+1][y])
      {
        array[x][y] = array[x+1][y] * 2;
        array[x+1][y] = 0;
        create = true;
        movelineup();
        sound.pause();
        sound.currentTime = 0;
        sound.play();
        score += parseInt(array[x][y]) * 2;
        document.getElementById('score-container').innerHTML = score;
      }
    }
  }
  return create;
}
function movelineup()
{
  var create = false;
  for(var m = 0; m < 3; m += 1)
  {
    for(var x = 0; x < 3; x += 1)
    {
      for(var y = 0; y < 4; y += 1)
      {
        if(array[x][y] === 0 && array[x+1][y] !== 0)
        {
          array[x][y] = array[x+1][y];
          array[x+1][y] = 0;
          if(array[x][y] !== 0)
          {
            create = true;
          }
        }
      }
    }
  }
  return create;
}
function goUp()
{
  var move = movelineup();
  var test = mergeonup();
  if(move || test)
  {
    cible();
    loadGrid();
    lasttry();
  }
}
addEventListener('keydown', function(e)
{
  var key = e.keyCode || e.which;
  if(key == 38)
  {
   goUp();
 }
});
var mybutton = document.getElementById("up");
mybutton.addEventListener('click', function(e)
{
  goUp();
});
function mergeondown()
{
  var create = false;
  for(var x = 3; x > 0; x -= 1)
  {
    for(var y = 3; y >= 0; y -= 1)
    {
      if(array[x][y] !== 0 && array[x][y] == array[x-1][y])
      {
        array[x][y] = array[x-1][y] * 2;
        array[x-1][y] = 0;
        create = true;
        movelinedown();
        sound.pause();
        sound.currentTime = 0;
        sound.play();
        score += parseInt(array[x][y]) * 2;
        document.getElementById('score-container').innerHTML = score;
      }
    }
  }
  return create;
}
function movelinedown()
{
  var create = false;
  for(var m = 0; m < 3; m += 1)
  {
    for(var x = 3; x > 0; x -= 1)
    {
      for(var y = 3; y >= 0; y -= 1)
      {
        if(array[x][y] === 0 && array[x-1][y] !== 0)
        {
          array[x][y] = array[x-1][y];
          array[x-1][y] = 0;
          if(array[x][y] !== 0)
          {
            create = true;
          }
        }
      }
    }
  }
  return create;
}
function goDown()
{
  var move = movelinedown();
  var test = mergeondown();
  if(move || test)
  {
    cible();
    loadGrid();
    lasttry();
  }
}
addEventListener('keydown', function(e)
{
  var key = e.keyCode || e.which;
  if(key == 40)
  {
   goDown();
 }
});
var mybutton = document.getElementById("down");
mybutton.addEventListener('click', function(e)
{
  goDown();
});
function addEvent(obj, event, fct)
{
  if(obj.attachEvent)
  {
    obj.attachEvent('on' + event, fct);
  }
  else
  {
    obj.addEventListener(event, fct, true);
  }
}

var avantPosX, apresPosX;
var avantPosY, apresPosY;

var position = document.getElementById("game-container");

position.addEventListener('mousedown', function(event)
{
  var xx = event.clientX;
  var posofxx = xx;
  var yy = event.clientY;
  var posofyy = yy;
/*  console.log(posofxx);
  console.log(posofyy);
  console.log(xx, yy);*/
  avantPosX = xx;
  avantPosY = yy;
});
position.addEventListener('mouseup', function(event)
{
 var x = event.clientX;
 var posupofx = x;
 var y = event.clientY;
 var posupofy = y;
/* console.log(posupofx);
 console.log(posupofy);
 console.log(x, y);*/
 apresPosX = x;
 apresPosY = y;
 if(avantPosX > apresPosX + 100 && Math.abs(avantPosY - apresPosY) < 50)
 {
  goLeft();
 }
 else if(avantPosX < apresPosX - 100 && Math.abs(avantPosY - apresPosY) < 50)
 {
  goRight();
 }
if(avantPosY > apresPosY + 100 && Math.abs(avantPosX - apresPosX) < 50)
 {
  goUp();
 }
 else if(avantPosY < apresPosY - 100 && Math.abs(avantPosX - apresPosX) < 50)
 {
  goDown();
 }
});
function positiontest()
{
  if(posofx < posupofx)
  {
    console.log("oui");
  }
}
cible();
cible();
loadGrid();
lasttry();
});