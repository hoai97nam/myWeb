import { Component } from "react";

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Log in
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Log out
        </button>
    );
}
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((x)=>
        <li key={x}>{x}</li>
    );
    return (
        <ul>{listItems}</ul>
    )
}
export class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick=this.handleLoginClick.bind(this);
        this.handleLogoutClick=this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }
    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (!isLoggedIn) {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        else {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        }
        // 
        const numbers = [1,2,3,4,5];
        
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                <NumberList numbers={numbers}/>
            </div>
        );
    }
}