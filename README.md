# cahCompanion
This is a simple website which helps you play Cards Against Humanity by letting you keep track of scores and draw black cards without needing to buy expansion packs.

It mainly uses Javascript and jQuery with some HTML and CSS as well.

The black cards are stored under the /blackCards/ folder in plain text with one card per line (can use HTML to format it!). There's a script called loadPack() to load card packs which have been defined in the packList array in cards.js, but I might try and add a way to scan for packs automatically in the future.

When performing card pack selection, the list is populated with packs which have been defined in the packList array mentioned before to make things easier when adding new packs.

Cards are loaded into cardPool which can then be drawn from using drawCard().

All of the jQuery is currently in the HTML file and most of the other javascript is in cards.js. Scripts for the scoreboard are all kept in scores.js to keep them seperate from card related stuff. All CSS is in the cahStyle.css file as well.

Have fun!
