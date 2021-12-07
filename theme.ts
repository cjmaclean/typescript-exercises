// theme class, and also some code to test and call it.
// using classes, which JavaScript doesn't have but TypeScript does.
// I made theme class in Java and C# for storing button and window background
// colour, so I'll do similar for this exercise, but I won't implement
// the GUI part.

// Compiling and running with:
// tsc theme.ts
// node theme.js

class Theme {

    constructor(
        private readonly backgroundColor: string,
        readonly buttonColor: string)
    {
    }

    applyThemeToBackground(target: string) {
        console.log("Change colour of " + target + " to " + this.backgroundColor);
    }
    applyThemeToButton(target: string) {
        console.log("Change colour of " + target + " to " + this.buttonColor);
    }
}

var blueTheme = new Theme("cyan", "lightBlue");
// blueTheme.buttonColor = "darkBlue";

blueTheme.applyThemeToBackground("window background");
blueTheme.applyThemeToButton("load button");
blueTheme.applyThemeToButton("save button");
