import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import Users from "./components/user/Users";
import userService from "./components/srvice/user.serv";

function App() {
  const [users, setUser] = useState([])
  useEffect(()=>{
    userService.getAll()
        .then(value => setUser(value))
    console.log(users)
  },[])

  const [form, setForm] = useState({name:'',username:'',email:''})
  const formHand = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }

  const [filt,setFlit] = useState([])

  const getFilter = (data) => {
    let filterA = [...users]
    if(data.name){
      filterA = filterA.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
    }
    if(data.username){
      filterA = filterA.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
    }
    if(data.email){
      filterA = filterA.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
    }
    setFlit(filterA)
  }


  const func = (e) => {
    e.preventDefault()
    getFilter(form)
  }

  return (
    <div className="App">
      <form onSubmit={func}>
        <label >Name:<input type="text"  name={'name'}  onChange={formHand}/></label>
        <label >UserName:<input type="text" name={'username'} onChange={formHand} /></label>
        <label >Email:<input type="text" name={'email'}  onChange={formHand} /></label>
        <button >Sort</button>
      </form>
      <Users users={filt}/>
    </div>

  );
}

export default App;
