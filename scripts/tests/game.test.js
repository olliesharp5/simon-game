/**
 * @jest-environment jsdom
 */

const { game, newGame } = require("../game");


beforeAll(() => {
    let fs = require("fs"); 
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

//Tests for the existance of these game keys, add tests to fail and then test again after the are added to the game.js file to pass test
describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains the correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        newGame();
    });
    test("should set game score to 0", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear the playerMoves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should clear the currentGame array", () => {
        expect(game.currentGame.length).toBe(0);
    });
});