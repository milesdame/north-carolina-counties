import { removeCorrect } from "../js/main.js";

test("removeCorrect should return correct array", () => {
    expect(removeCorrect(["ashe", "greene", "haywood", "henderson"], "greene")).toEqual(["ashe", "haywood", "henderson"]);
});


  