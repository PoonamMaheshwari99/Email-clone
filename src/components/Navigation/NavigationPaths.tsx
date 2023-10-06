import {  NavLink } from 'react-router-dom';
import  './NavigationPaths.css';
import MOCK_DATA from '../../local-json/MOCK_DATA.json';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSetCounter, selectSetS, selectSetT } from '../counterSlice';
import List from '../List';
import EmailClass from '../EmailClass';


const  NavigationPaths:React.FC<{Icon:any,title:string}>= (props) =>{
   const counter = useSelector(selectSetCounter);
   console.log(counter);

   const counterS = useSelector(selectSetS);
   const counterT = useSelector(selectSetT);

   const [data,setData]=useState<EmailClass[]>([]);
   
   const fetchHandler=async()=>{
    
    const response = await fetch('http://localhost:3000/emails');
        const resdata = await response.json();
        setData(resdata);
   
   }
   useEffect(()=>{
    fetchHandler();
  },[])

    return(
    
        
       
        <div className='NavPathsContainer'>
              { (props.title === 'Inbox') ? (<NavLink to='/' style={({ isActive }) => ({
                                              color: isActive ? 'blue':'',
                                              })} > 
               <div className='NavigationPaths'>
               <props.Icon/>
               <h4>{props.title}</h4> 
               
            <p>{(data.filter(data1=> {return( data1.type==="Inbox")&& (data1.isDeleted===false)}).length + counter)}</p>
               </div>
               </NavLink> ):
            
            
                (props.title==='Sent' )?( <NavLink  to='/sent'style={({ isActive }) => ({
                color: isActive ? 'blue':'',
                })}>
                <div className='NavigationPaths'>
               <props.Icon/>
               <h4>{props.title}</h4> 
               
               <p>{(data.filter(data1=> {return( data1.type==="Sent")&& (data1.isDeleted===false)}).length + counterS)}</p>
              
               </div>
                </NavLink>):
              
              
               <NavLink to='/trash'style={({ isActive }) => ({
                color: isActive ? 'blue':'',
                })}>
                <div className='NavigationPaths'>
               <props.Icon/>
               <h4>{props.title}</h4> 
               
               <p>{(data.filter(data1=> {return(data1.isDeleted===true)}).length - counter - counterS + counterT )}</p>
               </div>
              </NavLink>
         
         }
               
               </div>

           



        
    )
}
export default NavigationPaths;