import { Component } from 'react';

function UserGreeting(props){
    return <h1>Hello User</h1>
}
function GuestGreeting(props){
    return <h1>Hello Guest</h1>
}
function Greeting(props){
    return props.isToggle ? <UserGreeting/>:<GuestGreeting/>;
}

export class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggle: true };

        this.handleClickme.bind(this);
    }

    handleToggle() {
        this.setState(pre => ({
            isToggle: !pre.isToggle
        }));
    }
    handleClickme = () => {
        console.log('pressed');
    }

    render() {
        return (
            <>
                <Greeting isToggle={this.state.isToggle}/>
                <button onClick={() => this.handleToggle()}>
                    {this.state.isToggle ? 'ON' : 'OFF'}
                </button>
                <div>
                    <button onClick={this.handleClickme}>
                        Click me
                    </button>
                </div>
            </>
        )
    }
}
