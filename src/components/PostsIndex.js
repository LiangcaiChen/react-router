import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/BlogAction';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPost());
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect()(PostsIndex);