import React from 'react'
import "./userInfo.css"
const UserInfo = () => {
    return (
        <div className="userInfo">
            <div className="user">
                <img src="./avatar.png" alt="temp" />
                <h2>John Doe</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt='more'></img>
                <img src="./video.png" alt='video'></img>
                <img src="./edit.png" alt='edit'></img>
            </div>
        </div>
    )
}

export default UserInfo
