function debounce(fn,delay) {
  let timer = nulll
  return function () {
    if(timer) clearTimeout(timer);
    timer = setTimeout(fn,delay)
  }
}