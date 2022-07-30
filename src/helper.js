const helper = {
  sum: (a, b) => a + b,
  makeUser: (name, age) => ({
    name,
    age,
  }),
  err: () => {
    throw new Error("에러 발생");
  },
  getName: (callback) => {
    const name = "Tom";
    setTimeout(() => {
      callback(name);
      // throw new Error("서버 에러..");
    }, 1000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(age);
      }, 1000);
    });
  },
  getError: () => {
    const age = 30;
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("error");
      }, 1000);
    });
  },
};

module.exports = helper;
