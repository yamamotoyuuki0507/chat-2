// import React, { useState } from 'react'
// // import firebase from '../config/firebase'
// // import Login from './Login'

// // import SignUp from './SignUp'




// チャット機能

import React, { useEffect, useState } from 'react'
import firebase from '../config/firebase'

import Login from './Login'
import SignUp from './SignUp'


const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')

    useEffect(() => {
        firebase.firestore().collection('messges')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })

                setMessages(messages)
            })
    }, [])

    // const user = //useContextを用いてログイン中のユーザーオブジェクトを取得してください

    // const handleSubmit = () => {
    //     firebase.firestore().collection('messages').add({
    //         content: value,
    //         user: user.displayName
    //     })
    // }



    return (
        <>
            <h1>Room</h1>
            <ul>
                <li>
                    sample user : sampie meaaage
                </li>
            </ul>
            <form>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
            </form>
            <button onClick={() => firebase.auth()}>Logout</button>
        </>
    )
}

export default Room



