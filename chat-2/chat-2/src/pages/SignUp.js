import React from 'react'
import firebase from '../config/firebase'

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='passweord'
                        placeholder='Password'
                    />
                </div>
                <button type='submit'> Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp