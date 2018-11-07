import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import BlogsIndex from '../components/BlogsIndex';
import CreateBlog from '../components/CreateBlog';
import BlogShow from '../components/BlogShow';

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={BlogsIndex} exact={true}/>
                <Route path="/blogs/create" component={CreateBlog}/>
                <Route path="/blogs/:id" component={BlogShow} />
            </Switch>
        </BrowserRouter>
    );
}