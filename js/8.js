// 浅拷贝
let obj = {name:'sy',age:18,hometown:{
    name:'乐平'
}}
const obj2 = Object.assign({},obj,{sex:'sss'})
console.log(obj2);
obj2.hometown.name='景德镇'
obj2.name = 'sssss'
console.log(obj);