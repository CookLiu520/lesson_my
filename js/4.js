// 手写map
// thisArg指定 callbackFn内部的this指向
Array.prototype.map = function(callbackFn, thisArg){
    // this->[1,2,3]
    // obj?
    if(this === null || this === undefined){
        throw new TypeError('cannot read property map of null or undefined')
    }
    // if(Object.prototype.toString.call(callbackFn) != '[object Function]'){
    if(typeof callbackFn != 'function'){
        throw new TypeError(callbackFn + 'is not a functionn')
    }
    // 显式类型转化this,保证一定是个对象
    let O = Object(this);
    let T = thisArg;

    let len = O.length;
    let A = new Array(len);//跟以前的数组没有影响，全新内存分配
    for(let k = 0;k<len;k++){
        // this[k]遍历的每一项
        // 下标
        // this 第三个参数
        // if(k in O){
            let kValue = O[k]//每一项
            let mappedValue = callbackFn.call(T,kValue,k,O);
            A[k] = mappedValue
        // }
    }
    return A;
}

// 手写map
let nums = [1,2,3];
let obj = {val:5};//map回调函数，指定它的this
let newnums = nums.map(function(item,index,array){
    return item+index+array[index]+this.val;
},obj)
console.log(newnums);