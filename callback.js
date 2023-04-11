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