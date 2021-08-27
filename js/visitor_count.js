function visits(){
	fetch ("https://72qfgmieu8.execute-api.us-east-1.amazonaws.com/crc_api/crc_api")
	.then(response => response.json())
	.then(data => document.getElementById('Visitor_Count').innerHTML="You are visitor# "+data)
	.catch(err => console.log(err));

}