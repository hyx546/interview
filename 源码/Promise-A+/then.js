Promise.prototype.then = (onFulfilled, onRejected) => {

  const self = this;
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => threw(reason)
  if(self.status === 'fulfilled'){
    return new Promise((resolve,reject) =>{

    })
  }
  if(self.status === 'rejected'){
    return new Promise((resolve,reject)=> {
      
    })
  }
  if(self.status === 'pending'){
    return new Promise((resolve,reject) =>{
      
    })
  }
}