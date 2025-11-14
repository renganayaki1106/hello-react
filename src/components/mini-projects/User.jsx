import React from "react";
import ClassComponent from "./ClassComponent";

class User extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent component mounted")
    }
    render() {
        console.log("Parent render")
         return (
        <div className="all-app">
        <ClassComponent name="John" age="28" designation="Software Engineer" location="USA" />
        </div>
    )
    }
}


export default User;