import Axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
// random key
const API_KEY = '?key=dfajlj3ljo3fhda892he2f9hakfh92hfakhdf';

export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const SHOW_BLOG = "SHOW_BLOG";
export const DELETE_BLOG = "DELETE_BLOG";

export const fetchPost = () => {
    const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
};

export const createPost = (values, callback) => {
    const request = Axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(()=> callback());

    return {
        type: CREATE_POST,
        payload: request
    }
};

export const showBlog = (id) => {
    const request = Axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: SHOW_BLOG,
        payload: request
    }
};

export const deleteBlog = (id, callback) => {
    const request = Axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(()=>callback());
    return {
        type: DELETE_BLOG,
        payload: id
    }
};