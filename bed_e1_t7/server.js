

import http from "node:http"
import {converter} from "./converter.js"

const port = (process:argv[2] || process.env.PORT || 3000);

const getQueryParameter = (req, name) => {
    const baseURL = req.protocol + '://' + req.headders.host + '/';
    const reqUrl = new URL(req.url, baseURL);
    return reqUrl.searchParams.get(name);

};

http.createServer((req, res) => {
    const conversionType = getQueryParameter(req, "converter");
    const distance = getQueryParameter(req, "distance");
    let result;
    let message;
    if (conversionType ==="mi_to_km") {
        result = converter.milesToKilometers(distance);
        message = '${distance} miles is ${result.toFixed(2)} kilometers!';
    } else if (conversionType ==="ki_to_mi") {
        result = converter.kilometersToMiles(distance);
        message = '${distance} kilometers is ${result.toFixed(2)} miles!';
    }

    res.statusCode = 200;
    res.setHeader('Cotent-Type', 'text/html');
    res.end('');

})