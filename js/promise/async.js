function havePromise() {
  console.log(1);
  return new Promise((resolve, reject) => {
    resolve(100)
  })
}

async function getResult() {
  try {
    // 表达式如果为promise，必须等到resolve才会执行下面的代码
    // 如果为reject，通过catch可以捕捉到reason
    let a = await havePromise();
    console.log(a);
  } catch (error) {
    console.log(error);
  }
}
getResult();
console.log(3);