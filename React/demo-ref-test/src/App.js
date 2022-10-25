import './App.css';

import React, { useEffect } from 'react';

function App() {
  // 旧版 4 2 1 3
  // const handleClick1 = (e) => {
  //   console.log(1);
  // };
  // const handleClick2 = () => console.log(2);
  // const handleClick3 = () => console.log(3);
  // const handleClick4 = (e) => {
  //   console.log(4);
  // };
  // return <div onClick={handleClick3} onClickCapture={handleClick4}  >
  //   <button onClick={handleClick1} onClickCapture={handleClick2}  >点击</button>
  // </div>;

  // 新版
  const refObj = React.useRef(null);
  useEffect(() => {
    const handler = () => {
      console.log('事件监听');
    };
    refObj.current.addEventListener('click', handler);
    return () => {
      refObj.current.removeEventListener('click', handler);
    };
  }, []);
  const handleClick = () => {
    console.log('冒泡阶段执行');
  };
  const handleCaptureClick = () => {
    console.log('捕获阶段执行');
  };
  return <button ref={refObj} onClick={handleClick} onClickCapture={handleCaptureClick} >点击</button>;
}

export default App;
