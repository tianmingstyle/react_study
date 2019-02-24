import React from 'react';


class TodoItem extends React.Component {
	//子组件想要和父组件通信，是通过调用父组件的方法来实现的
	Itemdel(){
		this.props.delete(this.props.index)
		console.log(this.props.index)
	}
	render(){
		return(
				<div onClick={this.Itemdel.bind(this)}>{this.props.content}</div>
			)
		
	}
		
}


export default TodoItem;