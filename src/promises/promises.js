const timeLimit = (fn, t) => {
  return async function (...args) {
    //set new Promise and it will get resolved with the first internal resolution that happens between 1 and 2
    return new Promise((resolve, reject) => {
      //set id for timeout so it can be cleared afterwards
      let timerId;

      //1 - trigger fn and set up .then() to handle result and timeout clearing
      fn(...args)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          clearTimeout(timerId);
        });

      //2 - trigger timeout to result in a reject after time t
      timerId = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });
  };
};

const timeLimitRace = (fn, t) => {
  return async function (...args) {
    //set new promise for setTimeout (result = reject)
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    //set promise for fn (result = resolve)
    const fnPromise = fn(...args);

    //return the first promise that is resolved/rejected
    return Promise.race([fnPromise, timeoutPromise]);
  };
};

module.exports = { timeLimit, timeLimitRace };
