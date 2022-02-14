import { getAuth, signOut } from 'firebase/auth'
import { FunctionComponent, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { app } from '../../firebase/firebase'
import { Login } from '../Login/Login'
import { SignUp } from '../SignUp/SignUp'
import { Button, Container, Text } from './Welcome.styles'

export const Welcome: FunctionComponent = () => {
  const auth = getAuth(app)
  const [isLogin, setIsLogin] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [user, loading, error] = useAuthState(auth)

  const logout = () => {
    signOut(auth)
  }

  if (user) {
    return (
      <Container>
        <Text>Welcome, {user!.displayName}!</Text>
        <Button onClick={logout}>Log out</Button>
      </Container>
    )
  }
  return (
    <>
      <Container>
          <Button
            onClick={() => {
              setIsLogin(true)
              setIsSignUp(false)
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              setIsSignUp(true)
              setIsLogin(false)
            }}
          >
            Sign Up
          </Button>
        {isLogin && <Login />}
        {isSignUp && <SignUp />}
      </Container>
    </>
  )
}
