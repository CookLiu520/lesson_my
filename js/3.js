// 手写map
let nums = [1,2,3];
let obj = {val:5};//map回调函数，指定它的this
let newnums = nums.map(function(item,index,array){
    return item+index+array[index]+this.val;
},obj)
console.log(newnums);