import React from 'react'
import { Button } from '@mui/material'
import firebase from "firebase/compat/app";
import { auth } from '../firebase'

function SignIn() {
    function signinGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider);
    }
    return (
        <div>
            <Button onClick={signinGoogle}>Googleでログイン</Button>
        </div>
    )
}

export default SignIn
