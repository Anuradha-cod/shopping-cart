import React, { Component } from 'react'
import Counter1 from './Counter1'

 class Counter extends Component {
     arr =[1, 2, 3,4];
    render() {
        return (
            <div>
                {this.arr.map((e, i) =>
              
                <Counter1 />
                )}
            </div>
        )
    }
}
export default  Counter;
