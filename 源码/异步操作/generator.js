function* a() {
  let o=1;
  yield o++;
  yield o++;
}
let b = a();
console.log(b.next());

let c =  a();
console.log(c.next());
console.log(b.next());
console.log(b.next());  


