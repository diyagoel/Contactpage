import './App.css';
import Header from "./Header";
import AddContact1 from "./AddContact1";
import ContactList1 from './ContactList1';

function App() {
  const contacts = [
    {
      id:"1",
      "name":"Diya",
      "email":"diya@gmail.com"
    },
    {
      id:"2",
      "name":"Pooja",
      "email":"pjain@gmail.com"
    },
  ];
  return (
    <div className='ui container'>
      <Header />
      <AddContact1 />
      <ContactList1 contacts={contacts}/>
    </div>
  );
}

export default App;
