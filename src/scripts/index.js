import '../styles/style.scss'
import firebase from "firebase";
import {firebaseConfig, storage} from "./firebaseConfig";
import axios from "axios";


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

const storageRef = storage.ref()
const imgRef = storage.ref('images/some-image2')

uploadForm.addEventListener('submit', async e => {
    e.preventDefault()

    console.log(uploadInput.files)

    const imgUpload = imgRef.put(uploadInput.files[0])

    const imgDom = document.getElementById('image')
    const url = await storage.ref('images/some-image').getDownloadURL()

    const response = await axios.get(url)

    console.log(response)

    // imgUpload.on('state_changed',
    //     (snapshot) => {
    //         let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //
    //         console.log('Upload is ' + progress + '% done');
    //
    //         switch (snapshot.state) {
    //             case firebase.storage.TaskState.PAUSED:
    //                 console.log('Upload is paused');
    //                 break;
    //             case firebase.storage.TaskState.RUNNING:
    //                 console.log('Upload is running');
    //                 break;
    //         }
    //     },
    //     (error) => {
    //         // Handle unsuccessful uploads
    //     },
    //     () => {
    //         imgUpload.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //             console.log('File available at', downloadURL);
    //         });
    //     }
    // );
})
