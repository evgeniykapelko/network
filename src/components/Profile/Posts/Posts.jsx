import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post.jsx'

const newPostElement = React.createRef();

const addPost = () => {
    let text = newPostElement.current.value;
}

const Posts = (props) => {

const result = props.posts.map((elem) => <Post message={elem.message}/>);

    return (
        <div className={classes.posts}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div>
                {result}
            </div>
        </div>
    )
}

export default Posts;