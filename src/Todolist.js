import React, { Component } from 'react';
import TodoItem from './TodoItem'


class Todolist extends Component {
	constructor(props){
		super(props);
		this.state={
			list:[				
			],
			inputValue: ''
		}
	}

	handleItemClick(index){
		const list=[...this.state.list];//???
		list.splice(index,1);
		this.setState({
			list:list
		})
		//console.log(index)
	}

	handleInputCg(e){
		this.setState({
			inputValue:e.target.value
		})
		// console.log(e.target.value)
	}

	handleBtnClick(){
		this.setState({
			list:[...this.state.list,this.state.inputValue],//...是展开符。相当于'hello world!','learn react'
			inputValue:''
		})
		// this.state.list.push('hello world...');
		
	}

	handleDel(index){
		const list=[...this.state.list];
		list.splice(index,1);
		this.setState({
			list:list
		})
		//console.log('fuzhujian')
	}

//父组件通过属性向子组件传递参数
//子组件通过props接收父组件传过来的参数
  render() {
    return (
    	<div>
    		<div>
		        <input value={this.state.inputValue} onChange={this.handleInputCg.bind(this)}/>
		        <button onClick={this.handleBtnClick.bind(this)}>add </button>
      		</div>
      		{
      			this.state.list.map((item, index) => {
      				
      				return <TodoItem key={index} index={index} content={item} delete={this.handleDel.bind(this)} />
      				//return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
      			})
      		}
		</div>      
     
    );
  }
}

export default Todolist;
