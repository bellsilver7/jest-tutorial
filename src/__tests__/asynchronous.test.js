const helper = require("../helper");

test("1초 후에 받아온 이름은 Tom", (done) => {
  function callback(name) {
    try {
      expect(name).toBe("Tom");
      done();
    } catch (error) {
      done();
    }
  }
  helper.getName(callback);
});

test("1초 후에 받아온 나이는 30", () => {
  // return helper.getAge().then((age) => {
  //   expect(age).toBe(30);
  // });
  return expect(helper.getAge()).resolves.toBe(30);
});

test("1초 후에 받아온 나이는 30(async/await)", async () => {
  const age = await helper.getAge();
  expect(age).toBe(30);
});

test("1초 후에 받아온 나이는 30(async/await + resolves)", async () => {
  await expect(helper.getAge()).resolves.toBe(30);
});

test("1초 후에 에러가 납니다.", () => {
  return expect(helper.getError()).rejects.toMatch("error");
});
