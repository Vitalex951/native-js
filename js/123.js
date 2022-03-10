const names = ['Bob', 'Ted', 'Alex', 'Fred', 'fill', 'Витал', 'ales', 'bob', 33, 44]

// console.log(names.sort())  //меняет исходный массив  и вовзращает ссылку на исходный массив
// console.log([...names].sort()) //создает копию массивы
// console.log(names)


const number = [1, 100, 0, 99, 33, 456, 321, 111, 33, 2, 3]

// console.log(number.sort())

const compareFunction1 = (a, b) => a <= b ? -1 : 1 //по возрастанию
const compareFunction2 = (a, b) => a <= b ? 1 : -1 //по убыванию
const compareFunction3 = (a, b) => a - b  //по возрастанию
const compareFunction4 = (a, b) => b - a //по убыванию

const low = (a, b) => {
    if (a.toString().toLowerCase() <= b.toString().toLowerCase()) {
        return -1
    } else 1
}
// console.log(names.sort(low))

// console.log(number
//     .sort((a, b) => b - a)
//     .reverse()) //по возрастанию

// console.log(names.sort((a, b) => b.toLowerCase() - a.toLowerCase()))

const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];
// console.log([...students].sort(((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)))
// console.log([...students].sort(((a, b) => a.age - b.age)))


//bubble sort

for (let j = 0; j < number.length - 1; j++) {
    for (let i = 0; i < number.length - 1 - j; i++) {
        if (number[i] > number[i + 1]) {

            let temp = number[i + 1]
            number[i + 1] = number[i]
            number[i] = temp
            [number[i+1], number[i]]=[number[i+1], number[i]]
        }
    }
}

console.log(number);