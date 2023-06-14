import React from "react";
import user from '../imagess/user.png';

const ContactCard1 = (props)=>{
    const {id,name,email} = props.contact;
    return(
        <div className="item">
         <img className="ui avatar image" src={user} alt="user" />   
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline icon" style={{color:"red", marginTop:"10px", align:"right"}}></i>
        </div>
    );
};

export default ContactCard1