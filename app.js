const axios = require("axios");

const baseUrl = 'http://0.0.0.0:5000/';
axios.get(`${baseUrl}?rest_route=/`)
.then(res=> {
    const data = res.data;
    const routes = data.routes;
    console.log(routes)
})
.catch((err)=>{
    console.log(err);
})