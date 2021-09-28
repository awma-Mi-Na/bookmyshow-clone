// file can be jsx or js
// name of components should always start with caps
// props -> parameters/ properties, it is the data that is passed from one component to another
// to use javascript inside the html code use {}
// state -> a set of data that is held by an individual component

// const User = (props) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h4>{props.description}</h4>
//         </div>
//     );
// };

// export default User;

// component life cycle methods

import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: "earth",
    };
    console.log("hello from constructor\n");
  }

  componentDidMount() {
    console.log("hello from componentDidMount");
    this.setState({ planet: "mars" });
  }

  render() {
    console.log("hello, rendering components\n");
    return (
      <div>
        <h3> {this.props.name} </h3>
        <p> {this.props.description} </p>
        <p> {this.state.planet} </p>
      </div>
    );
  }
}

export default User;
