import React, { Component } from "react"
import vis from "vis"

class VisTry extends Component{
	constructor(){
		super()
		this.nodes= new vis.DataSet([
			{id:1, label:"Node 1"},
			{id:2, label:"Node 2"},
			{id:3, label:"Node 3"},
			{id:4, label:"Node 4"},
			{id:5, label:"Node 5"},
			{id:6, label:"Node 6"},
			{id:7, label:"Node 7"},
		])
		this.edges=new vis.DataSet([
			{from:1, to:2},
			{from:1, to:3},
			{from:2, to:4},
			{from:2, to:5},
		])
		this.container = document.getElementById('net');

		this.data ={
			nodes:this.nodes,
			edges:this.edges
		}
		this.options={}

	}

	componentWillReceiveProps(props){
		this.nodes=props.nodes;
		this.edges=props.edges;
	}

	componentDidUpdate(){
		this.network=new vis.Network(this.container, this.data, this.options)
	}
	render(){
		return(
			<div/>
		)
	}
}

export default VisTry
