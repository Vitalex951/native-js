const todoListId_1 = '523f'
const todoListId_2 = '552f'

const todoLists = [
    {
        id: '523f',
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: '552f',
        title: 'What to buy',
        filter: 'all',

    }
]

const tasks = {
    [todoListId_1]: [
        {title: 'HTML', isDone: true},
        {title: 'CSS', isDone: true},
        {title: 'React', isDone: false}
    ],
    [todoLists[1].id]: [
        {title: 'Water', isDone: true},
        {title: 'Bread', isDone: true},
        {title: 'Monik', isDone: true},
    ]
}

const propName = 'age'
const a = {
    'name': "Ted",
    [propName]: 45,
    [10 + 5]: 'hey!!!'
}


const students = [
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
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

//reduce

const arr = [1, 2, 3, 4, 5, 6]
console.log(arr.reduce((sum, el) => sum + el, 0))
console.log(arr.reduce((max, el) => max > el ? max : el))


console.log(students.reduce((acc, st) => acc + ' ' + st.name, '')) //name students
console.log(students.reduce((acc, el) => {
    if (!el.isMarried) {
        acc.push(el)
    }
    return acc
}, []))
console.log(students.reduce((newobj, el) => {
    newobj[el.name] = el.scores
    return newobj
}, {}))