const request = require('request');
const geocode = (address,callback) =>{
    const accessToken = 'pk.eyJ1Ijoic2FyYWhhc3NvbmE5MiIsImEiOiJja3pmYjg2OTEwcGNuMnhwajhlZ3p3bXF3In0.XJIIpz5UmjIKkOiopSHoFQ';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${accessToken}`;
    request({url,json:true},(error,response)=>{
        if(error){
            callback('error in url',undefined)
        }
        else if(response.body.message){
            callback('error in data',undefined)
        }
        else if(response.body.features){            
            // const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1Ijoic2FyYWhhc3NvbmE5MiIsImEiOiJja3pmYjg2OTEwcGNuMnhwajhlZ3p3bXF3In0.XJIIpz5UmjIKkOiopSHoFQ';          
            if(response.body.features.length === 0){
                callback('no data try again' , undefined)
            }
            else{
                callback(undefined,{
                    latitude:response.body.features[0].center[0],
                    longitude:response.body.features[0].center[1],
                    location:response.body.features[0].place_name
                })
            }           
        }
    })
}
module.exports ={
    geocode
}