import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'></img>
            </div>
            Main content
            <div className={s.descriptionBlog}>
            ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;