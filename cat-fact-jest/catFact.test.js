const CatFact = require("./catFact");

test("new CatFact object has empty history", () => {
  const catFact = new CatFact();

  expect(catFact.history()).toEqual([]);
});

test("add returns a cat fact", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: ["Cats are cute."],
        }),
    })
  );

  const catFact = new CatFact();
  const result = await catFact.add();

  expect(result).toBe("Cats are cute.");
  expect(catFact.history()).toEqual(["Cats are cute."]);
});