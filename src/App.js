import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import d3 from "d3"
import vis from "vis"
import VisTry from "./visTry"

import request from 'request'
import axios from "axios"
import $ from "cheerio"

class App extends Component {
	componentWillMount(){
		axios.get()
	}

	handleSubmit=(e)=>{
		e.preventDefault()
		this.fillNetwork(e.nativeEvent.target.children.profile.value)
	}

	fillNetwork=(link)=>{
		//request.mode="no-cors"
		//request.get(link,(err,data)=>{
		//if (err){
		//console.log(err)
		//return
		//}
		//console.log(data)
		//})
		
		axios.get("/doit/?link="+link).then(
				(result)=>{
					console.log(result)
			},
			(err)=>{
				console.log(err)
			}
			)
	
	}

	render() {
		return (
			<div>
				<form onSubmit={(e)=>{this.handleSubmit(e)}}>
					<input type="text" name="profile" />
					<input type="submit"/>
				</form>
				<VisTry />
			</div>
		);
	}
}

export default App;
