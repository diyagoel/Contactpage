import React from "react";
import ContactCard1 from "./ContactCard1";

const ContactList1=(props)=>{
    const renderContactList1 = props.contacts.map((contact)=>{
        return(
            <ContactCard1 contact={contact}></ContactCard1>
        );
    });

    return <div className="ui celled list">{renderContactList1}</div>  
};

export default ContactList1