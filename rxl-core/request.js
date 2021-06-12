var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require('node-fetch')
function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.responseType = 'json';
    xmlHttp.send(null); 
    if (xmlHttp.status === 200){
        console.log('Status OK |', xmlHttp.status)
    } 
    if (xmlHttp.status === 403){
        console.log('Status Forbidden |', xmlHttp.status)
    } 
    if (xmlHttp.status === 404){
        console.log('Status Page not found |', xmlHttp.status)
    } 

    //console.log(xmlHttp.responseText)
    var jsonResponse = JSON.parse(xmlHttp.responseText);
    return jsonResponse;
}

function httpLogin(url, data)
{
    console.log("Function Called")
    const response = fetch("https://auth.roblox.com/v2/logout", {
    method: "POST",
    headers: {
        cookie: data,
    }
}).then((res) => {
    //console.log(res)
    console.warn("-------------------------------------------\nhi, sorry for the inconvenience, \nthis function will not work until i have the time to finish \nit sometime soon(im facing finals soon, yay). \n-------------------------------------------")
})
}

module.exports = {
    httpLogin,
    httpGet
}
