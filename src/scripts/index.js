import '../styles/style.scss'
import firebase from "firebase";
import {firebaseConfig} from "./firebaseConfig";


// const PUSH_CHARS = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
//
// function decode(id) {
//     id = id.substring(0,8);
//     var timestamp = 0;
//     for (let i=0; i < id.length; i++) {
//         let c = id.charAt(i);
//         timestamp = timestamp * 64 + PUSH_CHARS.indexOf(c);
//     }
//     return timestamp;
// }
//
//
// console.log('App had started')
//
// firebase.initializeApp(firebaseConfig)
// const database = firebase.database()
//
// const form = document.getElementById('form');
// const input = document.getElementById('input')
// const input2 = document.getElementById('input2')
// const nickName = document.getElementById('nickName')
//
// form.addEventListener('submit', async (e) => {
//     e.preventDefault()
//
//     const nickNameValue = nickName.value
//
//     const key = database.ref(`users`).push().key
//     await database.ref(`users/${nickNameValue}/key`).set(key)
// })
//
// const deleteInput = document.getElementById('delete')
// const deleteForm = document.getElementById('deleteForm')
//
// deleteForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//
//     database.ref(`users/`).on('value', async snap => {
//         const allUsers = snap.val()
//
//         console.log(allUsers)
//
//         const last = {
//             key: '',
//             timeStamp: 0
//         }
//
//         await snap.forEach(snapEl => {
//             const element = snapEl.val().key
//
//             const timeStamp = decode(element)
//
//             if (last.timeStamp < timeStamp) {
//                 last.key = element
//                 last.timeStamp = timeStamp
//             }
//
//         })
//
//         console.log(last)
//     })
//
// })
//
//
// let date = new Date().getTime()
//
// console.log(date)

const uploadForm = document.getElementById('uploadForm')
const uploadInput = document.getElementById('uploadInput')

uploadForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log(uploadInput.files)
})