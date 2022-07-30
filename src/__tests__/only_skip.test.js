// only : 이 테스트만 실행시키고 싶을 때
test.only("0 + 1 = 1", () => {
  expect(0 + 1).toBe(1);
});

// skip : 이 테스트를 넘기고 싶을 때
test.skip("0 + 1 = 1", () => {
  expect(0 + 1).toBe(1);
});
