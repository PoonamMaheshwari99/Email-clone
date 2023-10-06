
import Navigation from './components/Navigation/Navigation';
import {Routes,Route} from 'react-router-dom';

import React from 'react';
import Header from './components/Header/Header';
import  './index.css';
import EmailList from './components/EmailList';
import Sent from './components/Sent';
import Trash from './components/Trash';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './components/mailSlice';
import NewInbox from './components/Navigation/NewInbox';


function App() {
const isMessageOpen= useSelector(selectSendMessageIsOpen);
console.log(isMessageOpen);

  return (
    <div>
      <Header/>
      <div className="container">
      <Navigation />
      
      
      <Routes>
      <Route path='/'
        element={<EmailList/>}>

        </Route>
      
        <Route path='/sent'
        element={<Sent/>}>

        </Route>
        <Route path='/trash'
        element={<Trash/>}>

        </Route>
  </Routes>
      
      </div>
   {
    isMessageOpen && <NewInbox/>
   }
     
   
   </div>
  );
}

export default App;
