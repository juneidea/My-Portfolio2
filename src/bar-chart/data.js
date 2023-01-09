const data = [
    {
    name: 'Adam',
    age: 20,
    salary: 30100,
    color: 'green'
    },
    {
    name: 'Bob',
    age: 60,
    salary: 102000,
    color: 'green'
    },
    {
    name: 'Carla',
    age: 31,
    salary: 57000,
    color: 'green'
    },
    {
    name: 'Dave',
    age: 42,
    salary: 22000,
    color: 'green'
    },
    {
    name: 'Ethel',
    age: 80,
    salary: 91000,
    color: 'green'
    },
    {
    name: 'Frank',
    age: 28,
    salary: 73000,
    color: 'green'
    },
    {
    name: 'Gina',
    age: 21,
    salary: 16000,
    color: 'green'
    }
   ]

const getRatio = (num) => {
    let dec = 1
    let rate
    while( num/dec >= 10) {
        dec *= 10
        if( num/dec < 10) rate = num/dec
    }
    return 1/(dec/100)/rate
}

const scale = {
    age: {
        start: '0',
        max: 100,
        ratio: getRatio(100)
    },
    salary: {
        start: '0',
        max: 150000,
        ratio: getRatio(150000)
    }
}

const inputs = [
    {   id: 1,
        name:"name",
        type: "text",
        placeholder: "your name",
        label: "name",
        pattern: "^[A-Za-z0-9]{3,10}$",
        required: true,
        warning: "need valid name 3-10 charactors",
    },
    {   id: 2,
        name:"age",
        type: "number",
        placeholder: "0-100",
        label: "age",
        required: true,
        warning: "need age 0-100",
        min: 0,
        max: 100,
    },
    {id: 3,
        name:"salary",
        type: "number",
        placeholder: "0-150000",
        label: "salary",
        required: true,
        warning: "need salary 0-150,000",
        min: 0,
        max: 150000,
    },
]
   
export { data, scale, inputs }