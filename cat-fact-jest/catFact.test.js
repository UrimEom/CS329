const CatFact = require("./catFact");

test("new CatFact object has empty history", () => {
  const catFact = new CatFact();

  expect(catFact.history()).toEqual([]);
});