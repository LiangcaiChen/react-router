import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/BlogAction';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPost());
    }

    renderBlogs = () => {
        return _.map(this.props.blogs, blog => {
            return (
                <Link className="list-group-item" key={blog.id} to={`/blogs/${blog.id}`}>
                    {blog.title}
                </Link>
            )
        })
    };

    render() {
        console.log(this.props.blogs);
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/blogs/create">
                        Create a blog
                    </Link>
                </div>

                <h3>Blogs</h3>
                <ul className="list-group">
                    {this.renderBlogs()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({blogs}) => ({blogs});

export default connect(mapStateToProps)(PostsIndex);