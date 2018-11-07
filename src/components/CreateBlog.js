import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class CreateBlog extends Component {

    renderField = (field) => (
        <div className="form-group">
            <label>{field.label}</label>
            <input className="form-control"
                type="text"
                {...field.input}
            />
            {field.meta.touched? field.meta.error : ''}
        </div>
    );

    onSubmit = (values) => {
        console.log(values);
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

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(CreateBlog);