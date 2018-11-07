import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';

import PostsIndex from '../components/PostsIndex';

export default () => {
    return(
        <BrowserRouter>
            <Route path="/" exact={true} component={PostsIndex}/>
        </BrowserRouter>
    );
}