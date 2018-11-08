import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showBlog} from '../actions/BlogAction';
import {Link} from 'react-router-dom';

class BlogShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.dispatch(showBlog(id));
    }

    render() {
        const {blog} = this.props;

        if(!blog) {
            return <div>Loading...</div>
        }

        return (
          <div>
              <Link to="/" className="btn btn-primary">Back to home</Link>
              <h3>{blog.title}</h3>
              <h6>Categories: {blog.categories}</h6>
              <p>{blog.content}</p>
          </div>
        );
    }
}

const mapStateToProps = ({blogs}, ownProps) => ({
    blog: blogs[ownProps.match.params.id]
});

export default connect(mapStateToProps)(BlogShow);