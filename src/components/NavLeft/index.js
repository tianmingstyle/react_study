import React from 'react'
import { Menu, Icon } from 'antd'
import './index.less'
import MenuConfig from '../../config/menuConfig'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class NavLeft extends React.Component{
	componentWillMount(){
		const renderMenuNode = this.renderMenu(MenuConfig);
		this.setState({
			renderMenuNode
		})
	}
	//菜单渲染
	renderMenu =(data) => {
		return (data.map((item)=>{
			if(item.childern){
				return (<SubMenu key={item.key} title={item.title}>
						{this.renderMenu(item.childern)}
						</SubMenu>
				)
									
			}
			return (<Menu.Item key={item.key} title={item.title}>{item.title}</Menu.Item>)
			
		}))
	}

	render(){
		return(
				<div>
					<div className="logo">
						<img src='/asserts/ant-design.svg' alt='' />
						<h1>Imooc MS</h1>
					</div>
					<Menu theme="dark" mode="inline">
						{this.state.renderMenuNode}
						<SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Four</span></span>}>
				            <Menu.Item key="7">Option 7</Menu.Item>
				            <Menu.Item key="8">Option 8</Menu.Item>
				            <Menu.Item key="9">Option 9</Menu.Item>
				            <Menu.Item key="10">Option 10</Menu.Item>
				         </SubMenu>
					</Menu>
				</div>
			)
	}
}