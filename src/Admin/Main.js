import Navbar from "./Navbar";
import TableData from "./Table";
import TableTab from "./TableTab";
import TotalEvent from "./TotalEvent";
import TotalUser from "./TotalUser";

function Main() {
    return (
        <div> 
<Navbar></Navbar>
<div style={{display:"flex",marginTop:"5%"}}>
    <TotalUser></TotalUser>
    <TotalEvent></TotalEvent>
</div>
<TableTab></TableTab>
</div>
    );
  }
  export default Main;