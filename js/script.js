const name = 'bob';
let friend = name;
friend = "alex";
console.log(name);

const user = {
    name: 'BoB',
    age: 25

};
const myFriend = user;
user.name = 'Ann';



console.log(typeof 4); //'number'
console.log(typeof NaN); //'number'
console.log(typeof Infinity); //'number'

console.log(typeof (Number.isNaN(NaN))); //true
console.log(typeof (Number.isNaN(NaN))); //boolean
console.log(Number.isFinite(Infinity)); //false

console.log(typeof null) //'object'
console.log(typeof {}) //'object'
console.log(typeof []) //'object'
console.log(Array.isArray([])) //true


console.log(typeof (() => {
})) //'function'

console.log({} === {}) //false
console.log({} == {}) //false

const cloneUser = {...user, isStudent: true}; //внутрь новго объекта, положи новый объект (поверхностное клонирование)

const alex = {...cloneUser, name: 'Alex'}
console.log(alex)


console.log(user === myFriend) // true
console.log(user === cloneUser); // false
console.log(user.name === cloneUser.name) // true

console.log(cloneUser)

const arr = [1,2,3,4,5,6];
const copyArr = [...arr]
console.log(arr === copyArr); //false

const userComplex = {
    name: 'Bob',
    age: 25,
    friends: ['Alex', 'Ann', 'Donald']
}


const copComplexUser = {...userComplex}
console.log(copComplexUser === userComplex) //false

// copComplexUser.friends.push('John')

// console.log(userComplex);

const deepCopComplexUser = {...userComplex, friends: [...userComplex.friends]};

deepCopComplexUser.friends.push('John')

console.log(userComplex);