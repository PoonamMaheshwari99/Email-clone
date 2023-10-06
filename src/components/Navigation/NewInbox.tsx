import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../mailSlice';
import './NewInbox.css';
import MOCK_DATA from '../../local-json/MOCK_DATA.json';
import { IncrementS } from '../counterSlice';

const NewInbox = () =>{
const[name,setName]= useState('');
const[subject,setSubject]=useState('');

   
const dispatch =useDispatch();

   const postHandle= async()=>{
    const Mail = {
        to: name, 
        from:"Lisa",
       isMailRead: false,
       isDeleted:false,
       type:"Sent",
       description:subject,
    }
  

    
    const response = await fetch('http://localhost:3000/emails',{
        method: 'POST',
        body:JSON.stringify(Mail),
        headers:
        {
            'Content-Type':'application/json'
        }


    });
    const resdata = response.json;

    
    
    dispatch(IncrementS());
    
            
    setName('')
      setSubject('')
      alert('Email sent successfully');
      
   }

    return (
        <div className="newInbox">
            <div className="Top">
                <div className="TopLeft">
                    <span>New Message</span>
                </div>
                <div className="TopRight">
                    <CloseIcon onClick={()=>dispatch(closeSendMessage())}/>
                </div>
            </div>
            <div className="Middle">
                <div className='form'>
                    <input type="text"
                    id="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="To"/>


                    <input type="text"
                    id="subject"
                    value={subject}
                    onChange={(e)=>setSubject(e.target.value)}
                    placeholder='Subject'/>

                    <textarea rows={20} ></textarea>
                </div>

            </div>
            <div className="Bottom">
                <button type='submit' onClick={postHandle}>
                    Send
                </button>

            </div>
        </div>
    );
}
export default NewInbox;