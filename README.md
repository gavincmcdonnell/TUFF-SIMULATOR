# tuffsimulator.github.io
 
## HTML Documentation

HTML is being used as the shell for this project.  I used the HTML code from https://medium.com/@iminked/build-a-drum-machine-with-javascript-html-and-css-33a53eeb1f73, which is a basic HTML structure containing a couple of different divs.  One being the header, so that the website says TUFF SIMULATOR at the top.  The next is the container div that holds everything inside it, and the drum machine div where the drum machine stuff actually is.  At the end there is a script command allowing the JavaScript to run through the website.

## CSS Documentation

The first `@import` commands are to import fonts from Google Fonts, which I also grabbed from the medium article because I thought they looked nice.  I then began adding a global style at the top in order to be able to input multiple variables in the smaller portions of the CSS code.  I set variables for primary font, secondary font, primary color, secondary color, light background and dark background.  I then styled each individual structure in the website, being the container, the header, and the drum machine using width, height, display, margins, and item alignment.  This helps the pads to be in the middle of the "machine" and also allows the pads to close in every time you touch them.  In addition to the three main structures in the website, I also styled the group of pads, or buttons using `.btn-group > * {` with individual styles embedded to make sure the buttons were the same color as my own FL Studio.

# JavaScript Documentation

The majority of this project is run using JavaScript.  Beginning at the top of the index.js file, there are a few lines setting up variables to reference elements from the HTML (`const libOne`, `document.getElementById`). Next, at the top of the press keys functions, there is a let function.  `let currentLibrary` is to declare `currentLibrary` as the variable

