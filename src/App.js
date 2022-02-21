import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {useForm} from "react-hook-form";

function App() {

  // let [info, setInfo] = useState({username :'',pass:''})

  // const inform = (e) => {
  //   setInfo({...info,[e.target.name]: e.target.value})
  // }

// const submit = (e) => {
//   e.preventDefault()
// console.log(info)
// }

const {register, handleSubmit} =  useForm()

    const onSub = (data) => {
      console.log(data)
    }


  return (
    <div className="App">
      {/*<form onSubmit={submit}>*/}
        {/*<input type="text" name={'username'} value={info.username} onChange={inform}/>*/}
        {/*<input type="text" name={'pass'} value={info.pass} onChange={inform} />*/}
        {/*<button>sdfsd</button>*/}
      {/*</form>*/}
      <form  onSubmit={handleSubmit(onSub)}>
          <input type="text" {...register('name')} defaultValue={''}/>
          <input type="text" {...register('age')} defaultValue={''}/>
          <button>asdasd</button>
      </form>
    </div>
  );
}

export default App;
