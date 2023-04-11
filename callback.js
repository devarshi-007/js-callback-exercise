function sum(n1,n2,cb){
    setTimeout(function(){
        cb(n1+n2);
    },100)
}

function multiply(n1,n2,cb){
    setTimeout(function(){
        cb(n1*n2);
    },200)
}

function print(str){
    console.log(str);
}

multiply(5,4,function(firstResult){
    multiply(3,2,function(secondResult){
        sum(firstResult,secondResult,print);
    })
})