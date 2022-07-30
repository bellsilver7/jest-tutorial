const helper = require("../helper");

let user;

beforeAll(async () => {
  // 전체 테스트 실행 전
  user = await helper.connectUserDb();
});

afterAll(() => {
  // 전체 테스트 실행 후
  return helper.disconnectUserDb();
});

test("이름은 홍길동", () => {
  expect(user.name).toBe("홍길동");
});
test("나이는 30", () => {
  expect(user.age).toBe(30);
});
test("성별은 남자", () => {
  expect(user.gender).toBe("남자");
});

describe("자동차 관련 테스트", () => {
  let car;

  beforeAll(async () => {
    // 전체 테스트 실행 전
    car = await helper.connectCarDb();
  });

  afterAll(() => {
    // 전체 테스트 실행 후
    return helper.disconnectCarDb();
  });

  test("브랜드는 현대", () => {
    expect(car.brand).toBe("현대");
  });
  test("이름은 아이오닉", () => {
    expect(car.name).toBe("아이오닉");
  });
  test("색상은 실버", () => {
    expect(car.color).toBe("실버");
  });
});

// let num = 0;

// beforeEach(() => { // 각 테스트 전에 적용. afterEach는 각 테스트 후에 적용
//   num = 0;
// });

// test("0 더하기 1은 1", () => {
//   num = helper.sum(num, 1);
//   expect(num).toBe(1);
// });
// test("0 더하기 2은 2", () => {
//   num = helper.sum(num, 2);
//   expect(num).toBe(2);
// });
// test("0 더하기 3은 3", () => {
//   num = helper.sum(num, 3);
//   expect(num).toBe(3);
// });
// test("0 더하기 4은 4", () => {
//   num = helper.sum(num, 4);
//   expect(num).toBe(4);
// });
