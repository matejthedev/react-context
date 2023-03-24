import { useState } from 'react'
import './App.css'
import SignInButton from './SignInButton'
import Display from './Display'
import Deep from './Deep'
import {AuthContextProvider} from './AuthContextProvider'

function App() {
  return (
      <AuthContextProvider className="App">
        <SignInButton />
        <Display/>
        <Deep />
      </AuthContextProvider>
  )
}

export default App
