import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./router"

// import App from "./components/App";
// import TaskEdit from "./components/TaskEdit";

// if (document.getElementById("root")) {
//     ReactDOM.render(
//         <BrowserRouter>
//             <div>
//             <App/>
//             </div>

//             {/* <div> */}
//                 {/* <Routes> */}
//                     {/* <Route exact path="/:id/edit" component={<TaskEdit/>}/> */}
//                     {/* <Route exact path="/" component={<App/>}/>
//                 </Routes> */}
//             {/* </div> */}
//         </BrowserRouter>,
//         document.getElementById("root")
//     );
// }

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route component={{Main}}/>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(<Main/>, document.getElementById("index"));
