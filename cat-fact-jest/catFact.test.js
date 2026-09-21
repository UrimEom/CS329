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

test("stores multiple cat facts", async () => {
  global.fetch = jest
    .fn()
    .mockResolvedValueOnce({
      json: () => Promise.resolve({ data: ["Fact one"] }),
    })
    .mockResolvedValueOnce({
      json: () => Promise.resolve({ data: ["Fact two"] }),
    });

  const catFact = new CatFact();

  await catFact.add();
  await catFact.add();

  expect(catFact.history()).toEqual(["Fact one", "Fact two"]);
});

test("add returns null when fetch fails", async () => {
  global.fetch = jest.fn(() =>
    Promise.reject(new Error("Network error"))
  );

  const catFact = new CatFact();
  const result = await catFact.add();

  expect(result).toBeNull();
  expect(catFact.history()).toEqual([]);
});