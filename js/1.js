let ary = [1, [2, [3, [4, 5]]], 6];
// let str = JSON.stringify(ary); //序列化
// let o = { a: 1, b: 2, c: 3 }
// 第一种：es10内置flat API    es6 2015
// ary = ary.flat(Infinity) //es10（2019）提供的flat API 兼容性差
// console.log(ary);
// console.log(str);
// 第二种： //是正则的格式（字符串匹配的规则）   g是正则修饰符，表示全局不停下来，一直匹配
//  ()表示分组 把匹配的各种可能放到这个分组来   | 或者  正则是按字符匹配的  [a-z]匹配一个小写字母
//  [a-z]{3,5}[ 本身是正则的运算符号 \[转译  匹配[字符本身
//  replace方法， 正则匹配到的替换成  空
// ary = str.replace(/(\[|\])/g, '').split(',').map(item => +item)
// console.log(ary);
// 第三种方法
// str = str.replace(/(\[|\])/g, '')
// str = '[' + str + ']'
// ary = JSON.parse(str)
// console.log(ary);

// 第四 递归
// let result = []
// let fn = function(ary) {
//     for (let i = 0; i < ary.length; i++) {
//         let item = ary[i]
//         if (Array.isArray(ary[i])) {
//             fn(item)
//         } else {
//             result.push(item)
//         }
//     }
//     return result
// }

// console.log(fn(ary));

// 第五
// function flatten(ary) {
//     return ary.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
//     }, [])
// }
// console.log(flatten(ary));

//第六
// while (ary.some(Array.isArray)) {
//     ary = [].concat(...ary)
// }
// console.log(ary);
// console.log([].concat(...ary));


function aaa() {
    let a = 3;

    function bbbb() {
        console.log(a);
    }
    return bbbb
}
let c = aaa();
c();

