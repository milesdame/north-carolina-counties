import { removeCorrect } from "../js/main.js";

test("removeCorrect should return correct array", () => {
    expect(removeCorrect(["ashe", "greene", "haywood", "henderson"], "greene")).toEqual(["ashe", "haywood", "henderson"]);
});

test("removeCorrect should return correct the same array if the guessed value is not contained", () => {
    expect(removeCorrect(["ashe"], "greene")).toEqual(["ashe"]);
});


test("removeCorrect should return empty array if the guess is for the last item", () => {
    expect(removeCorrect(["ashe"], "ashe")).toEqual([]);
});

test("removeCorrect should return empty array if there is a guess but the array is empty", () => {
    expect(removeCorrect([], "ashe")).toEqual([]);
});
  