// const a = { name: 'ramesh' };
// a.name = 'Sindhu';
// console.log(a);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.slice(0, 4));
// const a = arr.splice(1, 2);
// console.log(arr);
// console.log(a);


const arr = [1, 2, 3, 4, 5, 6, 7];
const res = arr.filter((data) => data != 2);
console.log(res);

// const res2 = arr.map((data) => data != 2);
const res2 = arr.map((data) => data * 2);
console.log(res2);