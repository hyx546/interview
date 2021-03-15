interface UserTest {
  name: string,
  age: number,
  obj: { [propName:string]: string }
}

let ob: UserTest = {
  name:'hyx',
  age:22,
  obj:{
    name:'hyx',
    address:'aaaa'
  }
}
console.log(ob);
