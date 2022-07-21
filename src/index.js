import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
  posts: [
   {id: 1, message: 'first message'},
   {id: 2, message: 'second message'}
],
users: [
 {id: 1, name: 'Jenya'},
 {id: 2, name: 'Jone'},
 {id: 3, name: 'Jinna'},
 {id: 4, name: 'Jenifer'},
 {id: 5, name: 'Janna'},
],
messagesData: [
 { message: 'message Jenya'},
 { message: 'message Jone'},
 { message: 'message Jinna'},
 { message: 'message Jenifer'},
 { message: 'message Janna'},
]
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App props={data} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
