import React, { Component } from 'react'
import Counter from './Counter'
import {FaPlusCircle, FaMinusCircle,FaArchive} from 'react-icons/fa';

 class Counter1 extends Component {
     state= {
       count: 0
     };

     handleClick =() =>{
        this.setState({count: this.state.count +1})
      };
      
      handleRemove = ()=>{
        this.setState({count: this.state.count -1})
      };
      handleReset =() =>{
        this.setState({count: 0})
      }


    render() {
        return (
            <div>
                
                <span className="result">{this.state.count}</span>
                <button className="plus" onClick={this.handleClick }><FaPlusCircle/></button>
                <button className="remove" onClick={this.handleRemove}><FaMinusCircle/></button>
                <button className="reset" onClick={this.handleReset}><FaArchive /></button>
               
            </div>
        )
    }
}

export default Counter1;