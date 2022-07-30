const helper = {
  sum: (a, b) => a + b,
  makeUser: (name, age) => ({
    name,
    age,
  }),
  err: () => {
    throw new Error("에러 발생");
  },
};

module.exports = helper;
