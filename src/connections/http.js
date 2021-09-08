import React from "react";

let http={
    // get :(url,payload,UID,callback)=>{
    //     fetch(url,{
    //         params:payload,
    //         headers:{"Content-Type":"application/json", Accept:"application/json", UID:UID},
    //     }).then((response)=>{
    //         return response.json();
    //     })
    //     .then((responseData)=>{
    //         callback && callback(responseData);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    //     .done();
    // }

    get: (url, payload, callback) => {

        fetch(url, {
          params: payload,
          headers: { "Content-Type": "application/json", Accept: "application/json",
        
        "Access-Control-Allow-Origin":"*"
    }
        })
          .then(response => {
            return response.json();
          })
    
          .then(responseData => {
            callback && callback(responseData);
          })
          .catch(error => {
            console.log(JSON.stringify(error));
          })
}
}

export default http;