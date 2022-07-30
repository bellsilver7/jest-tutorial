describe("mockFn calls", () => {
  const mockFn = jest.fn();

  mockFn();
  mockFn(1);

  /*
mockFn.mock => {
  calls: [ [], [ 1 ] ],
  contexts: [ undefined, undefined ],
  instances: [ undefined, undefined ],
  invocationCallOrder: [ 1, 2 ],
  results: [
    { type: 'return', value: undefined },
    { type: 'return', value: undefined }
  ],
  lastCall: [ 1 ]
}
*/

  test("mock 테스트", () => {
    console.log(mockFn.mock.calls);
    console.log(mockFn.mock.calls.length); // 호출된 횟수
    console.log(mockFn.mock.calls[1][0]); // 전달된 인수값
    expect(1).toBe(1);
  });
});
describe("mockFn calls", () => {
  const mockFn = jest.fn();

  function forEachAdd(arr) {
    arr.forEach((num) => {
      // fn(num + 1); // 이 함수를 만들어야 할 경우
      mockFn(num + 1);
    });
  }

  forEachAdd([10, 20, 30]);

  test("함수 호출은 3번입니다.", () => {
    expect(mockFn.mock.calls.length).toBe(3);
  });

  test("전달된 값은 11, 21, 31", () => {
    expect(mockFn.mock.calls[0][0]).toBe(11);
    expect(mockFn.mock.calls[1][0]).toBe(21);
    expect(mockFn.mock.calls[2][0]).toBe(31);
  });
});

describe("mockFn results", () => {
  const mockFn = jest.fn((num) => num + 1);

  mockFn(10);
  mockFn(20);
  mockFn(30);

  test("10에서 1증가한 값이 반환됩니다.", () => {
    expect(mockFn.mock.results[0].value).toBe(11);
  });
  test("20에서 1증가한 값이 반환됩니다.", () => {
    expect(mockFn.mock.results[1].value).toBe(21);
  });
  test("30에서 1증가한 값이 반환됩니다.", () => {
    expect(mockFn.mock.results[2].value).toBe(31);
  });
});

describe("mockReturnValueOnce 1", () => {
  const mockFn = jest.fn((num) => num + 1);

  mockFn
    .mockReturnValueOnce(10)
    .mockReturnValueOnce(20)
    .mockReturnValueOnce(30)
    .mockReturnValue(40);

  mockFn();
  mockFn();
  mockFn();
  mockFn();

  test("10에서 1증가한 값이 반환됩니다.", () => {
    console.log(mockFn.mock.results);
    expect(1).toBe(1);
  });
});

describe("mockReturnValueOnce 2", () => {
  const mockFn = jest.fn((num) => num + 1);

  mockFn
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValue(true);

  // [1, 2, 3, 4, 5].filter((num) => callback(num));
  const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

  test("홀수는 1, 2, 3", () => {
    expect(result).toStrictEqual([1, 3, 5]);
  });
});

describe("mockResolvedValue", () => {
  const helper = require("../helper");
  const mockFn = jest.fn((num) => num + 1);

  mockFn.mockResolvedValue({ name: "Tom" });

  test("사용자의 이름은 Tom", () => {
    mockFn().then((res) => {
      expect(res.name).toBe("Tom");
    });
  });

  jest.mock("../helper");
  helper.createUser.mockReturnValue({ name: "Tom" });

  test("유저를 만든다.", () => {
    const user = helper.createUser("Tom");
    expect(user.name).toBe("Tom");
  });
});

describe("기타", () => {
  const mockFn = jest.fn();

  mockFn(10, 20);
  mockFn();
  mockFn(30, 40);

  test("한번 이상 호출", () => {
    expect(mockFn).toBeCalled();
  });
  test("정확히 3번 호출", () => {
    expect(mockFn).toBeCalledTimes(3);
  });
  test("10, 20을 받은 함수가 있다.", () => {
    expect(mockFn).toBeCalledWith(10, 20);
  });
  test("마지막 함수는 30, 40을 받는다.", () => {
    expect(mockFn).lastCalledWith(30, 40);
  });
});
