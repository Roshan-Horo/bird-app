import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faEllipsis, faHashtag, faRetweet, faArrowUpFromBracket, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faBell, faComment, faEnvelope, faHeart, faImage, faUser } from '@fortawesome/free-regular-svg-icons'

const Feed = ({ data }) => {
  const [isContentImg, setIsContentImg] = useState(data.hasOwnProperty('contentImg') ? true : false)

  return (
    <>
      <div className="post-feed">

        <div className="feed-profile-div">
          <img src={data.user.profilePic}
            alt="profile picture" />
        </div>

        <div className="feed-body">
          <div className="feed-title-div">
            <div className="feed-profile-info"><span className="profile-name">{data.user.name}</span> @<span
              className="profile-username">{data.user.username}</span> . 19h</div>
            <div className="feed-title">{data.content}</div>
          </div>
          {
            isContentImg &&
            <div className="content-img">
              <img src={data.contentImg} alt="content picture" />
            </div>
          }
          <div className="feed-reaction">
            <div className="feed-action">
              <div className="reaction-icon"><FontAwesomeIcon icon={faComment} /></div>
              <div className="reaction-num">3</div>
            </div>
            <div className="feed-action">
              <div className="reaction-icon"><FontAwesomeIcon icon={faRetweet} /></div>
              <div className="reaction-num">3</div>
            </div>
            <div className="feed-action">
              <div className="reaction-icon"><FontAwesomeIcon icon={faHeart} /></div>
              <div className="reaction-num">3</div>
            </div>
            <div className="feed-action">
              <div className="reaction-icon"><FontAwesomeIcon icon={faArrowUpFromBracket} /></div>
              <div className="reaction-num">3</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Feed