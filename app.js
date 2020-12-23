const axios = require("axios");
const fs = require("fs");

const baseUrl = 'http://0.0.0.0:5000/';
axios.get(`${baseUrl}?rest_route=/wp/v2/`)
.then(res=> {
    const data = res.data;
    const routes = data.routes;
    const writeData = JSON.stringify(data,null,2);
    fs.writeFileSync('response.json', writeData);

})
.catch((err)=>{
    console.log(err);
})