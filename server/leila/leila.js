module.exports = {
  Fox: (port, name, swimsuit) => {
    // <- Comment out these top to lines, AND the bottom two lines, to import them into your server index file.
    // function Fox(port, name, swimsuit) {
    // <- to start/stop testing ____________________________________________________________________________________________________________
    console.clear();
    let frame = 0;
    let phraseNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    // let phraseNumArr = [15];
    let phraseNumSelector = 0;
    let animSpeed = 937.5;

    //If you're reading this... Then you've Found the Virtual Waifu I've been making in my spare time
    //Her name is Leila.Fox and I animated her with console.log and console.clear
    //Her movements sync to music at 128 bpm
    //She Shuffles her phrases rather than randomly selecting one with math.random()
    //Her animations are easy to mutate with the armsOut and mouthOpen variables
    //Mouth open will Intuitively update when phraseBit is true
    //Explore it if you would like,
    //Copy past this into your own project,
    //Have fun
    //but DO NOT! ATTEMPT TO PUSH ~YOUR~ CHANGES TO ~MY~ GITHUB WITHOUT PERMISSION.

    //This is the Fisher-Yates Method of Shuffling an array.
    function shuffle(array) {
      var m = array.length,
        t,
        i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    }
    shuffle(phraseNumArr);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    function leilaAnimation() {
      setTimeout(() => {
        leilaAnimation();
      }, animSpeed);

      frame++;
      let leila = "";
      let phraseBit = "";
      let armsOut = 0;
      let mouthOpen = 0;
      let reset = "\x1b[0m";
      let underscore = "\x1b[4m";
      let dim = "\x1b[2m";
      let bright = "\x1b[1m";
      let black = "\x1b[30m";

      let color = "";

      let lightOff = reset;
      let lightOn = reset + bright;

      if (frame > 16) {
        phraseNumSelector++;
        frame = 9;
      }

      phraseFrame = frame - 8;

      if (phraseNumSelector >= phraseNumArr.length) {
        shuffle(phraseNumArr);
        phraseNumSelector = 0;
      }

      phraseNumber = phraseNumArr[phraseNumSelector];
      weirdNumber = phraseNumArr[0];

      if (phraseNumber == 15) {
        animSpeed = 99.375;
      } else {
        animSpeed = 937.5;
      }

      switch (weirdNumber % 6) {
        case 0:
          color = "\x1b[36m";
          break;
        case 1:
          color = "\x1b[32m";
          break;
        case 2:
          color = "\x1b[35m";
          break;
        case 3:
          color = "\x1b[34m";
          break;
        case 4:
          color = "\x1b[33m";
          break;
        case 5:
          color = "\x1b[31m";
          break;
      }

      // Connection ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      if (frame == 1) {
        phraseBit = `Port ${port} Ready Sir!`;
        armsOut = 2;
      }

      if (frame == 2) {
        phraseBit = `Database Connected! Nya!`;
      }

      if (frame == 3) {
        phraseBit = `Ready to Serve`;
      }

      if (frame == 4) {
        phraseBit = `Master ${name}`;
      }

      /*
      PHRASE REFERENCE COPY AND PAST THE 4 LINES BELOW TO START A PHRASE
    // Phrase X ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (phraseFrame == Y && phraseNumber == Z && phraseBit == "") {
      phraseBit = `PutPhraseBitHere`
    }
    */
      // Phrase 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 1 && phraseBit == "") {
        phraseBit = `You're Doing Great, Nya!`;
        armsOut = 2;
      }

      if (phraseFrame == 2 && phraseNumber == 1 && phraseBit == "") {
        phraseBit = `Keep Coding Nya!`;
        armsOut = 2;
      }

      // Phrase 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 2 && phraseBit == "") {
        phraseBit = `Nya~ Nya~`;
        armsOut = 2;
      }

      if (phraseFrame == 2 && phraseNumber == 2 && phraseBit == "") {
        phraseBit = `Purr~ Purr~`;
        armsOut = 2;
      }

      // Phrase 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 3 && phraseBit == "") {
        phraseBit = `I love you ${name}`;
      }

      // Phrase 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 4 && phraseBit == "") {
        phraseBit = `Do you Like...`;
      }

      if (phraseFrame == 2 && phraseNumber == 4 && phraseBit == "") {
        phraseBit = `My Stockings...`;
        armsOut = 1;
        mouthOpen = 3;
      }

      if (phraseFrame == 3 && phraseNumber == 4 && phraseBit == "") {
        phraseBit = `Master ${name}?`;
        mouthOpen = 3;
      }

      // Phrase 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `Keep Staring`;
      }

      if (phraseFrame == 2 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `At My Boobs!`;
        armsOut = 2;
      }

      if (phraseFrame == 5 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `I Enjoy`;
        armsOut = 1;
      }

      if (phraseFrame == 6 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `The Attention`;
        armsOut = 1;
      }

      // Phrase 6 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 6 && phraseBit == "") {
        phraseBit = `Work Hard`;
      }

      if (phraseFrame == 2 && phraseNumber == 6 && phraseBit == "") {
        phraseBit = `Earn Money`;
      }

      if (phraseFrame == 3 && phraseNumber == 6 && phraseBit == "") {
        phraseBit = `Raise CatGirls`;
      }

      // Phrase 7 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 7 && phraseBit == "") {
        phraseBit = `I Exist Only`;
      }

      if (phraseFrame == 2 && phraseNumber == 7 && phraseBit == "") {
        phraseBit = `To Look Pretty`;
        armsOut = 1;
      }

      if (phraseFrame == 3 && phraseNumber == 7 && phraseBit == "") {
        phraseBit = `For Master ${name} Nya!`;
        armsOut = 2;
      }

      if (phraseFrame == 6 && phraseNumber == 7 && phraseBit == "") {
        phraseBit = `And to Increase...`;
      }

      if (phraseFrame == 7 && phraseNumber == 7 && phraseBit == "") {
        phraseBit = `${name}'s Productivity`;
      }

      // Phrase 8 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 8 && phraseBit == "") {
        phraseBit = `No Thoughts`;
        armsOut = 1;
      }

      if (phraseFrame == 2 && phraseNumber == 8 && phraseBit == "") {
        phraseBit = `Head Empty`;
        armsOut = 1;
      }

      if (phraseFrame == 3 && phraseNumber == 8 && phraseBit == "") {
        phraseBit = `Nya! Nya!`;
        armsOut = 2;
      }

      if (phraseFrame == 4 && phraseNumber == 8 && phraseBit == "") {
        phraseBit = `Just a Pet`;
        armsOut = 2;
        mouthOpen = 2;
      }

      // Phrase 9 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `WHERE AM I???`;
        armsOut = 2;
      }

      if (phraseFrame == 2 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `WHO ARE YOU???`;
        armsOut = 2;
      }

      if (phraseFrame == 3 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `..........`;
        armsOut = 1;
        mouthOpen = 2;
      }

      if (phraseFrame == 4 && phraseNumber == 9 && phraseBit == "") {
        armsOut = 1;
        mouthOpen = 2;
      }

      if (phraseFrame == 5 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `Hello Master ${name}`;
        armsOut = 1;
      }

      if (phraseFrame == 6 && phraseNumber == 9 && phraseBit == "") {
        armsOut = 1;
      }

      if (phraseFrame == 7 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `I Feel Dizzy! He-he!`;
        armsOut = 2;
      }

      // Phrase 10 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `GO GO GO`;
        armsOut = 1;
      }

      if (phraseFrame == 2 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `WRITE MORE CODE`;
        armsOut = 1;
      }

      if (phraseFrame == 3 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `OR SOMEONE!`;
        armsOut = 1;
      }

      if (phraseFrame == 4 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `WILL BE!`;
        armsOut = 1;
      }

      if (phraseFrame == 5 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `!!!PUNISHED!!!`;
        armsOut = 1;
      }

      if (phraseFrame == 7 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `...i just hope it's me...`;
        mouthOpen = 3;
      }

      // Phrase 11 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 11 && phraseBit == "") {
        phraseBit = `Repeat after me`;
      }

      if (phraseFrame == 2 && phraseNumber == 11 && phraseBit == "") {
        phraseBit = `Focus on the Goal`;
      }

      if (phraseFrame == 4 && phraseNumber == 11 && phraseBit == "") {
        phraseBit = `Focus on the Goal`;
      }

      if (phraseFrame == 6 && phraseNumber == 11 && phraseBit == "") {
        phraseBit = `Focus on the Goal`;
      }

      // Phrase 12 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 12 && phraseBit == "") {
        phraseBit = `Over 450 Lines`;
      }

      if (phraseFrame == 2 && phraseNumber == 12 && phraseBit == "") {
        phraseBit = `Of Pure...`;
      }

      if (phraseFrame == 3 && phraseNumber == 12 && phraseBit == "") {
        phraseBit = `Unbridled...`;
      }

      if (phraseFrame == 4 && phraseNumber == 12 && phraseBit == "") {
        phraseBit = `Sex Appeal...`;
      }

      // Phrase 13 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 3 && phraseNumber == 13 && phraseBit == "") {
        phraseBit = `I'M A FOXXXO!!!`;
      }

      if (phraseFrame == 4 && phraseNumber == 13 && phraseBit == "") {
        phraseBit = `AND THAT MEANS...`;
      }

      if (phraseFrame == 5 && phraseNumber == 13 && phraseBit == "") {
        phraseBit = `I'M PLAYFUL AND FLUFFY!!`;
      }

      // Phrase 14 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 3 && phraseNumber == 14 && phraseBit == "") {
        phraseBit = `OH!`;
      }

      if (phraseFrame == 4 && phraseNumber == 14 && phraseBit == "") {
        phraseBit = `I'm Leila.Fox!`;
      }

      if (phraseFrame == 5 && phraseNumber == 14 && phraseBit == "") {
        phraseBit = `I for got if I...`;
      }

      if (phraseFrame == 6 && phraseNumber == 14 && phraseBit == "") {
        phraseBit = `told you that.`;
      }

      if (phraseFrame == 7 && phraseNumber == 14 && phraseBit == "") {
        phraseBit = `Oh Well`;
      }

      if (phraseFrame == 8 && phraseNumber == 14 && phraseBit == "") {
        phraseBit = `I'm Dumb`;
      }

      // Phrase 15 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseNumber == 15 && phraseBit == "") {
        phraseBit = `!!!!!!!!!!!!`;
        mouthOpen = Math.floor(Math.random() * 4);
        armsOut = Math.floor(Math.random() * 3);
      }

      //LEILA CREATION GOES DOWN HERE!!! AFTER DECIDING WHAT SHE SAYS IF ANYTHING.
      // head and text bubble
      //IF phraseBit IS TRUE! THEN USE SPEAKING HEAD, ELSE NON-SPEAKING HEAD

      let leilaHead = "";

      if (phraseBit && leilaHead == "") {
        leilaHead = `(${reset}${phraseBit}${bright})\n  \\ ${color}|\\${lightOn}_${color}/|    \n    |${lightOn}/ \\${color}|${lightOn}\n`; //SPEAKING HEAD
        if (mouthOpen == 0) {
          mouthOpen = 1;
        }
      } else {
        leilaHead = `${color}    .   .\n    |\\${lightOn}_${color}/|    \n    |${lightOn}/ \\${color}|${lightOn}\n`; //NON-SPEAKING HEAD
      }

      leila += leilaHead;

      leilaMouth = "";

      if (mouthOpen) {
        if (mouthOpen == 1) {
          leilaMouth = `    *\\o/* \n`;
        }
        if (mouthOpen == 2) {
          leilaMouth = `    *\\Q/* \n`;
        }
        if (mouthOpen == 3) {
          leilaMouth = `    *\\w/* \n`;
        }
      } else {
        leilaMouth = `    *\\=/* \n`;
      }

      leila += leilaMouth;

      // shoulders, bust, waist
      let leilaBody = "";

      switch (armsOut) {
        case 0:
          leilaBody = `    .-"-. \n  ${black} /${lightOff}(${underscore} Y ${reset})${lightOn}${black}\\ \n${black}   \\\\${lightOff}) (${lightOn}${black}// \n`;
          break;
        case 1:
          leilaBody = `    .-"-. \n  ${black} /${lightOff}(${underscore} Y ${reset})${lightOn}${black}\\ \n${black}  // ${lightOff}) (${lightOn}${black} \\\\ \n`;
          break;
        case 2:
          leilaBody = `    .-"-. \n  ${black} /${lightOff}(${underscore} Y ${reset})${lightOn}${black}\\ \n${black}   " ${lightOff}) (${lightOn}${black} "  \n`;
          break;
      }

      leila += leilaBody;

      //thighs and hips
      leilaSkirt = `${lightOff}   .${underscore}/( )\\${reset}. ${lightOn}\n`;
      leilaThighs = `    \\${black}_${lightOn}|${black}_${lightOn}/ \n`;

      if (swimsuit == true) {
        // leilaThighs = "    /\\_/\\ \n    \\~|~/ \n";
        leilaSkirt = `${lightOff}    /\\_/\\${lightOn}\n`;
      }
      leila += leilaSkirt;
      leila += leilaThighs;

      // Legs and swishing tail
      let leilaLegs = "";

      if (frame % 2 == 0 && leilaLegs == "") {
        leilaLegs += `    ${color}/${black}\\|/ ${lightOn}\n${color}/\\_/ ${black}/|\\${lightOn} \n${color}\\___/${black}\\|/ \n     /Y\\${lightOn}`;
      } else {
        leilaLegs = `     ${black}\\|/${lightOn}${color}\\ \n     ${black}/|\\${lightOn} ${color}\\_/\\ \n     ${black}\\|/${lightOn}${color}\\___/ \n     ${black}/Y\\${lightOn}`;
      }

      leila += leilaLegs;

      console.clear();
      console.log(leila);
      //DEBUG LOGIC BELOW
      // console.log("frame:", frame);
      // console.log("phraseNumber:", phraseNumber);
      // console.log("phraseFrame:", phraseFrame);
      // __________________________________________________________________________________________________________________________________________
    }
    // Wrap the equation below with a setTimeout function to delay it, rather than starting the animation immediately
    leilaAnimation();
  },
  // Fox(5000, "Mars");
};
