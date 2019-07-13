import React from 'react';
import './Header.css'

export default class Header extends React.Component {
    shouldComponentUpdate(nextProps) {
        if(
            nextProps.data.usersAmount === this.props.data.usersAmount &&
            nextProps.data.messagesAmount === this.props.data.messagesAmount &&
            nextProps.data.lastMessageTime === this.props.data.lastMessageTime
            ) return false;
        return true;
    }

    render() {
        console.log(this.props.data);
        return <div className = 'header'>
            <span className = 'title'>React Chat</span>
            <span className = 'participants'>{this.props.data.usersAmount} participants</span>
            <span className = 'messages'>{this.props.data.messagesAmount} messages</span>
            <span className = 'date'>last message at {this.props.data.lastMessageTime}</span>
        </div>
    }
}
