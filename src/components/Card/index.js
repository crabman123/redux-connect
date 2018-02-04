import React from "react";
import "./index.scss";
var imgsrc = require("@/assets/logo.png"); //模块化形式资源

import { Switch } from 'antd';
import { Carousel } from 'antd';

class Card extends React.Component{
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return <div>
			
			card
			<img src={imgsrc} />

			 <Switch defaultChecked={false} onChange={this.onchange.bind(this)} />
			   <Carousel vertical>
			    <div><h3>1</h3></div>
			    <div><h3>2</h3></div>
			    <div><h3>3</h3></div>
			    <div><h3>4</h3></div>
			  </Carousel>
		</div>
	}

	onchange(value){
		console.log(value);
	}
}

export default Card;