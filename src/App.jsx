import List from "./components/list/List"
import Detail from "./components/detail/Detail"
import Chat from "./components/chat/Chat"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase"
import { useUserStore } from "./lib/userStore"

const App = () => {
  // const user = false;

  const {currentUser,isLoading,fetchUserInfo} = useUserStore();

  useEffect(() =>{
    const unSub = onAuthStateChanged(auth,(user) =>{
      // console.log(user)
      fetchUserInfo(user?.uid)
    })
    return () =>{
      unSub();
    };
  },[fetchUserInfo])

  // console.log(currentUser)

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>

      {currentUser ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        
        <Login />
      )}

      <Notification />
    </div>
  )
}

export default App