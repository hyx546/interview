// u.console("hello").settimeout(3000).console("world").settimeout(3000).console()
// 首先输出hello，3s后输出world,再间隔3s,再输出

function U() {
  this.time = null;
  this.totalTime = 0;
  this.console = function (text) {
    if (this.totalTime >= 0) {
      this.totalTime += this.time;
      setTimeout(() => {
        console.log(text);
      }, this.totalTime);
    } else {
      console.log(text);
    }
    return this
  }

  this.settimeout = function (time) {
    this.time = time || null;
    return this
  }
}

let u = new U();
u.console("hello").settimeout(3000).console("world").settimeout(3000).console()