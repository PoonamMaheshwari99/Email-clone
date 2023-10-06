import React from "react";
import EmailBody from "./EmailBody";
import EmailClass from "./EmailClass";
import List from "./List";
const EmailMain:React.FC<{data:EmailClass[]}> = (props) =>{
    return(
        <div>
             <ul >
      {props.data.map((email) => (
        
        <EmailBody
        id={email.id}
        to={email.to}
        from={email.from}
        isMailedRead={email.isMailedRead}
        isDeleted={email.isDeleted}
        type={email.type}
        description={email.description}
          
          
          
        />
        ))}
        
    </ul>

        </div>
    )
}
export default EmailMain;


