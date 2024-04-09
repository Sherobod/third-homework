const arr = [1,2,3, 'Alex', 'I am', [1,2, 'Hello' ], '24', 'My name is', [1,['years old', 'and']]]

let txt = arr[5][2] + ', ' + arr[7].toLowerCase() + ' ' + arr[3]  + ' ' + arr[8][1][1] + ' ' + arr[4] + ' ' + arr[6] + ' ' + arr[8][1][0]

console.log(txt);


const students = ['Ilxom', 'Xondamir', 'Mirkomil', 'Umar', 'Muhammad-Aziz', 'Sherobod', 'Ansor', 'Daler']

let numb = +prompt('any num')
if (numb >= 0 && numb <= 7) {
    console.log (students.splice(numb, 1))
} else {
    console.log('error')
}

let name = prompt('any name')
if (students.includes(name)) {
    console.log(students.splice(students.indexOf(name), 1))
} else {
    console.log('error')
}


