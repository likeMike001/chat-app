import EmojiPicker from "emoji-picker-react"
import "./chat.css"
import { useState } from "react"


const Chat = () => {

  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")

  // console.log(text)

  const handlEmo = e => {
    // console.log(e)

    setText((prev) => prev + e.emoji)
    setOpen(false)

  }

  return (


    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Rudresh Bhandari </span>
            <p>Loren Ipsum dolor , sit amef</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt='' />
          <img src="./video.png" alt='' />
          <img src="./info.png" alt='' />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="avatar-img" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus assumenda consequuntur illo aspernatur. Cupiditate obcaecati omnis quae totam sed, ipsum quis! Temporibus adipisci, ea quisquam quae expedita itaque harum?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus assumenda consequuntur illo aspernatur. Cupiditate obcaecati omnis quae totam sed, ipsum quis! Temporibus adipisci, ea quisquam quae expedita itaque harum?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="avatar-img" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus assumenda consequuntur illo aspernatur. Cupiditate obcaecati omnis quae totam sed, ipsum quis! Temporibus adipisci, ea quisquam quae expedita itaque harum?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus assumenda consequuntur illo aspernatur. Cupiditate obcaecati omnis quae totam sed, ipsum quis! Temporibus adipisci, ea quisquam quae expedita itaque harum?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="avatar-img" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus assumenda consequuntur illo aspernatur. Cupiditate obcaecati omnis quae totam sed, ipsum quis! Temporibus adipisci, ea quisquam quae expedita itaque harum?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://www.pexels.com/photo/close-photography-of-red-and-pink-rose-56866/" alt=" "  />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus assumenda consequuntur illo aspernatur. Cupiditate obcaecati omnis quae totam sed, ipsum quis! Temporibus adipisci, ea quisquam quae expedita itaque harum?</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt='' />
          <img src="./camera.png" alt='' />
          <img src="./mic.png" alt='' />
        </div>
        <input type="text" placeholder="Write a message ...."
          value={text}
          onChange={(e) => setText(e.target.value)}

        />
        <div className="emoji">
          <img src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handlEmo} />
          </div>
        </div>
        <button className="sentButton">Send </button>
      </div>
    </div>
  )
}

export default Chat
