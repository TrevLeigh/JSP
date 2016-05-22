var stage;
var manifest;
var KEYCODE_a = 65,
    KEYCODE_s =83,
    KEYCODE_d = 68,
    KEYCODE_f = 70,
    KEYCODE_j = 74,
    KEYCODE_k = 75,
    KEYCODE_l = 76,
    KEYCODE_semi = 186,
    KEYCODE_e= 69,
    KEYCODE_w = 87,
    KEYCODE_t = 84,
    KEYCODE_y = 89,
    KEYCODE_u = 85,
    KEYCODE_shift = 16,
    KEYCODE_space = 32,
    KEYCODE_left = 37,
    KEYCODE_right= 39,
    KEYCODE_caps = 20;

var i = 0;
var songs = ["My Favorite Things", "Say Something"];
var songName;
var newSongName;
var firstNote;
var secondNote;
var thirdNote;
var fourthNote;
var fifthNote;
var sixthNote;
var seventhNote;
var eigthNote;
var ninthNote;
var tenthNote;
var eleventhNote;
        
var secondFirstNote;
var secondSecondNote;
var secondThirdNote;
var secondFourthNote;
var secondFifthNote;
var secondSixthNote;
var secondSeventhNote;
var secondEigthNote;
var secondNinthNote;
var secondTenthNote;
var secondEleventhNote;
var secondTwelthNote;
        
var thirdFirstNote;
var thirdSecondNote;
var thirdThirdNote;
var thirdFourthNote;
var thirdFifthNote;
var thirdSixthNote;
var thirdSeventhNote;
var thirdEigthNote;
var thirdNinthNote;
var thirdTenthNote;
var thirdEleventhNote;
        
var fourthFirstNote;
var fourthSecondNote;
var fourthThirdNote;
var fourthFourthNote;
var fourthFifthNote;
var fourthSixthNote;
var fourthSeventhNote;
var fourthEigthNote;
var fourthNinthNote;
var fourthTenthNote;
var fourthEleventhNote;
var fourthTwelthNote

var blackKeys = [];
var shapes = [];
var c5 = true;
var cS5 = true;
var d5 = true;
var dS5 = true;
var e5 = true;
var f5 = true;
var fS5 = true;
var g5 = true;
var gS5 = true;
var a5 = true;
var aS5 = true;
var b5 = true;
var c6 = true;
var cS6 = true;
var d6 = true;
var dS6 = true;
var e6 = true;
var f6 = true;
var fS6 = true;
var g6 = true;
var gS6 = true;
var a6 = true;
var aS6 = true;
var b6 = true;
var c4 = true;
var cS4 = true;
var d4 = true;
var dS4 = true;
var e4 = true;
var f4 = true;
var fS4 = true;
var g4 = true;
var gS4 = true;
var a4 = true;
var aS4 = true;
var b4 = true;
var shift_held = false;
var space_held = false;
var caps_down = false;


function start(){
    
    stage = new createjs.Stage("myCanvas");
    manifest = [
        {
            src: "C5.mp3",
            id: "cMid"
        },
        {
            src:"Cs5.mp3",
            id:"c#Mid"
        },
        {
            src:"D5.mp3",
            id: "dMid"
        },
        {
            src:"Ds5.mp3",
            id:"d#Mid"
        },
        {
           src:"E5.mp3",
            id: "eMid" 
        },
        {
           src:"F5.mp3",
            id: "fMid" 
        },
        {
            src:"Fs5.mp3",
            id:"f#Mid"
        },
        {
           src:"G5.mp3",
            id: "gMid" 
        },
        {
            src:"Gs5.mp3",
            id:"g#Mid"
        },
        {
           src:"A5.mp3",
            id: "aMid" 
        },
        {
            src:"As5.mp3",
            id:"a#Mid"
        },
        {
           src:"B5.mp3",
            id: "bMid" 
        },
        {
            src:"C6.mp3",
            id:"cHigh"
        },
        {
            src:"Cs6.mp3",
            id:"c#High"
        },
        {
            src:"D6.mp3",
            id:"dHigh"
        },
        {
            src:"Ds6.mp3",
            id:"d#High"
        },
        {
            src:"E6.mp3",
            id:"eHigh"
        },
        {
            src:"F6.mp3",
            id:"fHigh"
        },
        {
            src:"Fs6.mp3",
            id:"f#High"
        },
        {
            src:"G6.mp3",
            id:"gHigh"
        },
        {
            src:"Gs6.mp3",
            id:"g#High"
        },
        {
            src:"A6.mp3",
            id:"aHigh"
        },
        {
            src:"As6.mp3",
            id:"a#High"
        },
        {
            src:"B6.mp3",
            id:"bHigh"
        },
        {
            src:"C4.mp3",
            id:"cLow"
        },
        {
            src:"Cs4.mp3",
            id:"c#Low"
        },
        {
            src:"D4.mp3",
            id:"dLow"
        },
        {
            src:"Ds4.mp3",
            id:"d#Low"
        },
        {
            src:"E4.mp3",
            id:"eLow"
        },
        {
            src:"F4.mp3",
            id:"fLow"
        },
        {
            src:"Fs4.mp3",
            id:"f#Low"
        },
        {
            src:"G4.mp3",
            id:"gLow"
        },
        {
            src:"Gs4.mp3",
            id:"g#Low"
        },
        {
            src:"A4.mp3",
            id:"aLow"
        },
        {
            src:"As4.mp3",
            id:"a#Low"
        },
        {
            src:"B4.mp3",
            id:"bLow"
        }
    ];
    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
    
    loadFiles();
}
function loadComplete(e){
    songName = new createjs.Text(songs[i], '30px Arial', '#000');
    
    songName.x =500;
    songName.y = 10;
    stage.addChild(songName);
    
    instructions = new createjs.Text("Use left and right arrow to change sheet music", '20px Arial', '#000');
    
    instructions.x = 400;
    instructions.y = 50;
    stage.addChild(instructions);
    
    var firstLine = new createjs.Bitmap("images/firstLine.gif");
    firstLine.x = 100;
    firstLine.y = 30;
    firstLine.scaleX = 2.5;
    firstLine.scaleY = 2.5;
    stage.addChild(firstLine);
    
    var secondLine = new createjs.Bitmap("images/OtherLines.png");
    secondLine.x = 125;
    secondLine.y = 190;
    secondLine.scaleX = 2;
    secondLine.scaleY = 1.1;
    stage.addChild(secondLine);
    
    var thirdLine = new createjs.Bitmap("images/OtherLines.png");
    thirdLine.x = 125;
    thirdLine.y = 320;
    thirdLine.scaleX = 2;
    thirdLine.scaleY = 1.1;
    stage.addChild(thirdLine);
    
    var fourthLine = new createjs.Bitmap("images/OtherLines.png");
    fourthLine.x = 125;
    fourthLine.y = 450;
    fourthLine.scaleX = 2;
    fourthLine.scaleY = 1.1;
    stage.addChild(fourthLine);
    
    var fifthLine = new createjs.Bitmap("images/OtherLines.png");
    fifthLine.x = 125;
    fifthLine.y = 580;
    fifthLine.scaleX = 2;
    fifthLine.scaleY = 1.1;
    stage.addChild(fifthLine);
    
    if(songName.text === songs[0] || newSongName == songs[0]){
        stage.removeChild(firstNote);
        stage.removeChild(secondNote);
        stage.removeChild(thirdNote);
        stage.removeChild(fourthNote);
        stage.removeChild(fifthNote);
        stage.removeChild(sixthNote);
        stage.removeChild(seventhNote);
        stage.removeChild(eigthNote);
        stage.removeChild(ninthNote);
        stage.removeChild(tenthNote);
        stage.removeChild(eleventhNote);
        
        stage.removeChild(secondFirstNote);
        stage.removeChild(secondSecondNote);
        stage.removeChild(secondThirdNote);
        stage.removeChild(secondFourthNote);
        stage.removeChild(secondFifthNote);
        stage.removeChild(secondSixthNote);
        stage.removeChild(secondSeventhNote);
        stage.removeChild(secondEigthNote);
        stage.removeChild(secondNinthNote);
        stage.removeChild(secondTenthNote);
        stage.removeChild(secondEleventhNote);
        
        stage.removeChild(thirdFirstNote);
        stage.removeChild(thirdSecondNote);
        stage.removeChild(thirdThirdNote);
        stage.removeChild(thirdFourthNote);
        stage.removeChild(thirdFifthNote);
        stage.removeChild(thirdSixthNote);
        stage.removeChild(thirdSeventhNote);
        stage.removeChild(thirdEigthNote);
        stage.removeChild(thirdNinthNote);
        stage.removeChild(thirdTenthNote);
        
        stage.removeChild(fourthFirstNote);
        stage.removeChild(fourthSecondNote);
        stage.removeChild(fourthThirdNote);
        stage.removeChild(fourthFourthNote);
        stage.removeChild(fourthFifthNote);
        stage.removeChild(fourthSixthNote);
        stage.removeChild(fourthSeventhNote);
        stage.removeChild(fourthEigthNote);
        stage.removeChild(fourthNinthNote);
        stage.removeChild(fourthTenthNote);
        
        firstNote = new createjs.Bitmap("images/Quarter_d.png");
        firstNote.x = 240;
        firstNote.y = 79;
        secondNote = new createjs.Bitmap("images/Quarter_l.png");
        secondNote.x = 290;
        secondNote.y = 105;
        thirdNote = new createjs.Bitmap("images/Quarter_l.png");
        thirdNote.x = 340;
        thirdNote.y = 105;
        fourthNote = new createjs.Bitmap("images/Quarter_t.png");
        fourthNote.x = 450;
        fourthNote.y = 70;
        fifthNote = new createjs.Bitmap("images/Quarter_d.png");
        fifthNote.x = 500;
        fifthNote.y = 79;
        sixthNote = new createjs.Bitmap("images/Quarter_d.png");
        sixthNote.x = 550;
        sixthNote.y = 79;
        seventhNote = new createjs.Bitmap("images/Quarter_SL.png");
        seventhNote.x = 660;
        seventhNote.y = 105;
        eigthNote = new createjs.Bitmap("images/Quarter_d.png");
        eigthNote.x = 710;
        eigthNote.y = 79;
        ninthNote = new createjs.Bitmap("images/Quarter_d.png");
        ninthNote.x = 760;
        ninthNote.y = 79;
        tenthNote = new createjs.Bitmap("images/Quarter_t.png");
        tenthNote.x = 870;
        tenthNote.y = 70;
        eleventhNote = new createjs.Bitmap("images/Quarter_d.png");
        eleventhNote.x=920;
        eleventhNote.y = 79;
        
        secondFirstNote = new createjs.Bitmap("images/Quarter_d.png");
        secondFirstNote.x = 200;
        secondFirstNote.y = 220;
        secondSecondNote = new createjs.Bitmap("images/Quarter_l.png");
        secondSecondNote.x = 250;
        secondSecondNote.y = 240;
        secondThirdNote = new createjs.Bitmap("images/Quarter_l.png");
        secondThirdNote.x = 300;
        secondThirdNote.y = 240;
        secondFourthNote = new createjs.Bitmap("images/Quarter_t.png");
        secondFourthNote.x = 450;
        secondFourthNote.y = 210;
        secondFifthNote = new createjs.Bitmap("images/Quarter_d.png");
        secondFifthNote.x = 500;
        secondFifthNote.y = 220;
        secondSixthNote = new createjs.Bitmap("images/Quarter_d.png");
        secondSixthNote.x = 550;
        secondSixthNote.y = 220;
        secondSeventhNote = new createjs.Bitmap("images/Quarter_SL.png");
        secondSeventhNote.x = 700;
        secondSeventhNote.y = 240;
        secondEigthNote = new createjs.Bitmap("images/Quarter_d.png");
        secondEigthNote.x = 750;
        secondEigthNote.y = 220;
        secondNinthNote = new createjs.Bitmap("images/Quarter_d.png");
        secondNinthNote.x = 800;
        secondNinthNote.y = 220;
        secondTenthNote = new createjs.Bitmap("images/Quarter_t.png");
        secondTenthNote.x = 950;
        secondTenthNote.y = 210;
        secondEleventhNote = new createjs.Bitmap("images/Quarter_d.png");
        secondEleventhNote.x=1000;
        secondEleventhNote.y = 220;
        
        thirdFirstNote = new createjs.Bitmap("images/Quarter_d.png");
        thirdFirstNote.x = 200;
        thirdFirstNote.y = 350;
        thirdSecondNote = new createjs.Bitmap("images/Quarter_l.png");
        thirdSecondNote.x = 250;
        thirdSecondNote.y = 370;
        thirdThirdNote = new createjs.Bitmap("images/Quarter_k.png");
        thirdThirdNote.x = 300;
        thirdThirdNote.y = 317;
        thirdFourthNote = new createjs.Bitmap("images/Quarter_d.png");
        thirdFourthNote.x = 450;
        thirdFourthNote.y = 350;
        thirdFifthNote = new createjs.Bitmap("images/Quarter_t.png");
        thirdFifthNote.x = 500;
        thirdFifthNote.y = 340;
        thirdSixthNote = new createjs.Bitmap("images/Quarter_s.png");
        thirdSixthNote.x = 550;
        thirdSixthNote.y = 360;
        thirdSeventhNote = new createjs.Bitmap("images/Quarter_s.png");
        thirdSeventhNote.x = 700;
        thirdSeventhNote.y = 360;
        thirdEigthNote = new createjs.Bitmap("images/Quarter_k.png");
        thirdEigthNote.x = 750;
        thirdEigthNote.y = 316;
        thirdNinthNote = new createjs.Bitmap("images/Quarter_j.png");
        thirdNinthNote.x = 800;
        thirdNinthNote.y = 340;
        thirdTenthNote = new createjs.Bitmap("images/Half_a.png");
        thirdTenthNote.x = 950;
        thirdTenthNote.y = 370;
        
        fourthFirstNote = new createjs.Bitmap("images/Quarter_SL.png");
        fourthFirstNote.x = 200;
        fourthFirstNote.y = 500;
        fourthSecondNote = new createjs.Bitmap("images/Quarter_a.png");
        fourthSecondNote.x = 250;
        fourthSecondNote.y = 495;
        fourthThirdNote = new createjs.Bitmap("images/Quarter_s.png");
        fourthThirdNote.x = 300;
        fourthThirdNote.y = 490;
        fourthFourthNote = new createjs.Bitmap("images/Quarter_d.png");
        fourthFourthNote.x = 450;
        fourthFourthNote.y = 480;
        fourthFifthNote = new createjs.Bitmap("images/Quarter_t.png");
        fourthFifthNote.x = 500;
        fourthFifthNote.y = 470;
        fourthSixthNote = new createjs.Bitmap("images/Quarter_j.png");
        fourthSixthNote.x = 550;
        fourthSixthNote.y = 455;
        fourthSeventhNote = new createjs.Bitmap("images/Quarter_k.png");
        fourthSeventhNote.x = 700;
        fourthSeventhNote.y = 446;
        fourthEigthNote = new createjs.Bitmap("images/Quarter_l.png");
        fourthEigthNote.x = 750;
        fourthEigthNote.y = 500;
        fourthNinthNote = new createjs.Bitmap("images/Quarter_k.png");
        fourthNinthNote.x = 800;
        fourthNinthNote.y = 446;
        fourthTenthNote = new createjs.Bitmap("images/Half_e.png");
        fourthTenthNote.x = 950;
        fourthTenthNote.y = 500;
        
        
        stage.addChild(firstNote);
        stage.addChild(secondNote);
        stage.addChild(thirdNote);
        stage.addChild(fourthNote);
        stage.addChild(fifthNote);
        stage.addChild(sixthNote);
        stage.addChild(seventhNote);
        stage.addChild(eigthNote);
        stage.addChild(ninthNote);
        stage.addChild(tenthNote);
        stage.addChild(eleventhNote);
        
        stage.addChild(secondFirstNote);
        stage.addChild(secondSecondNote);
        stage.addChild(secondThirdNote);
        stage.addChild(secondFourthNote);
        stage.addChild(secondFifthNote);
        stage.addChild(secondSixthNote);
        stage.addChild(secondSeventhNote);
        stage.addChild(secondEigthNote);
        stage.addChild(secondNinthNote);
        stage.addChild(secondTenthNote);
        stage.addChild(secondEleventhNote);
        
        stage.addChild(thirdFirstNote);
        stage.addChild(thirdSecondNote);
        stage.addChild(thirdThirdNote);
        stage.addChild(thirdFourthNote);
        stage.addChild(thirdFifthNote);
        stage.addChild(thirdSixthNote);
        stage.addChild(thirdSeventhNote);
        stage.addChild(thirdEigthNote);
        stage.addChild(thirdNinthNote);
        stage.addChild(thirdTenthNote);
        
        stage.addChild(fourthFirstNote);
        stage.addChild(fourthSecondNote);
        stage.addChild(fourthThirdNote);
        stage.addChild(fourthFourthNote);
        stage.addChild(fourthFifthNote);
        stage.addChild(fourthSixthNote);
        stage.addChild(fourthSeventhNote);
        stage.addChild(fourthEigthNote);
        stage.addChild(fourthNinthNote);
        stage.addChild(fourthTenthNote);
    }
    
    
    console.log(songName);
    var back = new createjs.Shape();
    back.graphics.beginFill("Black").drawRect(0,0,1080,50);
    back.x = 100;
    back.y = 50;
    stage.addChild(back);
    var bg = new createjs.Shape();
    bg.graphics.beginFill("Black").drawRect(0,0,1080,155);
    bg.x = 100;
    bg.y = 100;
    stage.addChild(bg);
    
    
    
    
    
    var key1 = new createjs.Shape();
    var key2 = new createjs.Shape();
    var key3 = new createjs.Shape();
    var key4 = new createjs.Shape();
    var key5 = new createjs.Shape();
    var key6 = new createjs.Shape();
    var key7 = new createjs.Shape();
    var key8 = new createjs.Shape();
    var key9 = new createjs.Shape();
    var key10 = new createjs.Shape();
    var key11 = new createjs.Shape();
    var key12 = new createjs.Shape();
    var key13 = new createjs.Shape();
    var key14 = new createjs.Shape();
    var key15 = new createjs.Shape();
    var key16 = new createjs.Shape();
    var key17 = new createjs.Shape();
    var key18 = new createjs.Shape();
    var key19 = new createjs.Shape();
    var key20 = new createjs.Shape();
    var key21 = new createjs.Shape();
    
    var bKey1 = new createjs.Shape();
    var bKey2 = new createjs.Shape();
    var bKey3 = new createjs.Shape();
    var bKey4 = new createjs.Shape();
    var bKey5 = new createjs.Shape();
    var bKey6 = new createjs.Shape();
    var bKey7 = new createjs.Shape();
    var bKey8 = new createjs.Shape();
    var bKey9 = new createjs.Shape();
    var bKey10 = new createjs.Shape();
    var bKey11 = new createjs.Shape();
    var bKey12 = new createjs.Shape();
    var bKey13 = new createjs.Shape();
    var bKey14 = new createjs.Shape();
    var bKey15 = new createjs.Shape();

    
    shapes.push(key1);
    shapes.push(key2);
    shapes.push(key3);
    shapes.push(key4);
    shapes.push(key5);
    shapes.push(key6);
    shapes.push(key7);
    shapes.push(key8);
    shapes.push(key9);
    shapes.push(key10);
    shapes.push(key11);
    shapes.push(key12);
    shapes.push(key13);
    shapes.push(key14);
    shapes.push(key15);
    shapes.push(key16);
    shapes.push(key17);
    shapes.push(key18);
    shapes.push(key19);
    shapes.push(key20);
    shapes.push(key21);
    
    blackKeys.push(bKey1);
    blackKeys.push(bKey2);
    blackKeys.push(bKey3);
    blackKeys.push(bKey4);
    blackKeys.push(bKey5);
    blackKeys.push(bKey6);
    blackKeys.push(bKey7);
    blackKeys.push(bKey8);
    blackKeys.push(bKey9);
    blackKeys.push(bKey10);
    blackKeys.push(bKey11);
    blackKeys.push(bKey12);
    blackKeys.push(bKey13);
    blackKeys.push(bKey14);
    blackKeys.push(bKey15);
    
    shapes[0].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[0].x = 105;
    shapes[0].y = 100;
    
    shapes[1].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[1].x = 156;
    shapes[1].y = 100;
    
    shapes[2].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[2].x = 207;
    shapes[2].y = 100;
    
    shapes[3].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[3].x = 258;
    shapes[3].y = 100;
    
    shapes[4].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[4].x = 309;
    shapes[4].y = 100;
    
    shapes[5].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[5].x = 360;
    shapes[5].y = 100;
    
    shapes[6].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[6].x = 411;
    shapes[6].y = 100;
    
    shapes[7].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[7].x = 462;
    shapes[7].y = 100;
    
    shapes[8].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[8].x = 513;
    shapes[8].y = 100;
    
    shapes[9].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[9].x = 564;
    shapes[9].y = 100;
    
    shapes[10].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[10].x = 615;
    shapes[10].y = 100;
    
    shapes[11].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[11].x = 666;
    shapes[11].y = 100;
    
    shapes[12].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[12].x = 717;
    shapes[12].y = 100;
    
    shapes[13].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[13].x = 768;
    shapes[13].y = 100;
    
    shapes[14].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[14].x = 819;
    shapes[14].y = 100;
    
    shapes[15].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[15].x = 870;
    shapes[15].y = 100;
    
    shapes[16].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[16].x = 921;
    shapes[16].y = 100;
    
    shapes[17].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[17].x = 972;
    shapes[17].y = 100;
    
    shapes[18].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[18].x = 1023;
    shapes[18].y = 100;
    
    shapes[19].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[19].x = 1074;
    shapes[19].y = 100;
    
    shapes[20].graphics.beginFill("White").drawRect(0,0,50,150);
    shapes[20].x = 1125;
    shapes[20].y = 100;
    
    blackKeys[0].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[0].x = 135;
    blackKeys[0].y = 100;
    
    blackKeys[1].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[1].x = 190;
    blackKeys[1].y = 100;
    
    blackKeys[2].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[2].x = 290;
    blackKeys[2].y = 100;
    
    blackKeys[3].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[3].x = 340;
    blackKeys[3].y = 100;
    
    blackKeys[4].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[4].x = 394;
    blackKeys[4].y = 100;
    
    blackKeys[5].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[5].x = 494;
    blackKeys[5].y = 100;
    
    blackKeys[6].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[6].x = 544;
    blackKeys[6].y = 100;
    
    blackKeys[7].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[7].x = 644;
    blackKeys[7].y = 100;
    
    blackKeys[8].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[8].x = 696;
    blackKeys[8].y = 100;
    
    blackKeys[9].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[9].x = 746;
    blackKeys[9].y = 100;
    
    blackKeys[10].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[10].x = 847;
    blackKeys[10].y = 100;
    
    blackKeys[11].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[11].x = 899;
    blackKeys[11].y = 100;
    
    blackKeys[12].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[12].x = 1000;
    blackKeys[12].y = 100;
    
    blackKeys[13].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[13].x = 1054;
    blackKeys[13].y = 100;
    
    blackKeys[14].graphics.beginFill("Black").drawRect(0,0,40,90);
    blackKeys[14].x = 1104;
    blackKeys[14].y = 100;
    
    stage.addChild(shapes[0]);
    stage.addChild(shapes[1]);
    stage.addChild(shapes[2]);
    stage.addChild(shapes[3]);
    stage.addChild(shapes[4]);
    stage.addChild(shapes[5]);
    stage.addChild(shapes[6]);
    stage.addChild(shapes[7]);
    stage.addChild(shapes[8]);
    stage.addChild(shapes[9]);
    stage.addChild(shapes[10]);
    stage.addChild(shapes[11]);
    stage.addChild(shapes[12]);
    stage.addChild(shapes[13]);
    stage.addChild(shapes[14]);
    stage.addChild(shapes[15]);
    stage.addChild(shapes[16]);
    stage.addChild(shapes[17]);
    stage.addChild(shapes[18]);
    stage.addChild(shapes[19]);
    stage.addChild(shapes[20]);
    
    stage.addChild(blackKeys[0]);
    stage.addChild(blackKeys[1]);
    stage.addChild(blackKeys[2]);
    stage.addChild(blackKeys[3]);
    stage.addChild(blackKeys[4]);
    stage.addChild(blackKeys[5]);
    stage.addChild(blackKeys[6]);
    stage.addChild(blackKeys[7]);
    stage.addChild(blackKeys[8]);
    stage.addChild(blackKeys[9]);
    stage.addChild(blackKeys[10]);
    stage.addChild(blackKeys[11]);
    stage.addChild(blackKeys[12]);
    stage.addChild(blackKeys[13]);
    stage.addChild(blackKeys[14]);
    
    var space_A = new createjs.Text("Spc+A", "15px Arial", "#000");
    space_A.x = 105;
    space_A.y = 220;
    space_A.textBaseline = "alphabetic";
    stage.addChild(space_A);
    
    var space_S = new createjs.Text("Spc+S", "15px Arial", "#000");
    space_S.x = 158;
    space_S.y = 220;
    space_S.textBaseline = "alphabetic";
    stage.addChild(space_S);
    
    var space_D = new createjs.Text("Spc+D", "15px Arial", "#000");
    space_D.x = 209;
    space_D.y = 220;
    space_D.textBaseline = "alphabetic";
    stage.addChild(space_D);
    
    var space_F = new createjs.Text("Spc+F", "15px Arial", "#000");
    space_F.x = 260;
    space_F.y = 220;
    space_F.textBaseline = "alphabetic";
    stage.addChild(space_F);
    
    var space_J = new createjs.Text("Spc+J", "15px Arial", "#000");
    space_J.x = 311;
    space_J.y = 220;
    space_J.textBaseline = "alphabetic";
    stage.addChild(space_J);
    
    var space_K = new createjs.Text("Spc+K", "15px Arial", "#000");
    space_K.x = 362;
    space_K.y = 220;
    space_K.textBaseline = "alphabetic";
    stage.addChild(space_K);
    
    var space_L = new createjs.Text("Spc+L", "15px Arial", "#000");
    space_L.x = 414;
    space_L.y = 220;
    space_L.textBaseline = "alphabetic";
    stage.addChild(space_L);
    
    var space_W = new createjs.Text("Spc+W", "11px Arial", "#FFF");
    space_W.x = 136;
    space_W.y = 150;
    space_W.textBaseline = "alphabetic";
    stage.addChild(space_W);
    
    var space_E = new createjs.Text("Spc+E", "11px Arial", "#FFF");
    space_E.x = 193;
    space_E.y = 150;
    space_E.textBaseline = "alphabetic";
    stage.addChild(space_E);
    
    var space_T = new createjs.Text("Spc+T", "11px Arial", "#FFF");
    space_T.x = 295;
    space_T.y = 150;
    space_T.textBaseline = "alphabetic";
    stage.addChild(space_T);
    
    var space_Y = new createjs.Text("Spc+Y", "11px Arial", "#FFF");
    space_Y.x = 344;
    space_Y.y = 150;
    space_Y.textBaseline = "alphabetic";
    stage.addChild(space_Y);
    
    var space_U = new createjs.Text("Spc+U", "11px Arial", "#FFF");
    space_U.x = 396;
    space_U.y = 150;
    space_U.textBaseline = "alphabetic";
    stage.addChild(space_U);
    
    var a = new createjs.Text("a", "15px Arial", "#000");
    a.x = 480;
    a.y = 220;
    a.textBaseline = "alphabetic";
    stage.addChild(a);
    
    var s = new createjs.Text("s", "15px Arial", "#000");
    s.x = 535;
    s.y = 220;
    s.textBaseline = "alphabetic";
    stage.addChild(s);
    
    var d = new createjs.Text("d", "15px Arial", "#000");
    d.x = 586;
    d.y = 220;
    d.textBaseline = "alphabetic";
    stage.addChild(d);
    
    var f = new createjs.Text("f", "15px Arial", "#000");
    f.x = 637;
    f.y = 220;
    f.textBaseline = "alphabetic";
    stage.addChild(f);
    
    var j = new createjs.Text("j", "15px Arial", "#000");
    j.x = 688;
    j.y = 220;
    j.textBaseline = "alphabetic";
    stage.addChild(j);
    
    var k = new createjs.Text("k", "15px Arial", "#000");
    k.x = 739;
    k.y = 220;
    k.textBaseline = "alphabetic";
    stage.addChild(k);
    
    var l = new createjs.Text("l", "15px Arial", "#000");
    l.x = 789;
    l.y = 220;
    l.textBaseline = "alphabetic";
    stage.addChild(l);
    
    var semi = new createjs.Text(";", "15px Arial", "#000");
    semi.x = 840;
    semi.y = 220;
    semi.textBaseline = "alphabetic";
    stage.addChild(semi);
    
    var w = new createjs.Text("w", "15px Arial", "#FFF");
    w.x = 507;
    w.y = 140;
    w.textBaselin = "alphabetic";
    stage.addChild(w);
    
    var e = new createjs.Text("e", "15px Arial", "#FFF");
    e.x = 559;
    e.y = 140;
    e.textBaselin = "alphabetic";
    stage.addChild(e);
    
    var t = new createjs.Text("t", "15px Arial", "#FFF");
    t.x = 661;
    t.y = 140;
    t.textBaselin = "alphabetic";
    stage.addChild(t);
    
    var y = new createjs.Text("y", "15px Arial", "#FFF");
    y.x = 713;
    y.y = 140;
    y.textBaselin = "alphabetic";
    stage.addChild(y);
    
    var u = new createjs.Text("u", "15px Arial", "#FFF");
    u.x = 762;
    u.y = 140;
    u.textBaselin = "alphabetic";
    stage.addChild(u);
    
    var S = new createjs.Text("S", "15px Arial", "#000");
    S.x = 891;
    S.y = 220;
    S.textBaseline = "alphabetic";
    stage.addChild(S);
    
    var D = new createjs.Text("D", "15px Arial", "#000");
    D.x = 942;
    D.y = 220;
    D.textBaseline = "alphabetic";
    stage.addChild(D);
    
    var F = new createjs.Text("F", "15px Arial", "#000");
    F.x = 993;
    F.y = 220;
    F.textBaseline = "alphabetic";
    stage.addChild(F);
    
    var J = new createjs.Text("J", "15px Arial", "#000");
    J.x = 1044;
    J.y = 220;
    J.textBaseline = "alphabetic";
    stage.addChild(J);
    
    var K = new createjs.Text("K", "15px Arial", "#000");
    K.x = 1095;
    K.y = 220;
    K.textBaseline = "alphabetic";
    stage.addChild(K);
    
    var L = new createjs.Text("L", "15px Arial", "#000");
    L.x = 1146;
    L.y = 220;
    L.textBaseline = "alphabetic";
    stage.addChild(L);
    
    var W = new createjs.Text("W", "15px Arial", "#FFF");
    W.x = 860;
    W.y = 150;
    W.textBaseline = "alphabetic";
    stage.addChild(W);
    
    var E = new createjs.Text("E", "15px Arial", "#FFF");
    E.x = 914;
    E.y = 150;
    E.textBaseline = "alphabetic";
    stage.addChild(E);
    
    var T = new createjs.Text("T", "15px Arial", "#FFF");
    T.x = 1015;
    T.y = 150;
    T.textBaseline = "alphabetic";
    stage.addChild(T);
    
    var Y = new createjs.Text("Y", "15px Arial", "#FFF");
    Y.x = 1068;
    Y.y = 150;
    Y.textBaseline = "alphabetic";
    stage.addChild(Y);
    
    var U = new createjs.Text("U", "15px Arial", "#FFF");
    U.x = 1119;
    U.y = 150;
    U.textBaseline = "alphabetic";
    stage.addChild(U);
    
    var Song = new createjs.Text("Mary Had A Little Lamb", "25px Arial", "#000");
    Song.x = 500;
    Song.y = 300;
    
    var notes = ["k","j","f","a",";"];
    
    var first = new createjs.Text(notes[0] + "," + notes[1], "20px Arial", "#000");
    first.x = 550;
    first.y = 350;
    
    var second = new createjs.Text(notes[2] + "," + notes [1], "20px Arial", "#000");
    second.x = 580;
    second.y = 350;
    
    var third = new createjs.Text(notes[0] + "," + notes[0], "20px Arial", "#000");
    third.x = 610;
    third.y = 350;
    
    var forth = new createjs.Text(notes[0], "20px Arial", "#000");
    forth.x = 640;
    forth.y = 350;
    
    var fifth = new createjs.Text(notes[1] + "," + notes[1] ,"20px Arial", "#000");
    fifth.x = 660;
    fifth.y = 350;
    
    var sixth = new createjs.Text(notes[1] ,"20px Arial", "#000");
    sixth.x = 680;
    sixth.y = 350;
    
    var seventh = new createjs.Text(notes[0]+ "," + notes[4] ,"20px Arial", "#000");
    seventh.x = 690;
    seventh.y = 350;
    
    var eighth = new createjs.Text(notes[4] ,"20px Arial", "#000");
    eighth.x = 720;
    eighth.y = 350;
    
    var container = new createjs.Container();
    container.addChild(bg, shapes[0], shapes[1], shapes[2], shapes[3], shapes[4], shapes[5], shapes[6], shapes[7], shapes[8], shapes[9], shapes[10], shapes[11], shapes[12], shapes[13], shapes[14], shapes[15], shapes[16], shapes[17], shapes[18], shapes[19], shapes[20], blackKeys[0], blackKeys[1], blackKeys[2], blackKeys[3], blackKeys[4], blackKeys[5], blackKeys[6], blackKeys[7], blackKeys[8], blackKeys[9], blackKeys[10], blackKeys[11], blackKeys[12], blackKeys[13], blackKeys[14], back, space_A, space_S, space_D, space_F, space_J, space_K, space_L, space_T, space_U, space_W, space_E,space_Y, a, s, d, f, j, k, l, semi, w,e,t,y,u, S,D,F,J,K,L,W,E,T,Y,U);
    
    container.y = 700;
    
    stage.addChild(container);
    
    
    
    stage.update();
    
}

function loadFiles(){
    var image = new Image();
    
    createjs.Sound.alternateExtensions = ["mp3"];
    queue = new createjs.LoadQueue(true, "sounds/");
    
    queue.installPlugin(createjs.Sound);
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);
}


function handleKeyDown(e) {
    switch (e.keyCode) {
        case KEYCODE_left:
            if(i > 0){
                stage.removeChild(firstNote);
                stage.removeChild(secondNote);
                stage.removeChild(thirdNote);
                stage.removeChild(fourthNote);
                stage.removeChild(fifthNote);
                stage.removeChild(sixthNote);
                stage.removeChild(seventhNote);
                stage.removeChild(eigthNote);
                stage.removeChild(ninthNote);
                stage.removeChild(tenthNote);
                stage.removeChild(eleventhNote);

                stage.removeChild(secondFirstNote);
                stage.removeChild(secondSecondNote);
                stage.removeChild(secondThirdNote);
                stage.removeChild(secondFourthNote);
                stage.removeChild(secondFifthNote);
                stage.removeChild(secondSixthNote);
                stage.removeChild(secondSeventhNote);
                stage.removeChild(secondEigthNote);
                stage.removeChild(secondNinthNote);
                stage.removeChild(secondTenthNote);
                stage.removeChild(secondEleventhNote);

                stage.removeChild(thirdFirstNote);
                stage.removeChild(thirdSecondNote);
                stage.removeChild(thirdThirdNote);
                stage.removeChild(thirdFourthNote);
                stage.removeChild(thirdFifthNote);
                stage.removeChild(thirdSixthNote);
                stage.removeChild(thirdSeventhNote);
                stage.removeChild(thirdEigthNote);
                stage.removeChild(thirdNinthNote);
                stage.removeChild(thirdTenthNote);
                stage.removeChild(thirdEleventhNote);

                stage.removeChild(fourthFirstNote);
                stage.removeChild(fourthSecondNote);
                stage.removeChild(fourthThirdNote);
                stage.removeChild(fourthFourthNote);
                stage.removeChild(fourthFifthNote);
                stage.removeChild(fourthSixthNote);
                stage.removeChild(fourthSeventhNote);
                stage.removeChild(fourthEigthNote);
                stage.removeChild(fourthNinthNote);
                stage.removeChild(fourthTenthNote);
                stage.removeChild(fourthEleventhNote);
                stage.removeChild(fourthTwelthNote);
                stage.removeChild(songName);
                stage.removeChild(newSongName);
                
                i--;
                newSongName = new createjs.Text(songs[i], '30px Arial', '#000');
                
                newSongName.x =500;
                newSongName.y = 10;
                stage.addChild(newSongName);
                if(newSongName.text === songs[0]){
                    firstNote = new createjs.Bitmap("images/Quarter_d.png");
                    firstNote.x = 240;
                    firstNote.y = 79;
                    secondNote = new createjs.Bitmap("images/Quarter_l.png");
                    secondNote.x = 290;
                    secondNote.y = 105;
                    thirdNote = new createjs.Bitmap("images/Quarter_l.png");
                    thirdNote.x = 340;
                    thirdNote.y = 105;
                    fourthNote = new createjs.Bitmap("images/Quarter_t.png");
                    fourthNote.x = 450;
                    fourthNote.y = 70;
                    fifthNote = new createjs.Bitmap("images/Quarter_d.png");
                    fifthNote.x = 500;
                    fifthNote.y = 79;
                    sixthNote = new createjs.Bitmap("images/Quarter_d.png");
                    sixthNote.x = 550;
                    sixthNote.y = 79;
                    seventhNote = new createjs.Bitmap("images/Quarter_SL.png");
                    seventhNote.x = 660;
                    seventhNote.y = 105;
                    eigthNote = new createjs.Bitmap("images/Quarter_d.png");
                    eigthNote.x = 710;
                    eigthNote.y = 79;
                    ninthNote = new createjs.Bitmap("images/Quarter_d.png");
                    ninthNote.x = 760;
                    ninthNote.y = 79;
                    tenthNote = new createjs.Bitmap("images/Quarter_t.png");
                    tenthNote.x = 870;
                    tenthNote.y = 70;
                    eleventhNote = new createjs.Bitmap("images/Quarter_d.png");
                    eleventhNote.x=920;
                    eleventhNote.y = 79;

                    secondFirstNote = new createjs.Bitmap("images/Quarter_d.png");
                    secondFirstNote.x = 200;
                    secondFirstNote.y = 220;
                    secondSecondNote = new createjs.Bitmap("images/Quarter_l.png");
                    secondSecondNote.x = 250;
                    secondSecondNote.y = 240;
                    secondThirdNote = new createjs.Bitmap("images/Quarter_l.png");
                    secondThirdNote.x = 300;
                    secondThirdNote.y = 240;
                    secondFourthNote = new createjs.Bitmap("images/Quarter_t.png");
                    secondFourthNote.x = 450;
                    secondFourthNote.y = 210;
                    secondFifthNote = new createjs.Bitmap("images/Quarter_d.png");
                    secondFifthNote.x = 500;
                    secondFifthNote.y = 220;
                    secondSixthNote = new createjs.Bitmap("images/Quarter_d.png");
                    secondSixthNote.x = 550;
                    secondSixthNote.y = 220;
                    secondSeventhNote = new createjs.Bitmap("images/Quarter_SL.png");
                    secondSeventhNote.x = 700;
                    secondSeventhNote.y = 240;
                    secondEigthNote = new createjs.Bitmap("images/Quarter_d.png");
                    secondEigthNote.x = 750;
                    secondEigthNote.y = 220;
                    secondNinthNote = new createjs.Bitmap("images/Quarter_d.png");
                    secondNinthNote.x = 800;
                    secondNinthNote.y = 220;
                    secondTenthNote = new createjs.Bitmap("images/Quarter_t.png");
                    secondTenthNote.x = 950;
                    secondTenthNote.y = 210;
                    secondEleventhNote = new createjs.Bitmap("images/Quarter_d.png");
                    secondEleventhNote.x=1000;
                    secondEleventhNote.y = 220;

                    thirdFirstNote = new createjs.Bitmap("images/Quarter_d.png");
                    thirdFirstNote.x = 200;
                    thirdFirstNote.y = 350;
                    thirdSecondNote = new createjs.Bitmap("images/Quarter_l.png");
                    thirdSecondNote.x = 250;
                    thirdSecondNote.y = 370;
                    thirdThirdNote = new createjs.Bitmap("images/Quarter_k.png");
                    thirdThirdNote.x = 300;
                    thirdThirdNote.y = 317;
                    thirdFourthNote = new createjs.Bitmap("images/Quarter_d.png");
                    thirdFourthNote.x = 450;
                    thirdFourthNote.y = 350;
                    thirdFifthNote = new createjs.Bitmap("images/Quarter_t.png");
                    thirdFifthNote.x = 500;
                    thirdFifthNote.y = 340;
                    thirdSixthNote = new createjs.Bitmap("images/Quarter_s.png");
                    thirdSixthNote.x = 550;
                    thirdSixthNote.y = 360;
                    thirdSeventhNote = new createjs.Bitmap("images/Quarter_s.png");
                    thirdSeventhNote.x = 700;
                    thirdSeventhNote.y = 360;
                    thirdEigthNote = new createjs.Bitmap("images/Quarter_k.png");
                    thirdEigthNote.x = 750;
                    thirdEigthNote.y = 316;
                    thirdNinthNote = new createjs.Bitmap("images/Quarter_j.png");
                    thirdNinthNote.x = 800;
                    thirdNinthNote.y = 340;
                    thirdTenthNote = new createjs.Bitmap("images/Half_a.png");
                    thirdTenthNote.x = 950;
                    thirdTenthNote.y = 370;

                    fourthFirstNote = new createjs.Bitmap("images/Quarter_SL.png");
                    fourthFirstNote.x = 200;
                    fourthFirstNote.y = 500;
                    fourthSecondNote = new createjs.Bitmap("images/Quarter_a.png");
                    fourthSecondNote.x = 250;
                    fourthSecondNote.y = 495;
                    fourthThirdNote = new createjs.Bitmap("images/Quarter_s.png");
                    fourthThirdNote.x = 300;
                    fourthThirdNote.y = 490;
                    fourthFourthNote = new createjs.Bitmap("images/Quarter_d.png");
                    fourthFourthNote.x = 450;
                    fourthFourthNote.y = 480;
                    fourthFifthNote = new createjs.Bitmap("images/Quarter_t.png");
                    fourthFifthNote.x = 500;
                    fourthFifthNote.y = 470;
                    fourthSixthNote = new createjs.Bitmap("images/Quarter_j.png");
                    fourthSixthNote.x = 550;
                    fourthSixthNote.y = 455;
                    fourthSeventhNote = new createjs.Bitmap("images/Quarter_k.png");
                    fourthSeventhNote.x = 700;
                    fourthSeventhNote.y = 446;
                    fourthEigthNote = new createjs.Bitmap("images/Quarter_l.png");
                    fourthEigthNote.x = 750;
                    fourthEigthNote.y = 500;
                    fourthNinthNote = new createjs.Bitmap("images/Quarter_k.png");
                    fourthNinthNote.x = 800;
                    fourthNinthNote.y = 446;
                    fourthTenthNote = new createjs.Bitmap("images/Half_e.png");
                    fourthTenthNote.x = 950;
                    fourthTenthNote.y = 500;


                    stage.addChild(firstNote);
                    stage.addChild(secondNote);
                    stage.addChild(thirdNote);
                    stage.addChild(fourthNote);
                    stage.addChild(fifthNote);
                    stage.addChild(sixthNote);
                    stage.addChild(seventhNote);
                    stage.addChild(eigthNote);
                    stage.addChild(ninthNote);
                    stage.addChild(tenthNote);
                    stage.addChild(eleventhNote);

                    stage.addChild(secondFirstNote);
                    stage.addChild(secondSecondNote);
                    stage.addChild(secondThirdNote);
                    stage.addChild(secondFourthNote);
                    stage.addChild(secondFifthNote);
                    stage.addChild(secondSixthNote);
                    stage.addChild(secondSeventhNote);
                    stage.addChild(secondEigthNote);
                    stage.addChild(secondNinthNote);
                    stage.addChild(secondTenthNote);
                    stage.addChild(secondEleventhNote);

                    stage.addChild(thirdFirstNote);
                    stage.addChild(thirdSecondNote);
                    stage.addChild(thirdThirdNote);
                    stage.addChild(thirdFourthNote);
                    stage.addChild(thirdFifthNote);
                    stage.addChild(thirdSixthNote);
                    stage.addChild(thirdSeventhNote);
                    stage.addChild(thirdEigthNote);
                    stage.addChild(thirdNinthNote);
                    stage.addChild(thirdTenthNote);

                    stage.addChild(fourthFirstNote);
                    stage.addChild(fourthSecondNote);
                    stage.addChild(fourthThirdNote);
                    stage.addChild(fourthFourthNote);
                    stage.addChild(fourthFifthNote);
                    stage.addChild(fourthSixthNote);
                    stage.addChild(fourthSeventhNote);
                    stage.addChild(fourthEigthNote);
                    stage.addChild(fourthNinthNote);
                    stage.addChild(fourthTenthNote);
            }
                stage.update();
            }
            break;
        case KEYCODE_right:
            if(i < songs.length-1){
                stage.removeChild(firstNote);
                stage.removeChild(secondNote);
                stage.removeChild(thirdNote);
                stage.removeChild(fourthNote);
                stage.removeChild(fifthNote);
                stage.removeChild(sixthNote);
                stage.removeChild(seventhNote);
                stage.removeChild(eigthNote);
                stage.removeChild(ninthNote);
                stage.removeChild(tenthNote);
                stage.removeChild(eleventhNote);

                stage.removeChild(secondFirstNote);
                stage.removeChild(secondSecondNote);
                stage.removeChild(secondThirdNote);
                stage.removeChild(secondFourthNote);
                stage.removeChild(secondFifthNote);
                stage.removeChild(secondSixthNote);
                stage.removeChild(secondSeventhNote);
                stage.removeChild(secondEigthNote);
                stage.removeChild(secondNinthNote);
                stage.removeChild(secondTenthNote);
                stage.removeChild(secondEleventhNote);

                stage.removeChild(thirdFirstNote);
                stage.removeChild(thirdSecondNote);
                stage.removeChild(thirdThirdNote);
                stage.removeChild(thirdFourthNote);
                stage.removeChild(thirdFifthNote);
                stage.removeChild(thirdSixthNote);
                stage.removeChild(thirdSeventhNote);
                stage.removeChild(thirdEigthNote);
                stage.removeChild(thirdNinthNote);
                stage.removeChild(thirdTenthNote);
                stage.removeChild(thirdEleventhNote);

                stage.removeChild(fourthFirstNote);
                stage.removeChild(fourthSecondNote);
                stage.removeChild(fourthThirdNote);
                stage.removeChild(fourthFourthNote);
                stage.removeChild(fourthFifthNote);
                stage.removeChild(fourthSixthNote);
                stage.removeChild(fourthSeventhNote);
                stage.removeChild(fourthEigthNote);
                stage.removeChild(fourthNinthNote);
                stage.removeChild(fourthTenthNote);
                stage.removeChild(fourthEleventhNote);
                stage.removeChild(fourthTwelthNote);
                stage.removeChild(songName);
                stage.removeChild(newSongName);
                
                i++;
                newSongName = new createjs.Text(songs[i], '30px Arial', '#000');
                
                newSongName.x =500;
                newSongName.y = 10;
                stage.addChild(newSongName);
                if(newSongName.text === songs[1]){

                    firstNote = new createjs.Bitmap("images/Quarter_d.png");
                    firstNote.x = 240;
                    firstNote.y = 79;
                    secondNote = new createjs.Bitmap("images/Quarter_s.png");
                    secondNote.x = 290;
                    secondNote.y = 90;
                    thirdNote = new createjs.Bitmap("images/Quarter_s.png");
                    thirdNote.x = 340;
                    thirdNote.y = 90;
                    fourthNote = new createjs.Bitmap("images/Quarter_s.png");
                    fourthNote.x = 450;
                    fourthNote.y = 90;
                    fifthNote = new createjs.Bitmap("images/Quarter_s.png");
                    fifthNote.x = 500;
                    fifthNote.y = 90;
                    sixthNote = new createjs.Bitmap("images/Quarter_d.png");
                    sixthNote.x = 550;
                    sixthNote.y = 79;
                    seventhNote = new createjs.Bitmap("images/Quarter_s.png");
                    seventhNote.x = 660;
                    seventhNote.y = 90;
                    eigthNote = new createjs.Bitmap("images/Quarter_a.png");
                    eigthNote.x = 710;
                    eigthNote.y = 105;
                    ninthNote = new createjs.Bitmap("images/Quarter_a.png");
                    ninthNote.x = 760;
                    ninthNote.y = 105;

                    secondFirstNote = new createjs.Bitmap("images/Quarter_d.png");
                    secondFirstNote.x = 200;
                    secondFirstNote.y = 220;
                    secondSecondNote = new createjs.Bitmap("images/Quarter_s.png");
                    secondSecondNote.x = 250;
                    secondSecondNote.y = 230;
                    secondThirdNote = new createjs.Bitmap("images/Double_s.png");
                    secondThirdNote.x = 300;
                    secondThirdNote.y = 230;
                    secondFourthNote = new createjs.Bitmap("images/Quarter_s.png");
                    secondFourthNote.x = 450;
                    secondFourthNote.y = 230;
                    secondFifthNote = new createjs.Bitmap("images/Quarter_d.png");
                    secondFifthNote.x = 500;
                    secondFifthNote.y = 220;
                    secondSixthNote = new createjs.Bitmap("images/Quarter_s.png");
                    secondSixthNote.x = 660;
                    secondSixthNote.y = 230;
                    secondSeventhNote = new createjs.Bitmap("images/Quarter_a.png");
                    secondSeventhNote.x = 700;
                    secondSeventhNote.y = 240;
                    secondEigthNote = new createjs.Bitmap("images/Quarter_a.png");
                    secondEigthNote.x = 750;
                    secondEigthNote.y = 240;
                    secondNinthNote = new createjs.Bitmap("images/Quarter_k.png");
                    secondNinthNote.x = 880;
                    secondNinthNote.y = 185;
                    secondTenthNote = new createjs.Bitmap("images/Quarter_l.png");
                    secondTenthNote.x = 950;
                    secondTenthNote.y = 240;
                    secondEleventhNote = new createjs.Bitmap("images/Quarter_semi.png");
                    secondEleventhNote.x=1000;
                    secondEleventhNote.y = 230;

                    thirdFirstNote = new createjs.Bitmap("images/Half_f.png");
                    thirdFirstNote.x = 200;
                    thirdFirstNote.y = 345;
                    thirdSecondNote = new createjs.Bitmap("images/Double_f.png");
                    thirdSecondNote.x = 250;
                    thirdSecondNote.y = 335;
                    thirdThirdNote = new createjs.Bitmap("images/Quarter_f.png");
                    thirdThirdNote.x = 400;
                    thirdThirdNote.y = 340;
                    thirdFourthNote = new createjs.Bitmap("images/Quarter_j.png");
                    thirdFourthNote.x = 450;
                    thirdFourthNote.y = 325;
                    thirdFifthNote = new createjs.Bitmap("images/Quarter_d.png");
                    thirdFifthNote.x = 500;
                    thirdFifthNote.y = 350;
                    thirdSixthNote = new createjs.Bitmap("images/QuarterNote_D.png");
                    thirdSixthNote.x = 650;
                    thirdSixthNote.y = 335;
                    thirdSeventhNote = new createjs.Bitmap("images/QuarterNote_S.png");
                    thirdSeventhNote.x = 700;
                    thirdSeventhNote.y = 350;
                    thirdEigthNote = new createjs.Bitmap("images/QuarterNote_S.png");
                    thirdEigthNote.x = 750;
                    thirdEigthNote.y = 350;
                    thirdNinthNote = new createjs.Bitmap("images/QuarterNote_S.png");
                    thirdNinthNote.x = 900;
                    thirdNinthNote.y = 350;
                    thirdTenthNote = new createjs.Bitmap("images/QuarterNote_S.png");
                    thirdTenthNote.x = 950;
                    thirdTenthNote.y = 350;
                    thirdEleventhNote = new createjs.Bitmap("images/QuarterNote_D.png");
                    thirdEleventhNote.x = 1000;
                    thirdEleventhNote.y = 335;

                    fourthFirstNote = new createjs.Bitmap("images/QuarterNote_D.png");
                    fourthFirstNote.x = 200;
                    fourthFirstNote.y = 475;
                    fourthSecondNote = new createjs.Bitmap("images/Quarter_semi.png");
                    fourthSecondNote.x = 250;
                    fourthSecondNote.y = 490;
                    fourthThirdNote = new createjs.Bitmap("images/Quarter_semi.png");
                    fourthThirdNote.x = 300;
                    fourthThirdNote.y = 490;
                    fourthFourthNote = new createjs.Bitmap("images/Third_j.png");
                    fourthFourthNote.x = 450;
                    fourthFourthNote.y = 455;
                    fourthFifthNote = new createjs.Bitmap("images/Half_semi.png");
                    fourthFifthNote.x = 500;
                    fourthFifthNote.y = 485;
                    fourthSixthNote = new createjs.Bitmap("images/Third_j.png");
                    fourthSixthNote.x = 650;
                    fourthSixthNote.y = 455;
                    fourthSeventhNote = new createjs.Bitmap("images/Quarter_semi.png");
                    fourthSeventhNote.x = 700;
                    fourthSeventhNote.y = 489;
                    fourthEigthNote = new createjs.Bitmap("images/QuarterNote_S.png");
                    fourthEigthNote.x = 750;
                    fourthEigthNote.y = 480;
                    fourthNinthNote = new createjs.Bitmap("images/QuarterNote_D.png");
                    fourthNinthNote.x = 800;
                    fourthNinthNote.y = 467;
                    fourthTenthNote = new createjs.Bitmap("images/Half_l.png");
                    fourthTenthNote.x = 950;
                    fourthTenthNote.y = 495;
                    fourthEleventhNote = new createjs.Bitmap("images/Quarter_a.png");
                    fourthEleventhNote.x = 1050;
                    fourthEleventhNote.y = 500;
                    fourthTwelthNote = new createjs.Bitmap("images/Quarter_semi.png");
                    fourthTwelthNote.x = 1100;
                    fourthTwelthNote.y = 490;

                    stage.addChild(firstNote);
                    stage.addChild(secondNote);
                    stage.addChild(thirdNote);
                    stage.addChild(fourthNote);
                    stage.addChild(fifthNote);
                    stage.addChild(sixthNote);
                    stage.addChild(seventhNote);
                    stage.addChild(eigthNote);
                    stage.addChild(ninthNote);

                    stage.addChild(secondFirstNote);
                    stage.addChild(secondSecondNote);
                    stage.addChild(secondThirdNote);
                    stage.addChild(secondFourthNote);
                    stage.addChild(secondFifthNote);
                    stage.addChild(secondSixthNote);
                    stage.addChild(secondSeventhNote);
                    stage.addChild(secondEigthNote);
                    stage.addChild(secondNinthNote);
                    stage.addChild(secondTenthNote);
                    stage.addChild(secondEleventhNote);

                    stage.addChild(thirdFirstNote);
                    stage.addChild(thirdSecondNote);
                    stage.addChild(thirdThirdNote);
                    stage.addChild(thirdFourthNote);
                    stage.addChild(thirdFifthNote);
                    stage.addChild(thirdSixthNote);
                    stage.addChild(thirdSeventhNote);
                    stage.addChild(thirdEigthNote);
                    stage.addChild(thirdNinthNote);
                    stage.addChild(thirdTenthNote);
                    stage.addChild(thirdEleventhNote);

                    stage.addChild(fourthFirstNote);
                    stage.addChild(fourthSecondNote);
                    stage.addChild(fourthThirdNote);
                    stage.addChild(fourthFourthNote);
                    stage.addChild(fourthFifthNote);
                    stage.addChild(fourthSixthNote);
                    stage.addChild(fourthSeventhNote);
                    stage.addChild(fourthEigthNote);
                    stage.addChild(fourthNinthNote);
                    stage.addChild(fourthTenthNote);
                    stage.addChild(fourthEleventhNote);
                    stage.addChild(fourthTwelthNote);
            }
                stage.update();
            }
            break;
        case KEYCODE_shift:
            shift_held = true;
            break;
        case KEYCODE_space:
            space_held = true;
            break;
        case KEYCODE_caps:
            caps_down = true;
            break;
        case KEYCODE_a:
            if(space_held){
                if(c4){
                    createjs.Sound.play("cLow");
                    c4 = false;
                }
                shapes[0].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[0].x = 105;
                shapes[0].y = 100;
            }
            else{
                if(c5){
                    createjs.Sound.play("cMid");
                    c5 = false;
                }
                shapes[7].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[7].x = 462;
                shapes[7].y = 100;
            }
                stage.update();
        
            break;
        case KEYCODE_s:
            if(shift_held || caps_down){
                if(d6){
                    createjs.Sound.play("dHigh");
                    d6 = false;
                }
                shapes[15].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[15].x = 870;
                shapes[15].y = 100;
            }
            else if(space_held){
                if(d4){
                    createjs.Sound.play("dLow");
                    d4 = false;
                }
                shapes[1].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[1].x = 156;
                shapes[1].y = 100;
            }
            else{
                if(d5){
                    createjs.Sound.play("dMid");
                    d5 = false;
                }
                shapes[8].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[8].x = 513;
                shapes[8].y = 100;
            }
                stage.update();
            
            break;
        case KEYCODE_d:
            if(shift_held || caps_down){
                if(e6){
                    createjs.Sound.play("eHigh");
                    e6 = false;
                }
                shapes[16].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[16].x = 921;
                shapes[16].y = 100;
            }
            else if(space_held){
                if(e4){
                    createjs.Sound.play("eLow");
                    e4 = false;
                }
                shapes[2].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[2].x = 207;
                shapes[2].y = 100;
            }
            else{
                if(e5){
                    createjs.Sound.play("eMid");
                    e5 = false;
                }
                shapes[9].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[9].x = 564;
                shapes[9].y = 100;
            }
            
            stage.update();
            break;
        case KEYCODE_f:
            if(shift_held || caps_down){
                if(f6){
                    createjs.Sound.play("fHigh");
                    f6 = false;
                }
                shapes[17].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[17].x = 972;
                shapes[17].y = 100;
            }
            else if(space_held){
                if(f4){
                    createjs.Sound.play("fLow");
                    f4 = false;
                }
                shapes[3].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[3].x = 258;
                shapes[3].y = 100;
            }
            else{
                if(f5){
                    createjs.Sound.play("fMid");
                    f5 = false;
                }
                shapes[10].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[10].x = 615;
                shapes[10].y = 100;

            }
            stage.update();
            break;
        case KEYCODE_j:
            if(shift_held || caps_down){
                if(g6){
                    createjs.Sound.play("gHigh");
                    g6 = false;
                }
                 shapes[18].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[18].x = 1023;
                shapes[18].y = 100;
            }
            else if(space_held){
                if(g4){
                    createjs.Sound.play("gLow");
                    g4 = false;
                }
                shapes[4].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[4].x = 309;
                shapes[4].y = 100;
            }
            else{
                if(g5){
                    createjs.Sound.play("gMid");
                    g5 = false;
                }
                shapes[11].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[11].x = 666;
                shapes[11].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_k:
            if(shift_held || caps_down){
                if(a6){
                    createjs.Sound.play("aHigh");
                    a6 = false;
                }
                shapes[19].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[19].x = 1074;
                shapes[19].y = 100;
            }
            else if(space_held){
                if(a4){
                    createjs.Sound.play("aLow");
                    a4 = false;
                }
                shapes[5].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[5].x = 360;
                shapes[5].y = 100;
            }
            else{
                if(a5){
                    createjs.Sound.play("aMid");
                    a5 = false;
                }
                shapes[12].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[12].x = 717;
                shapes[12].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_l:
            if(shift_held || caps_down){
              if(b6){
                  createjs.Sound.play("bHigh");
                  b6 = false;
              } 
                shapes[20].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[20].x = 1125;
                shapes[20].y = 100;
            }
            else if(space_held){
                if(b4){
                    createjs.Sound.play("bLow");
                    b4 = false;
                }
                shapes[6].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[6].x = 411;
                shapes[6].y = 100;
            }
            else{
                if(b5){
                    createjs.Sound.play("bMid");
                    b5 = false;
                }
                shapes[13].graphics.beginFill("Grey").drawRect(0,0,50,150);
                shapes[13].x = 768;
                shapes[13].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_t:
            if(shift_held || caps_down){
                if(fS6){
                    createjs.Sound.play("f#High");
                    fS6 = false;
                }
                blackKeys[12].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[12].x = 1000;
                blackKeys[12].y = 100;
            }
            else if(space_held){
               if(fS4){
                    createjs.Sound.play("f#Low");
                    fS4 = false;
                } 
                blackKeys[2].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[2].x = 290;
                blackKeys[2].y = 100;
            }
            else{
                if(fS5){
                    createjs.Sound.play("f#Mid");
                    fS5 = false;
                }
                blackKeys[7].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[7].x = 644;
                blackKeys[7].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_w:
            if(shift_held || caps_down){
                if(cS6){
                    createjs.Sound.play("c#High");
                    cS6 = false;
                }
                blackKeys[10].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[10].x = 847;
                blackKeys[10].y = 100;
            }
            else if(space_held){
                if(cS4){
                    createjs.Sound.play("c#Low");
                    cS4 = false;
                }
                blackKeys[0].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[0].x = 135;
                blackKeys[0].y = 100;
            }
            else{
                if(cS5){
                    createjs.Sound.play("c#Mid");
                    cS5 = false;
                }
                blackKeys[5].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[5].x = 494;
                blackKeys[5].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_e:
            if(shift_held || caps_down){
                if(dS6){
                    createjs.Sound.play("d#High");
                    dS6 = false;
                }
                blackKeys[11].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[11].x = 899;
                blackKeys[11].y = 100;
            }
            else if(space_held){
                if(dS4){
                    createjs.Sound.play("d#Low");
                    dS4 = false;
                }
                 blackKeys[1].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                 blackKeys[1].x = 190;
                 blackKeys[1].y = 100;
            }
            else{
                if(dS5){
                    createjs.Sound.play("d#Mid");
                    dS5 = false;
                }
                blackKeys[6].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[6].x = 544;
                blackKeys[6].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_y:
            if(shift_held || caps_down){
                if(gS6){
                    createjs.Sound.play("g#High");
                    gS6 = false;
                }
                
                blackKeys[13].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[13].x = 1054;
                blackKeys[13].y = 100;
            }
            else if(space_held){
                if(gS4){
                    createjs.Sound.play("g#Low");
                    gs4 = false;
                }
                blackKeys[3].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[3].x = 340;
                blackKeys[3].y = 100;
            }
            else{
                if(gS5){
                    createjs.Sound.play("g#Mid");
                    gS5 = false;
                }
                blackKeys[8].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[8].x = 696;
                blackKeys[8].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_u:
            if(shift_held || caps_down){
                if(aS6){
                    createjs.Sound.play("a#High");
                    aS6 = false;
                }
                blackKeys[14].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[14].x = 1104;
                blackKeys[14].y = 100;
            }
            else if(space_held){
                if(aS4){
                    createjs.Sound.play("a#Low");
                    aS4 = false;
                }
                blackKeys[4].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[4].x = 394;
                blackKeys[4].y = 100;
            }
            else{
                if(aS5){
                    createjs.Sound.play("a#Mid");
                    aS5 = false;
                }
                blackKeys[9].graphics.beginFill("LightGrey").drawRect(0,0,40,90);
                blackKeys[9].x = 746;
                blackKeys[9].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_semi:
            if(c6){
                createjs.Sound.play("cHigh");
                c6 = false;
            }
            shapes[14].graphics.beginFill("Grey").drawRect(0,0,50,150);
            shapes[14].x = 819;
            shapes[14].y = 100;
            
            stage.update();
            break;
            
    }
 
}

function handleKeyUp(e) {
    switch (e.keyCode) {
        case KEYCODE_shift:
            shift_held = false;
            break;
        case KEYCODE_space:
            space_held = false;
            break;
        case KEYCODE_caps:
            caps_down = false;
            break;
        case KEYCODE_a:
            if(space_held){
                c4 = true;
                shapes[0].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[0].x = 105;
                shapes[0].y = 100;
            }
            else{
                c5 = true;
                shapes[7].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[7].x = 462;
                shapes[7].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_s:
            if(shift_held || caps_down){
                d6 = true;
                shapes[15].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[15].x = 870;
                shapes[15].y = 100;
                
                
            }
            else if(space_held){
                d4 = true;
                shapes[1].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[1].x = 156;
                shapes[1].y = 100;
            }
            else{
                d5 = true;
                shapes[8].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[8].x = 513;
                shapes[8].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_d:
            if(shift_held || caps_down){
                e6 = true;
                shapes[16].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[16].x = 921;
                shapes[16].y = 100;
            }
            else if(space_held){
                e4 = true;
                shapes[2].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[2].x = 207;
                shapes[2].y = 100;
            }
            else{
                e5 = true;
                shapes[9].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[9].x = 564;
                shapes[9].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_f:
            if(shift_held || caps_down){
                f6 = true;
                shapes[17].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[17].x = 972;
                shapes[17].y = 100;
            }
            else if(space_held){
                f4 = true;
                shapes[3].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[3].x = 258;
                shapes[3].y = 100;
            }
            else{
                f5 = true;
                shapes[10].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[10].x = 615;
                shapes[10].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_j:
            if(shift_held || caps_down){
                g6 = true;
                 shapes[18].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[18].x = 1023;
                shapes[18].y = 100;
            }
            else if(space_held){
                g4 = true;
                shapes[4].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[4].x = 309;
                shapes[4].y = 100;
            }
            else{
                g5 = true;
               shapes[11].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[11].x = 666;
                shapes[11].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_k:
            if(shift_held || caps_down){
                a6 = true;
                shapes[19].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[19].x = 1074;
                shapes[19].y = 100;
            }
            else if(space_held){
                a4 = true;
                shapes[5].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[5].x = 360;
                shapes[5].y = 100;
            }
            else{
            a5 = true;
                shapes[12].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[12].x = 717;
                shapes[12].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_l:
            if(shift_held || caps_down){
                b6 = true;
                shapes[20].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[20].x = 1125;
                shapes[20].y = 100;
            }
            else if(space_held){
                b4 = true;
                shapes[6].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[6].x = 411;
                shapes[6].y = 100;
            }
            else{
                b5 = true;
               shapes[13].graphics.beginFill("White").drawRect(0,0,50,150);
                shapes[13].x = 768;
                shapes[13].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_t:
            if(shift_held || caps_down){
               fS6 = true;
                blackKeys[12].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[12].x = 1000;
                blackKeys[12].y = 100;
            }
            else if(space_held){
                fS4 = true;
                blackKeys[2].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[2].x = 290;
                blackKeys[2].y = 100;
            }
            else{
                fS5 = true;
                blackKeys[7].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[7].x = 644;
                blackKeys[7].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_w:
            if(shift_held || caps_down){
                cS6 = true;
                blackKeys[10].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[10].x = 847;
                blackKeys[10].y = 100;
            }
            else if(space_held){
               cS4 = true; 
                blackKeys[0].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[0].x = 135;
                blackKeys[0].y = 100;    
            }
            else{
                cS5 = true;
                blackKeys[5].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[5].x = 494;
                blackKeys[5].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_e:
            if(shift_held || caps_down){
                dS6 = true;
                blackKeys[11].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[11].x = 899;
                blackKeys[11].y = 100;
            }
            else if(space_held){
                dS4 = true;
                 blackKeys[1].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[1].x = 190;
                blackKeys[1].y = 100;
            }
            else{
                dS5 = true;
                blackKeys[6].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[6].x = 544;
                blackKeys[6].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_y:
            if(shift_held || caps_down){
                gS6 = true;
                blackKeys[13].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[13].x = 1054;
                blackKeys[13].y = 100;
            }
            else if(space_held){
                gS4 = true;
                blackKeys[3].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[3].x = 340;
                blackKeys[3].y = 100;
            }
            else{
                gS5 = true;
                blackKeys[8].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[8].x = 696;
                blackKeys[8].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_u:
            if(shift_held || caps_down){
                aS6 = true;
                blackKeys[14].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[14].x = 1104;
                blackKeys[14].y = 100;
            }
            else if(space_held){
               aS4 = true; 
                blackKeys[4].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[4].x = 394;
                blackKeys[4].y = 100;
            }
            else{
                aS5 = true;
                blackKeys[9].graphics.beginFill("Black").drawRect(0,0,40,90);
                blackKeys[9].x = 746;
                blackKeys[9].y = 100;
            }
            stage.update();
            break;
        case KEYCODE_semi:
            c6 = true;
            shapes[14].graphics.beginFill("White").drawRect(0,0,50,150);
            shapes[14].x = 819;
            shapes[14].y = 100;
            stage.update();
            break;
    }
 
}

