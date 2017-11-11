const express=require('express'),
	axios=require('axios'),
	cheerio=require('cheerio');


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/doit',(req,res)=>{
	console.log(req.query)
	let url=req.query.link
	axios.get(url).then(
		
		(result)=>{
			console.log(result.response)
		},
		(err)=>{
			console.log(err)
		})
})


app.listen(3030, (err)=>{
	console.log( "started on port 3030" )
})

