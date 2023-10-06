
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import React, { useState } from 'react';

const Header = () =>{
    const[filteredData,setFilteredData] = useState([]);

   /* const handleSearch = (e: { target: { value: any; }; }) =>{
        const searchWord = e.target.value;
        const newFilter = data.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        })
    }*/
    return(
        <div className="header">
            <div className='header-left'>
           <IconButton data-testid="email-icon">
                <EmailIcon></EmailIcon>
            </IconButton>
            

           
            <h2>MAILBOX</h2>
            </div>
         
         {/*   <div className='header-right'>
                <IconButton>
                    <SearchIcon></SearchIcon>
                </IconButton>
                <input type="search" placeholder='search mail'/> onChange={handleSearch}/>
                

            </div> */}
            
        </div>
    )
}
export default Header;