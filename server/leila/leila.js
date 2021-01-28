module.exports = {
  Fox: (port, name) => {
    // <- Comment out these top to lines, AND the bottom two lines, to import them into your server index file.
    // function Fox(port, name) {
    // <- to start/stop testing ____________________________________________________________________________________________________________
    let frame = 0;
    let phraseNumArr = [1, 2, 3, 4, 5, 6, 7, 8];
    let phraseNumSelector = 0;

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
        phraseBit = `Database Connected Nya!`;
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
    if (phraseFrame == frameNum && phraseNumber == phraseNum && phraseBit == "") {
      phraseBit = `myPhrase`
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

      if (phraseFrame == 4 && phraseNumber == 3 && phraseBit == "") {
        phraseBit = `I hope that's okay...`;
      }

      // Phrase 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 4 && phraseBit == "") {
        phraseBit = `Do you Like...`;
      }

      if (phraseFrame == 2 && phraseNumber == 4 && phraseBit == "") {
        phraseBit = `My Stockings...`;
      }

      if (phraseFrame == 3 && phraseNumber == 4 && phraseBit == "") {
        phraseBit = `Master ${name}?`;
      }

      // Phrase 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `Stop Staring...`;
      }

      if (phraseFrame == 2 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `At My Boobs...`;
      }

      if (phraseFrame == 5 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `Just Kidding!`;
      }

      if (phraseFrame == 6 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `I Don't Mind!`;
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

      //LEILA CREATION GOES DOWN HERE!!! AFTER DECIDING WHAT SHE SAYS IF ANYTHING.
      // head and text bubble
      //IF phraseBit IS TRUE! THEN USE SPEAKING HEAD, ELSE NON-SPEAKING HEAD

      let leilaHead = "";

      if (phraseBit && leilaHead == "") {
        leilaHead = `(${phraseBit})\n  \\ |\\_/|    \n    |/ \\|   \n    *\\o/* \n`; //SPEAKING HEAD
      } else {
        leilaHead = `    .   .\n    |\\_/|    \n    |/ \\|   \n    *\\=/* \n`; //NON-SPEAKING HEAD
      }

      leila += leilaHead;

      // shoulders, body, skirt, top of thighs
      let leilaBody = `    .-"-. \n   /(_Y_)\\ \n   \\\\):(// \n    /___\\ \n    \\~|~/ \n`;
      leila += leilaBody;

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
