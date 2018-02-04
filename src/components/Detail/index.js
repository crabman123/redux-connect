import React from "react";
import "./index.scss";
import { connect } from "react-redux";

class Detail extends React.Component{
	constructor(){
		super();
		this.state={
			filminfo:null
		}
	}


	componentWillMount() {
	    console.log(this.props.match.params.kerwinid);

	    axios.get(`/v4/api/film/${this.props.match.params.kerwinid}?__t=1511337332656`).then(res=>{
	    	console.log(res.data);
	    	this.setState({
	    		filminfo:res.data.data.film
	    		// this.props.event();
	    		// this.props.e()
	    		
	    	})

	    	this.props.changeTitle(res.data.data.film.name);
	    })
	}

	render(){
		return <div>
			{
				this.state.filminfo?
				<div>
					<img src={this.state.filminfo.cover.origin} />
					<h2>{this.state.filminfo.name}</h2>
					<p>{this.state.filminfo.synopsis}</p>
				</div>
				:null
			}
			
		</div>
	}
}



export default connect(
		null,

		{
			changeTitle:(name)=>{
				//自动进行dispatch 到 reducer
				return {
					type:"changeTitleReducer",
					payload:name
				}
			}
		}		

	)(Detail);

/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props  this.props.name;
	
	第二个参数-- map methods to props this.props.method();
 */


