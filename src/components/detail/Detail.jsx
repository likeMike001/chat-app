import React from 'react'
import "./detail.css"
import { auth } from '../../lib/firebase'

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Loren ispum dolor ist emnet.</p>
      </div>
      <div className='info' >
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src='./arrowUp.png' alt=" " />
          </div>

        </div>
        <div className="option">
          <div className="title">
            <span>Privacy and Help</span>
            <img src='./arrowUp.png' alt=" " />
          </div>

        </div>
        <div className="option">
          <div className="title">
            <span>Privacy and Help</span>
            <img src='./arrowUp.png' alt=" " />
          </div>

        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos </span>
            <img src='./arrowDown.png' alt=" " />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://www.pexels.com/photo/brown-hummingbird-selective-focus-photography-1133957/" alt=""></img>
                <span>photo_212</span>
              </div>
              <img src="./download.png" alt="" className="icon"></img>
            </div>
            {/* <div className="photoItem">
              <div className="photoDetail">
                <img src="https://www.pexels.com/photo/brown-hummingbird-selective-focus-photography-1133957/" alt=""></img>
                <span>photo_212</span>
              </div>
              <img src="./download.png" alt="" className="icon"></img>
            </div> */}
            {/* <div className="photoItem">
              <div className="photoDetail">
                <img src="https://www.pexels.com/photo/brown-hummingbird-selective-focus-photography-1133957/" alt=""></img>
                <span>photo_212</span>
              </div>
              <img src="./download.png" alt="" className="icon"></img>
            </div> */}
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://www.pexels.com/photo/brown-hummingbird-selective-focus-photography-1133957/" alt=""></img>
                <span>photo_212</span>
              </div>
              <img src="./download.png" alt="" className="icon"></img>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span> Shared Files  </span>
            <img src='./arrowUp.png' alt=" " />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut()}>Logout </button>
      </div>
    </div>
  )
}

export default Detail
