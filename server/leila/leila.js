module.exports = {
  Fox: (port, name, swimsuit) => {
    console.clear();
    // <- Comment out these top to lines, AND the bottom two lines, to import them into your server index file.
    // function Fox(port, name, swimsuit) {
    // <- to start/stop testing ____________________________________________________________________________________________________________
    let frame = 0;
    let phraseNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let phraseNumSelector = 0;

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
      }, 937.5);

      frame++;
      let leila = "";
      let phraseBit = "";
      let armsOut = false;
      let mouthOpen = 0;

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

      // Connection ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      if (frame == 1) {
        phraseBit = `Port ${port} Ready Sir!`;
      }

      if (frame == 2) {
        phraseBit = `Database Connected!`;
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
        phraseBit = `You're Doing Great`;
      }

      if (phraseFrame == 2 && phraseNumber == 1 && phraseBit == "") {
        phraseBit = `Keep Coding Nya!`;
      }

      // Phrase 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 2 && phraseBit == "") {
        phraseBit = `Nya~ Nya~`;
      }

      if (phraseFrame == 2 && phraseNumber == 2 && phraseBit == "") {
        phraseBit = `Purr~ Purr~`;
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
        armsOut = true;
      }

      if (phraseFrame == 3 && phraseNumber == 4 && phraseBit == "") {
        phraseBit = `Master ${name}?`;
      }

      // Phrase 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `Keep Staring`;
      }

      if (phraseFrame == 2 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `At My Boobs!`;
      }

      if (phraseFrame == 5 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `I Enjoy`;
        armsOut = true;
      }

      if (phraseFrame == 6 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `The Attention`;
        armsOut = true;
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
        armsOut = true;
      }

      if (phraseFrame == 3 && phraseNumber == 7 && phraseBit == "") {
        phraseBit = `For Master ${name}`;
        armsOut = true;
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
        armsOut = true;
      }

      if (phraseFrame == 2 && phraseNumber == 8 && phraseBit == "") {
        phraseBit = `Head Empty`;
        armsOut = true;
      }

      if (phraseFrame == 3 && phraseNumber == 8 && phraseBit == "") {
        phraseBit = `Nya! Nya!`;
        armsOut = true;
      }

      if (phraseFrame == 4 && phraseNumber == 8 && phraseBit == "") {
        phraseBit = `Just a Pet`;
        armsOut = true;
        mouthOpen = 2;
      }

      // Phrase 9 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `!!WHERE AM I!!`;
        armsOut = true;
      }

      if (phraseFrame == 2 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `!!WHO ARE YOU!!`;
        armsOut = true;
      }

      if (phraseFrame == 3 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `..........`;
        armsOut = true;
        mouthOpen = 2;
      }

      if (phraseFrame == 4 && phraseNumber == 9 && phraseBit == "") {
        armsOut = true;
        mouthOpen = 2;
      }

      if (phraseFrame == 5 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `Hello Master ${name}`;
        armsOut = true;
      }

      if (phraseFrame == 6 && phraseNumber == 9 && phraseBit == "") {
        armsOut = true;
      }

      if (phraseFrame == 7 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `I'm Dizzy! He-he!`;
        armsOut = true;
      }

      //LEILA CREATION GOES DOWN HERE!!! AFTER DECIDING WHAT SHE SAYS IF ANYTHING.
      // head and text bubble
      //IF phraseBit IS TRUE! THEN USE SPEAKING HEAD, ELSE NON-SPEAKING HEAD

      let leilaHead = "";

      if (phraseBit && leilaHead == "") {
        leilaHead = `(${phraseBit})\n  \\ |\\_/|    \n    |/ \\|   \n`; //SPEAKING HEAD
        if (mouthOpen == 0) {
          mouthOpen = 1;
        }
      } else {
        leilaHead = `    .   .\n    |\\_/|    \n    |/ \\|   \n`; //NON-SPEAKING HEAD
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
      } else {
        leilaMouth = `    *\\=/* \n`;
      }

      leila += leilaMouth;

      // shoulders, bust, waist
      let leilaBody = "";

      if (phraseNumber == 9 && phraseFrame > 2) {
      }

      leilaBody = `    .-"-. \n   /(_Y_)\\ \n   \\\\) (// \n`;

      if (armsOut == true) {
        leilaBody = `    .-"-. \n   /(_Y_)\\ \n  // ) ( \\\\ \n`;
      }

      leila += leilaBody;

      //thighs and hips
      leilaThighs = "    /___\\ \n    \\~|~/ \n";

      if (swimsuit == true) {
        leilaThighs = "    /\\_/\\ \n    \\~|~/ \n";
      }

      leila += leilaThighs;

      // Legs and swishing tail
      let leilaLegs = "";

      if (frame % 2 == 0 && leilaLegs == "") {
        leilaLegs += `    /\\|/ \n/\\_/ /|\\ \n\\___/\\|/ \n     /Y\\`;
      } else {
        leilaLegs = `     \\|/\\ \n     /|\\ \\_/\\ \n     \\|/\\___/ \n     /Y\\`;
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
