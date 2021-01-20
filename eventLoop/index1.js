console.log(1);
//A
setTimeout(function(){
    console.log(2);
    //C
    setTimeout(function(){
        console.log(4);
        //D
        setTimeout(function(){
            console.log(5);
        })
    })
},0)
//B
setTimeout(function(){
    console.log(3);
    //E
    setTimeout(function(){
        console.log(6);
    })
},0)
console.log('ok');

// 1 ok 2 3 4 6 5