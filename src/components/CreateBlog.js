import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions/BlogAction';

class CreateBlog extends Component {
    renderField = (field) => {
        const { touched, error } = field.meta;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control"
                       type="text"
                       {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
}   ;

    onSubmit = (values) => {
        this.props.dispatch(createPost(values, ()=>{
            this.props.history.push('/')
        }))
    };

    render() {

        const {handleSubmit} = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        label = "Title"
                        name="title"
                        component={this.renderField}/>
                    <Field
                        label = "Categories"
                        name="categories"
                        component={this.renderField}/>
                    <Field
                        label = "Blog Content"
                        name="content"
                        component={this.renderField}/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className = "btn btn-danger">Cancel</Link>
                </form>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};

    if(!values.title) {
        errors.title = "Enter a title";
    }

    if(!values.categories) {
        errors.categories = "Enter a categories";
    }

    if(!values.content) {
        errors.content = "Enter a content";
    }

    return errors;
};

// const mapStateToProps = (state) => {
//   return {
//       blogs: state.blogs
//   }
// };

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect()(CreateBlog)
);