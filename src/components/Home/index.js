import React from "react";
import "./index.scss";
import axios from "axios"; //cnpm install .....

import ReactSwipe from 'react-swipe';

class Home extends React.Component{
	constructor(){
		super();
		this.state={
			looplist:[]
		}
	}

	componentWillMount() {
	    axios.get("/v4/api/billboard/home").then(res=>{
	    	console.log(res.data);
	    	this.setState({
	    		looplist:res.data.data.billboards
	    	})
	    })
	}

	render(){
		return <div>
			
			 <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 2000}} key={this.state.looplist.length}>
                {
                	this.state.looplist.map(item=>
                		<img src={item.imageUrl} key={item.id}/>
                	)
                }
            </ReactSwipe>

		</div>
	}
}

export default Home;