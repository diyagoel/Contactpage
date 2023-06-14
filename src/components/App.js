import React, {useState,useEffect} from 'react';
import './App.css';
import Header from "./Header";
import AddContact1 from "./AddContact1";
import ContactList1 from './ContactList1';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,contact]);
  };

  useEffect(()=>{
    const retrieveContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(retrieveContacts) setContacts(JSON.parse(retrieveContacts));
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact1 addContactHandler={addContactHandler}/>
      <ContactList1 contacts={contacts}/>
    </div>
  );
}

export default App;
