beforeAll(() => console.log("밖 beforeAll")); // 1
beforeEach(() => console.log("밖 beforeEach")); // 2, 7
afterEach(() => console.log("밖 afterEach")); // 4, 10
afterAll(() => console.log("밖 afterAll")); // 마지막

test("0 + 1 = 1", () => {
  console.log("밖 테스트");
  expect(0 + 1).toBe(1); // 3
});

describe("묶음 테스트", () => {
  beforeAll(() => console.log("안 beforeAll")); // 5
  beforeEach(() => console.log("안 beforeEach")); // 6
  afterEach(() => console.log("안 afterEach")); // 9
  afterAll(() => console.log("안 afterAll")); // 마지막 -1

  test("0 + 1 = 1", () => {
    console.log("안 테스트");
    expect(0 + 1).toBe(1); // 8
  });
});
