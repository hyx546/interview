const Subject = (() => {
  const observers = [];
  const addOb = (ob) => {
    observers.push(ob);
  };

  const nofity = () => {
    for (let ob of observers) {
      if (typeof ob.update === 'function') {
        ob.update();
      }
    }
  }
  return { addOb, nofity }
})();

const subA = {
  updated:() =>{
    console.log('------updatea');
  }
}

const subB = {
  updated:() =>{
    console.log('-----updateb');
  }
}

Subject.addOb(subA)
Subject.addOb(subB)
Subject.nofity();
