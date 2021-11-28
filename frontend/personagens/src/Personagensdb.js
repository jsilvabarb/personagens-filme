/* eslint-disable import/no-anonymous-default-export */
export default {
     makeRequest: async (url, method, payload) => {
        const myHeader = new Headers();
        myHeader.append('Content-type' ,'application/json;charset=UTF-8');
    
        return await fetch(url, {
            method: method,
            mode: "cors",
            headers: myHeader,
            body: payload
        });       
       
     }                 
    
}

