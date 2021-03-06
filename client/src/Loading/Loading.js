import React, { useEffect } from 'react';
import * as actions from './actions';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';

function Loading (props) { 

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt)
            props.checkUser(jwt);
        else {
            props.history.push('/login');
            return;
        }
    });

    if (props.checkError) return <div>{props.checkError.message}</div>;

    if (props.response) {
        if (props.response.admin) props.history.push('/users');
        if (props.response.user) props.history.push('/chat');
    }
    return <Spinner/>;
}

function mapStateToProps(state) {
    return { ...state.loading };
}

const mapDispatchToProps = {
	...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
