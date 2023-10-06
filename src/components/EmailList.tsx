
import './EmailList.css';

import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from "@material-ui/core";
import  ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import  ChevronRightIcon from "@material-ui/icons/ChevronRight";
import './Pagination.css';
import EmailMain from "./EmailMain";

import {  useEffect, useState } from "react";
import React from 'react';


import EmailClass from './EmailClass';
import { useDispatch, useSelector } from 'react-redux';
import { Message, selectSendonchange } from './onchangeSlice';

const EmailList = () =>{
  const[data,setData] = useState<EmailClass[]>([]);
  const[searchData,setSearchData] = useState<EmailClass[]>([]);
  const[filterVal,setFilterVal] = useState('');
  
  
   const status = useSelector(selectSendonchange);

   console.log(status);
   
   const dispatch = useDispatch();
  

  const [pageNumber, setPageNumber] =  useState<number>(0);

const perPage = 20;
const pageVisited = perPage * pageNumber;
const[totalPages,setTotalPages]=useState(0);
//const totalPages = MOCK_DATA.emails.filter(MOCK_DATA=> {return( MOCK_DATA.type==="Inbox")&& (MOCK_DATA.isDeleted===false)}).length;






  const fetchHandler=async()=>{
    
    
    const response = await fetch('http://localhost:3000/emails');
        const resdata = await response.json();
        
        setTotalPages(resdata.filter((resdata1: { type: string; isDeleted: boolean; })=> {return( resdata1.type==="Inbox")&& (resdata1.isDeleted===false)}).length);

    const transformeddata:EmailClass[] = resdata.filter((data1: any)=> {return( data1.type==="Inbox")&& (data1.isDeleted===false)})
    .slice(pageVisited, pageVisited + perPage)
    .map((Email: { id: any; to: any; from: any; isMailedRead: any; isDeleted: any; type: any; description: any; }) => {
     
      
      return {
        
       

        id:Email.id,
        to:Email.to,
        from:Email.from,
        isMailedRead:Email.isMailedRead,
        isDeleted:Email.isDeleted,
        type:Email.type,
        description:Email.description,
        

        
        
      }
    
   
    
    
    });
    setData(transformeddata);
    const transformeddata1:EmailClass[] = resdata.filter((data1: any)=> {return( data1.type==="Inbox")&& (data1.isDeleted===false)})
    
    .map((Email: { id: any; to: any; from: any; isMailedRead: any; isDeleted: any; type: any; description: any; }) => {
     
      
      return {
        
        id:Email.id,
        to:Email.to,
        from:Email.from,
        isMailedRead:Email.isMailedRead,
        isDeleted:Email.isDeleted,
        type:Email.type,
        description:Email.description,
        

        
        
      }
    
    
    
    
    });
    setSearchData(transformeddata1);
    
 
  

  }   
  useEffect(()=>{
    fetchHandler();
   
    
  },[])
  const fetchHandlerRerender = () =>{
    fetchHandler();
    
    dispatch(Message());
  }
  

  const onChangeLeft = () => {
    if ( pageVisited > 0 ) {
   setPageNumber ( pageNumber - 1 );
   
   fetchHandler();
   }
   };

   const onChangeRight = () => {
        if ( totalPages > pageVisited + perPage ) {
        setPageNumber ( pageNumber + 1 );
        fetchHandler();
          
        }
       };
      
     const handleSearch= (e:any) => {
      
        if(e.target.value === ''){
          setData(searchData)
        }else{
          const filterResult = searchData.filter(item => item.from.toLowerCase().includes(e.target.value.toLowerCase()));
         
            setData(filterResult)
          
          
        }
        setFilterVal(e.target.value)
      }
    
    

     
      

  return(

    <div className="emaillist">
      
            
      <div className="Pagination"> 
        <div className="Paginationleft">
               <IconButton>
                    <SearchIcon></SearchIcon>
                </IconButton>
               <input type="search" placeholder='search mail' value={filterVal} onInput={(e)=>handleSearch(e)} />
        
        </div>

        <div className="Paginationright">
            <p> { pageVisited + 1 } - { pageVisited + perPage } of { totalPages } </p>
            <IconButton onClick={ onChangeLeft }>
                <ChevronLeftIcon />
            </IconButton>

            <IconButton onClick={ onChangeRight }>
                <ChevronRightIcon />
            </IconButton>
        </div>
        
        </div>
        
       { status &&  fetchHandlerRerender()  }
       
       
        
        
       
       
        
      {/*<button className="btn" onClick={fetchHandler}>Recieve Inbox</button>*/}
      
     
      <EmailMain  data={data}  />
      
     
     
      

      
      
    </div>
  )
  }

  export default EmailList;





