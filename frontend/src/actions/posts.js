import * as api from '../api'

// Action Creators
export const getPosts = () => async (dispatch) => {

    try {
        // Fetching all data from api
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error)
    }
}

// creating a post
export const createPost = (post) => async (dispatch) => {
    try {
        // getting data
        const { data } = await api.createPost(post)
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error)
    }
}

// editng/updating uploaded post
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error)
    }
}