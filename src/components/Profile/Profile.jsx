import React from 'react';
import Post from './Posts/Post/Post';
import Posts from './Posts/Posts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <Posts posts={props.posts}/>
        </div>
    )
}

export default Profile;