import React from 'react';
import Child from './Child';
//import {Button} from 'antd';
import {Button} from 'antd';
//import 'antd/dist/antd.css';
//import './index.less'

export default class Life extends React.Component{
	constructor(props){
		super(props);
		this.state={
			count:0,
		}
	}

	handleClick0=() => {
		console.log('i am clicked.');
		this.setState({
			count:this.state.count + 1
		})
	}

	handleClick(){
		console.log('i am clicked.');
		this.setState({
			count:this.state.count + 1
		})
	}

	render(){
		return(
				<div className="content">
					<p>React的生命周期介绍</p>
					<Button onClick={this.handleClick0}>点我一下</Button>
					<button onClick={this.handleClick0}>点我一下</button>
					<button onClick={this.handleClick.bind(this)}>点我一下</button>
					<div>{this.state.count}</div>
					<Child name={this.state.count}></Child>
				</div>
				
			)
	}
}