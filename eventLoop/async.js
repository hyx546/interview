let a = 0;
let b = async () => {
  a = a + await 10;
  console.log('-----',a);
}
b();
a++;
console.log('--------1',a);