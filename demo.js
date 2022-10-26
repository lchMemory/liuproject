//class继承
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	say() {
		console.log(this.name, this.age);
	}
}

class Student extends Person {
	constructor(name, age, score) {
		super(name, age);
		this.score = score;
	}
	say() {
		super.say();
		console.log(this.score);
	}
}

let obj = new Student('kk', '30', 100);

obj.say();

// Object.keys(obj);
//proxy 拦截  数组  set

// Object.defineProperty(obj,name,{
//      get(){
//         console.log('调用get')
//     }
//     set(){
//         console.log('调用set')
//     },

// })

let obj = {
	name: 'KK',
	age: '30'
};
let proxy = new Proxy(obj, {
	set(target, key, value) {
		console.log('调用get', target, key, value);
		target[key] = value;
	},
	get(target, key) {
		console.log('调用get', target, key);
		return target[key];
	}
});

//数组去重
let arr = [1, 2, 3, 1, 2, 8, 9];
let sarr = new Set(arr);
let newarr = [...sarr];

let arr1 = new Set([1, 2, 3, 4, 5]);
let arr2 = new Set([2, 5, 6, 7, 8]);
//数组取并集
let symbolarr = new Set([...arr1, ...arr2]);
//数组取交集
let newarr3 = new Set([...arr1].filter((item) => arr2.has(item)));
//数组取差集
let newarr4 = new Set([...arr1].filter((item) => !arr2.has(item)));

//Symbol()

let keys = {
	name: Symbol("name"),
	age: Symbol("age")
};
let sobj = {
	[keys.name]: 'kk',
	[keys.age]: '30'
};
