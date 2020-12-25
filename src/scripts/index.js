import '../styles/style.scss'
import firebase from "firebase";
import {firebaseConfig} from "./firebaseConfig";

console.log('App had started')

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

const form = document.getElementById('form');
const input = document.getElementById('input')
const input2 = document.getElementById('input2')
const nickName = document.getElementById('nickName')

console.log('start')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log('Event listener')

    const nickNameValue = nickName.value
    const inputValues = {
        name: input.value,
        surname: input2.value
    }

    input.value = ''
    input2.value = ''
    nickName.value = ''

    database.ref('users/' + nickNameValue).set(inputValues)
    database.ref('users/' + nickNameValue).on('value', (data) => console.log(data.val()))
})

const deleteInput = document.getElementById('delete')
const deleteForm = document.getElementById('deleteForm')

deleteForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const NickName = deleteInput.value
    deleteInput.value = ''
    database.ref('users/' + NickName).remove()
})



const names = {
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
}

const murders = [
    'Lucas', 'Bill'
]

const killer = (names, murders) => {
    // const killers = Object.keys(names).filter(name => {
    //
    //     const count = murders.filter(murder => {
    //         if (names[name].includes(murder)) return murder
    //     })
    //
    //     if (count.length > 1) {
    //         return name
    //     }
    // })
    // return killers

    const killers = Object.keys(names).filter(name => {
        const pers = names[name]
        const newArray = new Set([...pers, ...murders])
        if (pers.length + murders.length - newArray.size > 1) return name
    })

    return killers
}

console.log(killer(names, murders))
