const axios = require("axios");
const fs = require("fs");

const baseUrl = "http://0.0.0.0:5000/?rest_route=";

// Details of Routes

axios
  .get(`${baseUrl}/wp/v2/`)
  .then((res) => {
    const data = res.data;
    const routes = data.routes;
    const writeData = JSON.stringify(data, null, 2);
    fs.writeFileSync("details.result.json", writeData);

    const routesList = Object.keys(routes).map(function (key, index) {
      return key;
    });

    var filteredRoutes = routesList.filter((route) => {
      return route.indexOf("?") === -1;
    }); //routes without detail query

    filteredRoutes.forEach((route) => {
      fetchAndWrite(route);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const fetchAndWrite = (route) => {
  axios
    .get(`${baseUrl + route}`)
    .then((res) => {
      const data = res.data;
      const writeData = JSON.stringify(data, null, 2);
      const params = route.split("/");
      const fileName = params[params.length - 1];
      fs.writeFileSync(`${fileName}.result.json`, writeData);
    })
    .catch((err) => {
      console.log(err);
    });
};
