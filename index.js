const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/api", (req,res, next)=>{
	//res.json('Welcome to Firebase function with Node Express')
	res.send('Welcome to Firebase function with Node Express')
});

app.listen(PORT, () => {
	console.log('Server is running on PORT', PORT);
})
