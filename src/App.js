import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter'
import counter from './counter';

class App extends Component {

  constructor(props)
  {
    super(props)
    this.state={
      todos:[]
    }
    this.handleChange=this.handleChange.bind(this)
  }

   handleChange(event){
    
    
  if(event.key === "Enter")
  {
    console.log("happy45")
     const data=this.state.todos
     data.push(event.target.value)
    this.setState({
      todos:data
    })
    
    console.log(this.state.todos)
  }
}
  render()
  {
  return (
    <div className="App">
      <input type="text" placeholder="ToDo's" onKeyPress={this.handleChange}/>
      <ul>
          <div>
  {this.state.todos.map((items,i) => <li key={i}>{items}</li> ) }
  </div>
      </ul>
      <Counter/>
    </div>
  );
  }
}

export default App;
