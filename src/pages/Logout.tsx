import { useEffect } from 'react'

const Logout = () => {
  useEffect(() => {
    const logoutFunction = async () => {
      console.log('you will be logged out')
    }

    logoutFunction()
  }, [])

  return (
    <div>Logout</div>
  )
}

export default Logout;