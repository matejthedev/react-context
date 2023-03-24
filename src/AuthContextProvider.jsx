import {useState, createContext} from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <AuthContext.Provider value={[signedIn, setSignedIn]}>
      {children}
    </AuthContext.Provider>
  )
}