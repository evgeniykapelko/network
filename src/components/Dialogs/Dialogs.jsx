import React from 'react';
import classes from './Dialogs.module.css';
import {
    NavLink
  } from "react-router-dom";

const DialogItem = (props) => {

    const path = "/dialogs/" + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path} >{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    return (
        <div className={classes.message}>
                {props.message}
            </div>
    )
}
const Dialogs = (props) => {

    const resultDialogItem = props.userData.map((elem) => <DialogItem id={elem.id} name={elem.name}/>);
    const resultMessages = props.messageData.map((elem) => <Messages message={elem.message}/>);

    return (
        <div className={classes.dialogs}>
            { <div className={classes.dialogsItems}>
                {resultDialogItem}
            </div> }
            <div className={classes.messages}>
                {resultMessages}
            </div>
        </div>
    )
}

export default Dialogs;
