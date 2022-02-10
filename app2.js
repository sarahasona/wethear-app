//weather stack example
const url = 'http://api.weatherstack.com/current?access_key=4ceaf984ee7c38e29790ac1490a718d1&query=30.050,31.250';
const request = require('request');
// request({url:url,json:true},callbackfunction(error,response,body){
//     console.log(error);
//     console.log(`${response} ${response.body} ${response.statusCode}`)
// })
//json:true =====> converts json to object built in function in weatherstack website 
// instead of json:true ====> JSON.parse(response.body) ==> to convert json to object
request({url,json:true},(error,response)=>{
    //low level error (internet connection or wrong request api)
    //const url = 'http://api.weallltherstack.com/current?access_key=4ceaf984ee7c38e29790ac1490a718d1&query=30.050,31.250';
    //error not found url 
    if(error){
        console.log(error);
    }
    // error in query or access key
    //const url = 'http://api.weatherstack.com/current?access_key=&query=30.050,31.250'; ====> missing access key
    //const url = 'http://api.weallltherstack.com/current?access_key=0ac1490a718d1&query=30.050,31.250'; =====> Invalid Access key
    else if(response.body.error){
        console.log(response.body.error.type)
    }
    else{
        const data = response.body
        console.log(`name is : ${data.location.name} country is: ${data.location.country} region is : ${data.location.region} lat is ${data.location.lat} lon is : ${data.location.lon}`)
    
    }
    // console.log(response.body)
})
