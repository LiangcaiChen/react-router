import {BrowserRouter, Route} from 'react-router-dom';
import PostsIndex from '../components/PostsIndex';
import React,{Component} from 'react';

export default () => {
    return(
        <BrowserRouter>
            <Route path="/" exact={true} component={PostsIndex}/>
        </BrowserRouter>
    );
}