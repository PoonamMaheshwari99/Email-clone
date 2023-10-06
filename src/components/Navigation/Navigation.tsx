import './Navigation.css';


import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'

import NavigationPaths from './NavigationPaths';
import InboxIcon from '@material-ui/icons/Inbox';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../mailSlice';



const Navigation=()=>{
const dispatch = useDispatch();
  

 
    return(
      <div className="SideNav">
        <Button startIcon ={<AddIcon/>} className="newMail" onClick={()=>dispatch(openSendMessage())}>New Mail</Button>
       <NavigationPaths Icon={InboxIcon} title='Inbox'  />
      
      
       <NavigationPaths Icon={SendIcon} title='Sent'  />
    <NavigationPaths Icon={DeleteIcon} title='Trash'  /> 
        

    </div>
            
    

        
       
    )
}
export default Navigation;