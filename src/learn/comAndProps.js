import { Component } from "react";

function Welcome(props) {
    return <h1>hello, {props.name}</h1>
}


//
function fmDate(date) {
    return date.toLocaleDateString();;
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};


function Ava(props) {
    return (
        <img className="Avatar"
            src={props.avatarUrl}
            atl={props.name}
        />
    )
}

function Comment(props) {
    return (
        <>
            <Ava avatarUrl={props.author.avatarUrl} name={props.author.name}/>
            <h1>{props.text}</h1>
            <h1>{fmDate(props.date)}</h1>
        </>
    )
}


export class ComponentAndProps extends Component {
    
    render() {
        const comment = {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            author: {
                name: 'Hello Kitty',
                avatarUrl: 'http://placekitten.com/g/64/64'
            }
        };

        return (
            <Comment
                author={comment.author}
                text={comment.text}
                date={comment.date}
            />
            // <>
            // <h1>{fmDate(new Date())}</h1>
            // </>
        )
    }
};
