import React from 'react';

export default class Child extends React.Component{
	// constructor(props){
	// 	super(props);

	// }
	componentWillMount(){
		console.log('will mount')
	}
	componentDidMount(){
		console.log('did mount')
	}

	componentWillUnmount(){
		console.log('Will Unmount')
	}

	componentWillReceiveProps(newProps){
		console.log('newProps from father:'+newProps.name)
	}

	componentWillUpdate(){
		console.log('will update')
	}

	componentDidUpdate(){
		console.log('updating')
	}

	render(){
		return(
				<div>
					<p>{this.props.name}</p>
				</div>
			)
	}
}