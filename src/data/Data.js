import React from "react";
function getData(props)
{
let data=fetch("http://localhost:8000/api/v1/events/"+props.id,{method:'GET',  headers: {"Content-Type": "application/json"}}).then((res)=>{return res.json()})
return data;
}
export default getData;