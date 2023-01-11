import React , {Component} from 'react';
import './index.css'
class CountApp extends Component {
      state = {count:0};
      onDecrement=()=>{
        this.setState((prevState)=>({count:prevState.count - 1}))
      }
      onIncrement=()=>{
        this.setState((prevState)=>({count:prevState.count + 1}))
      }
    render() {
        return (
            <div className='app-container'>
                <div className = 'content-container'>
                    <h1 className='heading'>Counter</h1>
                    <p className='counter'>{this.state.count}</p>
                    <div>
                        <button className='decrease-button' type='button' onClick={this.onDecrement}>Decrement</button>
                        <button className='increase-button' type='button' onClick={this.onIncrement}>Increment</button>
                    </div>
                </div>
            </div>
          );
        

    }
}
export default CountApp;