import React from "react";
import ReactDOM from "react-dom";
const App = () => {
    return (
        <div>
            <p> React here! </p>
            <div className="col-sm-6">1 slide</div>
            <div className="col-sm-6">2 slide</div>
            <div>3 slide</div>
          </div>
    );
};
export default App;
ReactDOM.render(<App/>, document.getElementById("app"));