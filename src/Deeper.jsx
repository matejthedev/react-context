import React, {useContext} from 'react'
import { AuthContext } from './AuthContextProvider'

const Deeper = () => {
  const [signedIn] = useContext(AuthContext)
  return (
    <div>Deeper: {signedIn ? "da daaaa" : "nah"}</div>
  )
}

export default Deeper