import React, {useReducer} from 'react';

const App = () => {
    const reducer = (state,action) => {
      switch (action.type) {
          case "inc":
              return{...state,count:state.count + 1}
          case "dec":
              return {...state,count:state.count - 1}
          case "res":
              return {...state,count:state.count = 0}
      }
    }


    const [state, dispath] = useReducer(reducer, {count:0, count1:0, count2:0})
    return (
        <div>
            <div>
                {state.count}
                <button onClick={()=>dispath({type:"inc"})}>inc</button>
                <button onClick={()=>dispath({type:"dec"})}>dec</button>
                <button onClick={()=>dispath({type:"res"})}>res</button>
            </div>
        </div>
    );
};

export default App;