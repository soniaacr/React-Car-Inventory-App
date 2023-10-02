// import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
      if (!user) {
            navigate("../")
            signInWithPopup(auth, provider)
      }
    });
    // useEffect(() => {
    //     if (!auth.currentUser) {
    //         navigate("../")
    //         signInWithPopup(auth, provider)
    //     }
    // }, [])
  return (
    <>{children}</>
  )
}

export default AuthChecker