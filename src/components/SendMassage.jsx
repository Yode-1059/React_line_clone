import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
function SendMassage() {
    const [massage, setMessages] = useState()

    function sendMassage(e) {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser
        db.collection("messages").add({
            text: massage,
            uid,
            photoURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessages("")
    }

    return (
        <div>
            <form onSubmit={sendMassage}>
                <div className='sendMsg'>
                    <Input
                        type="text"
                        placeholder='メッセージ'
                        onChange={(e) => setMessages(e.target.value)}
                        value={massage} />
                    <SendIcon />
                </div>
            </form>
        </div>
    )
}

export default SendMassage
