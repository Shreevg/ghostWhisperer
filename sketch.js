var bgIMG
var randImgNumb = 0
var form

var randLabel1;

var sportIMG1, sportIMG2, sportIMG3, sportIMG4, sportIMG5, sportIMG6, sportIMG7, sportIMG8, sportIMG9, sportIMG10; 
var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
var testSprite;
var Srng, colorRNG;

var crystalBallIMG, crystalBallScreen;
//var bballSprite;
var b1; 

function preload(){

  sportIMG1=loadImage("images/sportsIMG/baseball.png")
  sportIMG2=loadImage("images/sportsIMG/bowling.png")
  sportIMG3=loadImage("images/sportsIMG/football.png")
  sportIMG4=loadImage("images/sportsIMG/golf.png")
  sportIMG5=loadImage("images/sportsIMG/hockey.png")
  sportIMG6=loadImage("images/sportsIMG/pingpong.png")
  sportIMG7=loadImage("images/sportsIMG/soccer.png")
  sportIMG8=loadImage("images/sportsIMG/tennis.png")
  sportIMG9=loadImage("images/sportsIMG/volleyball.png")
  sportIMG10=loadImage("images/sportsIMG/basketball.png")

  crystalBallIMG=loadImage("images/crystalBall.png")
  

}

function setup() {
  createCanvas(1200,800);
  crystalBallScreen = createSprite(336, 300, 1, 1)
  crystalBallScreen.addImage("crystal", crystalBallIMG)

b1 = createSprite(crystalBallScreen.x, crystalBallScreen.y-20, 1, 1)  
b1.addImage("bball", sportIMG10)
b1.scale = .18
b1.visible=false

  for(var i=99;i>=0;i=i-1){
    
        textSize(30)
    
        if(i<=99 && i>=80){
//        text(i, 700, 760-(i-80)*35)
        mod9(i, 755, 750-(i-80)*35)
        notMod9(i, 755, 750-(i-80)*35)
        } else if(i>=60){
//          text(i, 800, 760-(i-60)*35)
          mod9(i, 855, 750-(i-60)*35)
          notMod9(i, 855, 750-(i-60)*35)
        } else if(i>=40){
//          text(i, 900, 760-(i-40)*35)
          mod9(i, 955, 750-(i-40)*35)
          notMod9(i, 955, 750-(i-40)*35)
        } else if(i>=20){
//          text(i, 1000, 760-(i-20)*35)
          mod9(i, 1055, 750-(i-20)*35)
          notMod9(i, 1055, 750-(i-20)*35)
        } else if(i>=10){
//          text(i, 1100, 760-i*35)
          mod9(i, 1155, 750-i*35)
          notMod9(i, 1155, 750-(i)*35)
        } else if(i>=0){
//          text("0" + i, 1100, 760-i*35)
          mod9(i, 1155, 750-i*35)
          notMod9(i, 1155, 750-(i)*35)
        }
      }

//  s10.visible=false


  form = new Form()
  form.display()
}

function draw() {
  
  colorRNG = Math.round(random(1,29))
  if(colorRNG===29){
  background(random(170, 220), 20, random(170, 220));  
  }
  
  drawSprites(); 

//console.log(Math.round(random(1,9)))

/*
if(mousePressed(crystalBallScreen)){
var b1 = createSprite(crystalBallScreen.x, crystalBallScreen.y, 1, 1)
b1.addImage("bball", sportIMG10)
*/



  for(var i=99;i>=0;i=i-1){
  fill("lightgray")
    textSize(30)

    if(i<=99 && i>=80){
    text(i, 700, 760-(i-80)*35)
//    mod9(i, 755, 750-(i-80)*35)
//   notMod9(i, 730, 760-(i-80)*35)
    } else if(i>=60){
      text(i, 800, 760-(i-60)*35)
//      mod9(i, 855, 750-(i-60)*35)
    } else if(i>=40){
      text(i, 900, 760-(i-40)*35)
//      mod9(i, 955, 750-(i-40)*35)
    } else if(i>=20){
      text(i, 1000, 760-(i-20)*35)
//      mod9(i, 1055, 750-(i-20)*35)
    } else if(i>=10){
      text(i, 1100, 760-i*35)
//      mod9(i, 1155, 750-i*35)
    } else if(i>=0){
      text("0" + i, 1100, 760-i*35)
//      mod9(i, 1155, 750-i*35)
    }
  }
  
}


function mod9(a1, sIMGx, sIMGy){
  if(a1%9 === 0){
    s10=createSprite(sIMGx, sIMGy, 100, 100)
    s10.addImage("Simg10", sportIMG10)
    s10.scale=30/599
    s10.visible=true
  } 
}


function notMod9(b1, nsIMGx, nsIMGy){
  if(b1%9 !== 0){
//    for(var i=99;i>=0;i=i-1){
      Srng = Math.round(random(1,9))
//          console.log(Srng)
      testSprite = createSprite(nsIMGx, nsIMGy, 100, 100)
switch(Srng){
  case 1: testSprite.addImage("a11", sportIMG1)
  testSprite.scale=30/499
  break;
  case 2: testSprite.addImage("a22", sportIMG2)
  testSprite.scale=30/478
  break
  case 3: testSprite.addImage("a33", sportIMG3)
  testSprite.scale=30/1575
  break
  case 4: testSprite.addImage("a44", sportIMG4)
  testSprite.scale=30/256
  break
  case 5: testSprite.addImage("a55", sportIMG5)
  testSprite.scale=30/812
  break
  case 6: testSprite.addImage("a66", sportIMG6)
  testSprite.scale=30/200
  break
  case 7: testSprite.addImage("a77", sportIMG7)
  testSprite.scale=30/1877
  break
  case 8: testSprite.addImage("a88", sportIMG8)
  testSprite.scale=30/300
  break
  case 9: testSprite.addImage("a99", sportIMG9)
  testSprite.scale=30/598
  break
  default: break
}
}
}

function mouseClicked(){
 // var x1 = mouseX
  //var y1 = mouseY
//  if(x1>crystalBallScreen.x&&x1<crystalBallScreen.x+200&&y1>crystalBallScreen.y&&y1<crystalBallScreen.y+200){
  if(b1.visible===false){
  b1.visible=true
}else{
  b1.visible=false
}
// }

}