import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App({name,age}) {


  return (
    <>
      <h1>Hello World!</h1>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
    </>
  )
}


// function Jan(){
//   return (
//     <>
//        <h1>hello</h1>
//     </>
//   )
// }

// class Jan1 extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>This is Class component</h1>
//         <p>Name:{this.props.name}</p>
//         <p>Age:{this.props.age}</p>
//       </div>
//     )
//   }
// }



class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
    };
  }

  handle=()=>{
    this.setState({
      count:this.state.count+1,
    });
  };
  render(){
    return(
      <>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handle}>Increment</button>
      </>
    )
  }
}

export default App
export {Counter}
