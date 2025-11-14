import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component is updated")
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("Child component render");
    const { name, age, designation, location } = this.props;
    const { count } = this.state;

    const increment = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

      const decrement = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };
    return (
      <div>
        <h1>I m Class Component(Props experiment)</h1>
        <p>Name : {name}</p>
        <p>Age: {age}</p>
        <p>Designation: {designation}</p>
        <p>Location: {location}</p>

        <h1>Counter App</h1>
        <h3>{count}</h3>
        <button className="btn" onClick={increment}>
          Increment
        </button>
         <button className="btn" onClick={decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default ClassComponent;
