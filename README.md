# cahCompanion
This webpage helps you play Cards Against Humanity by letting you keep track of scores and draw black cards without needing to buy expansion packs.

The black cards are stored under the /blackCards/ folder in plain text with one card per line. There's a script called loadPack() to load card packs which have been defined in the packList array in cards.js, but I might try and add a way to scan for packs automatically in the future.

When performing card pack selection, the list is populated with packs which have been defined in the packList array mentioned before to make things easier when adding new packs.

Cards are loaded into cardPool which can then be drawn from using drawCard().

Scripts for the scoreboard are all kept in scores.js to keep them seperate from card related stuff.

Have fun!
