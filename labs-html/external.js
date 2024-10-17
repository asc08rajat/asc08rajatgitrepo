// console.log("external");

// function externalscript(){
//     console.log("the external script")
// }

// externalscript();

// for(var i=0; i<5;i++){
//     console.log(i);
//     console.log("the value of i is "+i);
//     console.log("value of i is ",i,".");
//     alert(i);
//     externalscript();
// }


const map1=new Map();

map1.set('nitish','Dosa');
map1.set('bodha','palav');
map1.set('Nitish','maggie');
map1.set('harsh','Pizza');
// map1.set(1,'Dosa');
// map1.set(2,'palav');
// map1.set(1,'maggie');
// map1.set(2,'Pizza');

const wordarray=[...map1] //spread operator
console.log(wordarray)
// for(let[key,value] of map1 ){
//     console.log(key+' likes '+value);
// }

for(let[key] of map1 ){
    console.log(key+' likes '+map1.get(key));
}

// const wordarray1=['h1','h2','h3','h4'];
// const [w1,w2,w3,w4]=[...wordarray1]
// console.log('word1:', w1);
// console.log('word2:', w2);
// console.log('word3:', w3);
// console.log('word4:', w4);

const wordarray1=['h1','h2','h3','h4'];
const {w1,w2,w3,w4}=[...wordarray1]
console.log('word1:', w1);
console.log('word2:', w2);
console.log('word3:', w3);
console.log('word4:', w4);