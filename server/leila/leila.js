module.exports = {
  fox: (port, name) => {
    let frame = 0;
    function leilaAnimation() {
      frame++;
      let leila = "";
      if (frame > 500) {
        frame = 501;
      }

      // head and text bubble
      let leilaHead = "";

      if (frame == 501) {
        leilaHead += `(ZZZZZZZZZZZZZZ)\n    |\\_/|  / \n    |/ \\|   \n    *\\o/* \n    .-"-. \n`;
      }

      if (frame == 1 && leilaHead == "") {
        leilaHead += `(Port ${port} Ready Sir )\n    |\\_/|  / \n    |/ \\|   \n    *\\o/* \n    .-"-. \n`;
      }

      if (frame == 2 && leilaHead == "") {
        leilaHead += `(Database Connected Nya!)\n    |\\_/|  / \n    |/ \\|   \n    *\\o/* \n    .-"-. \n`;
      }

      if (frame == 3 && leilaHead == "") {
        leilaHead += `(Ready to Serve You...)\n    |\\_/|  / \n    |/ \\|   \n    *\\o/* \n    .-"-. \n`;
      }

      if (frame == 4 && leilaHead == "") {
        leilaHead += `   (Master ${name})\n    |\\_/|  / \n    |/ \\|   \n    *\\o/* \n    .-"-. \n`;
      }

      if (frame % 32 == 0 && leilaHead == "") {
        leilaHead += `(You're Doing Great!)\n    |\\_/|  / \n    |/ \\|   \n    *\\o/* \n    .-"-. \n`;
      }

      if ((frame - 1) % 32 == 0 && leilaHead == "" && frame > 2) {
        leilaHead += `(Keep On Coding! Nya!)\n    |\\_/|  / \n    |/ \\|   \n    *\\o/* \n    .-"-. \n`;
      }

      if (frame % 16 == 0 && leilaHead == "") {
        leilaHead += `(I <3 U Master)\n    |\\_/|  / \n    |/ \\|   \n    *\\o/* \n    .-"-. \n`;
      }

      if (frame % 24 == 0 && leilaHead == "") {
        leilaHead += `(Nyan~ Nyan~)\n    |\\_/|  / \n    |/ \\|   \n    *\\o/* \n    .-"-. \n`;
      }

      if ((frame - 1) % 24 == 0 && leilaHead == "" && frame > 2) {
        leilaHead += `(Purr~ Purr~)\n    |\\_/|  / \n    |/ \\|   \n    *\\o/* \n    .-"-. \n`;
      }

      if (leilaHead == "") {
        leilaHead += `    .   .\n    |\\_/|    \n    |/ \\|   \n    *\\=/* \n    .-"-. \n`;
      }
      leila += leilaHead;

      // body, skirt, top of thighs
      let leilaBody = "";

      if (
        leilaHead !=
          `    .   .\n    |\\_/|    \n    |/ \\|   \n    *\\=/* \n    .-"-. \n` &&
        leilaBody == ""
      ) {
        leilaBody += `   /(_Y_)\\ \n  // ) ( \\\\ \n    /___\\ \n    \\~|~/ \n`;
      }

      if (leilaBody == "") {
        leilaBody += `   /(_Y_)\\ \n   \\\\) (// \n    /___\\ \n    \\~|~/ \n`;
      }
      leila += leilaBody;

      // Legs and swishing tail
      let leilaLegs = "";

      if (frame % 30 == 0 && leilaLegs == "") {
        leilaLegs += `    /\\|/\\ \n/\\_/ /|\\ \\_/\\ \n\\___/\\|/\\___/ \n     /Y\\`;
      }

      if (frame % 2 == 0 && leilaLegs == "") {
        leilaLegs += `    /\\|/ \n/\\_/ /|\\ \n\\___/\\|/ \n     /Y\\`;
      }
      if (leilaLegs == "") {
        leilaLegs = `     \\|/\\ \n     /|\\ \\_/\\ \n     \\|/\\___/ \n     /Y\\`;
      }
      leila += leilaLegs;

      console.log(leila);

      setTimeout(() => {
        leilaAnimation();
      }, 937.5);
    }
    // Wrap the equation below with a setTimeout function to delay it, rather than starting the animation immediately
    leilaAnimation();
  },
};
