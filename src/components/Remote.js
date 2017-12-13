import React, { Component } from 'react';
import axios from 'axios';

const Remote = () => {
    const url = `http://glacial-wave-26894.herokuapp.com/meals/1.json`;
    axios.get(url).then(resp => {
        console.log(resp);
    });
    return (
        <div>Response:</div>
    );
}

export default Remote;