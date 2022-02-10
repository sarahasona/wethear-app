// //map box example
// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1Ijoic2FyYWhhc3NvbmE5MiIsImEiOiJja3pmYjg2OTEwcGNuMnhwajhlZ3p3bXF3In0.XJIIpz5UmjIKkOiopSHoFQ';
// //key should be url in request ====> 
// request({url:url2,json:true},(error,response) =>{
//     //low level error error in url 
//     //const url2 = 'https://api.mapbllllllllllox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1Ijoic2FyYWhhc3NvbmE5MiIsImEiOiJja3pmYjg2OTEwcGNuMnhwajhlZ3p3bXF3In0.XJIIpz5UmjIKkOiopSHoFQ';
//     if(error){
//         console.log(error);
//     }
//     else if(response.body){
//         if(response.body.message){
//             console.log(response.body.message)
//         }
//         // const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1Ijoic2FyYWhhc3NvbmE5MiIsImEiOiJja3pmYjg2OTEwcGNuMnhwajhlZ3p3bXF3In0.XJIIpz5UmjIKkOiopSHoFQ';
//         else if(response.body.features){
//             if(response.body.features.length === 0){
//                 console.log("no data")
//             }
//             else{
//                 console.log(`lat is :${response.body.features[0].center[0]}
//                 long is :${response.body.features[0].center[1]}`)
//             }
//         }
//     }

// })
const geocodeFun = require('./tools/geocode')
geocodeFun.geocode('egypt',(error,data)=>{
    if(error){
        console.log('error')
    }
    else{
        console.log(data);
    }
})
const forecastFun = require('./tools/forecast')
forecastFun.forecst(26.4941838299718,29.871903452398,(error,data)=>{
    if(error){
        console.log(`Error is : ${error}`)
    }
    else{
        console.log(data)
    }
})