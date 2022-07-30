const helper = require("../helper");

test("1 더하기 1은 2", () => {
  expect(helper.sum(1, 1)).toBe(2);
});

test("1 더하기 1은 3이 아니다.", () => {
  expect(helper.sum(1, 1)).not.toBe(3);
});

test("이름과 나이를 전달받아서 객체를 반환한다.", () => {
  expect(helper.makeUser("Tom", 30)).toEqual({
    name: "Tom",
    age: 30,
  });
});

test("이름과 나이를 전달받아서 정확하게 일치하는 객체를 반환한다.", () => {
  const user = helper.makeUser("Tom", 30);
  user["gender"] = undefined;
  expect(user).not.toStrictEqual({
    name: "Tom",
    age: 30,
  });
});

// toBeNull
// toBeUndefined
// toBeDefined
test("null은 null", () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy
test("비어있지 않은 문자열은 true입니다.", () => {
  expect(helper.sum("Hello", "World")).toBeTruthy();
});
test("0은 false입니다.", () => {
  expect(helper.sum(1, -1)).toBeFalsy();
});

// toBeGreaterThan
// toBeGreaterThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual
const password = "abc123";
test("비밀번호는 3자리보다 커야 합니다..", () => {
  expect(password.length).toBeGreaterThan(3);
});
test("비밀번호는 4자리보다 크거나 같아야 합니다.", () => {
  expect(password.length).toBeGreaterThanOrEqual(4);
});
test("비밀번호는 9자리보다 작아야 합니다.", () => {
  expect(password.length).toBeLessThan(9);
});
test("비밀번호는 8자리보다 작거나 같아야 합니다.", () => {
  expect(password.length).toBeLessThanOrEqual(8);
});

// 실수 더하기
test("0.1 더하기 0.2는 0.3이다.", () => {
  expect(helper.sum(0.1, 0.2)).toBeCloseTo(0.3);
});

// 정규식
test('"Hello World"에 o라는 문자가 있다.', () => {
  expect("Hello World").toMatch(/o/);
});

// 배열
test("과일목록에 바나나가 있다.", () => {
  const fruits = ["사과", "포도", "바나나"];
  expect(fruits).toContain("바나나");
});

// 예외처리
test("에러 발생", () => {
  expect(() => helper.err()).toThrow();
  expect(() => helper.err()).toThrow("에러 발생");
  expect(() => helper.err()).toThrow(/에러/);
});
