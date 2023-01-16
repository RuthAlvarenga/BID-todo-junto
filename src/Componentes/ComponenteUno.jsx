import { Component } from "react";


class ComponenteUno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age : this.props.age,
        };
    }
    
    render() { 
        const {lastName, firstName, hairColor} = this.props;
        const {age} = this.state;
    
        const birthdayBtn = () => this.setState({ age: this.state.age + 1 });

        return (
            <>
                <h1>{lastName}{firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={birthdayBtn}>Birthday Button for {lastName}{firstName}</button>
            </>
            
        )
    }
}

export default ComponenteUno;