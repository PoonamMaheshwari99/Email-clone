import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import React, { useEffect, useState } from 'react';
import './EmailBody.css';
import MOCK_DATA from '../local-json/MOCK_DATA.json';
import { useDispatch } from 'react-redux';
import { Decrement, DecrementS, DecrementT } from './counterSlice';
import EmailList from './EmailList';
import { statusonchange } from './onchangeSlice';


const EmailBody:React.FC<{id:number,to:string,from:string,isMailedRead:boolean,
    isDeleted:boolean,type:string,description:string}> = (props) => {
    

    const dispatch =useDispatch();
    const dispatch1 = useDispatch();
    const deleteHandle = async(id:number,to:string,from:string,isMailedRead:boolean,
        isDeleted:boolean,type:string,description:string) =>{
            alert('Selected Item will be deleted');
            
            if(isDeleted===false){
            isDeleted=!isDeleted;
          let item={id,to,from,isMailedRead,isDeleted,type,description};
          fetch(`http://localhost:3000/emails/${id}`,{
            method: "PUT",
            headers:{
                Accept: "applocation/json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify(item),
        }).then((result)=>{
            result.json().then((response)=>{
                console.warn(response);
                
            });

        });
    }
   
        //alert('Selected field would be deleted')
        const response = await fetch(`http://localhost:3000/emails/${id}`);
        const res= await response.json();

        if(res.type==="Inbox" && res.isDeleted===false){
            dispatch(Decrement())
            dispatch1(statusonchange())
            
        }
        else if(res.type==="Sent" && res.isDeleted===false){
            dispatch(DecrementS())
            dispatch1(statusonchange())
        }
           
        else{

        
     fetch(`http://localhost:3000/emails/${id}`,
        {
            method:'DELETE'
        }).then((response)=>{
            response.json().then((resp)=>{
                console.warn(resp);
            })
    })

    dispatch(DecrementT())
    dispatch1(statusonchange())
}
}

    /*const deleteHandle=(id:number)=>{
        setData(true);
        if(MOCK_DATA.emails[id-1].type=== "Inbox" && MOCK_DATA.emails[id-1].isDeleted===false){
            dispatch(Decrement())
            MOCK_DATA.emails[id-1].isDeleted= true;
        }
        else if(MOCK_DATA.emails[id-1].type === "Sent" && MOCK_DATA.emails[id-1].isDeleted===false){

            dispatch(DecrementS())
            MOCK_DATA.emails[id-1].isDeleted= true;
        }
        else {
            dispatch(DecrementT())
            MOCK_DATA.emails[id-1].isDeleted= false;
            MOCK_DATA.emails[id-1].type="Permanently Deleted";
        }
    
      
   
    }*/
   
    const readHandle= async(id:number,to:string,from:string,isMailedRead:boolean,
        isDeleted:boolean,type:string,description:string)=>{
        isMailedRead=!isMailedRead;
        
        let item={id,to,from,isMailedRead,isDeleted,type,description};
        fetch(`http://localhost:3000/emails/${id}`,{
            method: "PUT",
            headers:{
                Accept: "applocation/json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify(item),
        }).then((result)=>{
            result.json().then((response)=>{
                console.warn(response);
                
            });

        });
        dispatch1(statusonchange())

        
        }
   
      
       /* const iconHandle = (id:number)=>{
        MOCK_DATA.emails[id-1].isMailedRead = false;

    }*/
    
    return(
        <div className="emailbody">
            <div className="emailbodyleft" onClick = {()=> readHandle(props.id,props.to,props.from,props.isMailedRead,
                    props.isDeleted,props.type,props.description
                )} >
                { (props.isMailedRead === false) ?
                <IconButton >
                    <CircleOutlinedIcon/>
                </IconButton> :
                <IconButton >
                    <CheckCircleOutlineOutlinedIcon/>
                </IconButton>
                }
                <div onClick={()=> readHandle(props.id,props.to,props.from,props.isMailedRead,
                    props.isDeleted,props.type,props.description
                    )} >
                        {(props.type==="Inbox")?
                 (props.isMailedRead=== false) ?
                <h4>{props.from}</h4> :
                <p>{props.from}</p>
                :
                
                    (props.isMailedRead=== false) ?
                    <h4>{props.to}</h4> :
                    <p>{props.to}</p> 
                }
            
                </div>

            </div>
            <div className="emailbodymiddle" onClick = {()=> readHandle(props.id,props.to,props.from,props.isMailedRead,
                    props.isDeleted,props.type,props.description)}>
            { (props.isMailedRead === false)?

               <p><b>{props.description}</b></p>:
            
               
                <p>{props.description}</p>
               
            }

            </div>
            <div className="emailbodyright">
            <IconButton>
                <ArchiveIcon/>
                </IconButton>
                <IconButton onClick = {()=> deleteHandle(props.id,props.to,props.from,props.isMailedRead,
                    props.isDeleted,props.type,props.description)}>
                <DeleteIcon />
                </IconButton>


            </div>
        </div>
    );
}
export default EmailBody;