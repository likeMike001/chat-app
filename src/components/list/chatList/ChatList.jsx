import { useEffect, useState } from "react"
import "./chatlist.css"
import AddUser from "./addUser/AddUser"
import { useUserStore } from "../../../lib/userStore"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../../lib/firebase"
import { onSnapshot } from "firebase/firestore"


const ChatList = () => {

  const [addMode, setAddMode] = useState(false)
  const [chats, setChats] = useState([])

  const { currentUser } = useUserStore()


  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), 
    async (res) => {
      // setChats(doc.data())
      const items  = res.data().chats;

      const promises = items.map(async (item) => {
        const userDocRef = doc(db,"users",item.receiverId);
        const uesrDocSnap = await getDoc(userDocRef);


        const user = uesrDocSnap.data();

        return { ...item,user}
      })

      const chatData = await Promise.all(promises)


      setChats(chatData.sort((a,b)=>b.updatedAt - a.updatedAt))
      
    });

    return () => {
      unSub()
    }
  }, [currentUser.id])

  // console.log(chats)

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search"></input>
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      {chats.map((chat) => (
        <div className="item" key={chat.chatId}>
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe </span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {addMode && <AddUser />}
    </div>
  )
}

export default ChatList
