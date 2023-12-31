import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  // Triggered when change email input field
  // Keep email stays in sync with user's email input
  const onChange = (e) => setEmail(e.target.value)

  // Called when submit form
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email) // Send password reset email using Firebase Auth
      toast.success('Email was sent') // success toastify note display when email is successfully sent
    } catch (error) {
      toast.error('Could not send reset email') // otherwise notify email not sent
    }
  }

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
          <Link className='forgotPasswordLink' to='/sign-in'>
            Sign In
          </Link>

          <div className='signInBar'>
            <div className='signInText'>Send Reset Link</div>
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ForgotPassword