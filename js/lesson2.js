let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    }, {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const names = [];

for (let i = 0; i < students.length; i++) {
    const name = students[i].name
    names.push(name)
}

console.log(names)

const tryStudents = []

for (let i = 0; i < students.length; i++) {
    const trueStudent = {...students[i], isStudent: true} //внутрь нового новго объекта мы кладем сожержимое i студента, а потом в этот объект мы добавляем новое значение
    // const trueStudent = {
    //     name: students[i].name,
    //     age: students[i].age,
    //     isMarried: students[i].isMarried,
    //     scores: students[i].scores,
    //     isStudent: true
    // }
    tryStudents[i] = trueStudent


}
console.log(tryStudents)


function myMap(arr, callback) {
    const resultArray = [];
    for (let i = 0; i < arr.length; i++) {

        const newData = callback(arr[i])
        resultArray[i] = newData
    }


    return resultArray;

}

const b = {
    isStudent: true
}

// console.log(myMap(students, s => s.name))
console.log(myMap(students, s => ({...s, isStudent: true})))
console.log(myMap(students, s => Object.assign(s, b)))
console.log(myMap(students, s => ({
    name: s.name,
    age: s.age,
    isMarried: s.isMarried,
    scores: s.scores,
    isStudent: true
} )))

// console.log(myMap(students, s => {s.["isStudent"]=true})
console.log(students.map(s => s.name))
// function myMap(arr, callback) {
//     const resultArray = []
//     for (let i = 0; i < arr.length; i++) {
//         // получение данных из каждого эл-та исходного массива:
//         const newData = callback(arr[i])
//         // добавление данных в новый массив
//         resultArray[i] = newData
//     }
//     return resultArray
// }
//
// console.log(myMap(students, s => s.name));
// console.log(myMap(students, s => ({...students[s], isStudent: true  // разобрать почему student[s] просто массив
// })));




// const getTrueStudent = (s) => {
//     return {..., isStudent: true}
// }  ////???
//
// console.log(students.map(getTrueStudent))

/*console.log(students.map(s => ({s.push(isStudent: true)} */// ????

function myFilter(arr, callback) {
    const resultArray = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) === true) {
          return  arr[i]
        }
    }
}

const getBestStudents = s => s.scores >= 100


console.log(myFilter(students, s => s.scores >= 100)) // почему undefined
console.log(students.filter(s => s.scores >= 100))


//20-30

function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) === true) {
            return arr[i];
        }
    }
}

console.log(myFind(students, s => s.name === "Bob"))
console.log(students.filter(s => s.name === 'Bob'))

