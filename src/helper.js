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
  connectUserDb: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "홍길동",
          age: 30,
          gender: "남자",
        });
      }, 500);
    });
  },
  disconnectUserDb: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  },
  connectCarDb: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          brand: "현대",
          name: "아이오닉",
          color: "실버",
        });
      }, 500);
    });
  },
  disconnectCarDb: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  },
};

module.exports = helper;
