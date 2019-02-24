import React from 'react'
import { Menu, Icon } from 'antd'
import './index.less'
import menuConfig from '../../config/menuConfig'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class NalLeft extends React.Component{
	componentWillMount(){
		const renderMenuNode = this.renderMenu(menuConfig);
		this.setState({
			renderMenuNode:renderMenuNode
		})
	}
	//菜单渲染
	renderMenu =(data) => {
		return data.map((item)=>{
			if(item.childern){
				return (<SubMenu key={item.key} title={item.title}>
					{this.renderMenu(item.childern)}
					</SubMenu>)
									
			}else{
				return (<SubMenu key={item.key} title={item.title}>{item.title}</SubMenu>)
			}
		})
	}

	render(){
		return(
				<div>
					<div className="logo">
						<img src='/asserts/ant-design.svg' alt='' />
						<h1>Imooc MS</h1>
					</div>
					<Menu theme="dark">
						{this.state.renderMenuNode}

					</Menu>
				</div>
			)
	}
}