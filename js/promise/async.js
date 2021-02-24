function havePromise() {
  console.log(1);
  return 100
}

async function getResult() {
  let a = await havePromise();
  console.log(a);
}
getResult();
console.log(3);