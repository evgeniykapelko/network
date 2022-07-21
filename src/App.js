import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import News from './components/Profile/News';
import Messages from './components/Profile/Messages';
import Settings from './components/Profile/Settings';
import Music from './components/Profile/Music';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  debugger
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Routes>
        <Route path='profile' element={<Profile posts={props.props.posts}/>}/>
        <Route path='news' element={<News/>}/>

        <Route /*exact*/ path='dialog' element={ <Dialogs messageData={props.props.messagesData} userData={props.props.users}/>}/>

        <Route path='settings' element={ <Settings/>}/>

      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
