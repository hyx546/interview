// // 需要实现的函数
// function repeat (func, times, wait) {}，
// // 使下面调用代码能正常工作
// const repeatFunc = repeat(console.log, 4, 3000);
// repeatFunc("helloworld");//会输出4次 helloworld, 每次间隔3秒

function wait(s){
  return new Promise((res) =>{
    setTimeout(res, s);
  })
}

function repeat (func, times, s) {
  const self = this
  return async function (){
    for (let i = 0; i < times; i++) {
      func.apply(self,arguments)
      await wait(s)
    }
  }
}

const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("helloworld")