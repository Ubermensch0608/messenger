import { createStore } from 'redux';

export const FETCH = 'FETCT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REPLY_MESSAGE = 'REPLY_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const addMessage = (userId, userName, profileImage, content) => ({
    type: ADD_MESSAGE,
    userId,
    userName,
    profileImage,
    content,
});
export const replyMessage = () => ({ type: REPLY_MESSAGE });
export const removeMessage = (date) => ({ type: REMOVE_MESSAGE, date });

const initialState = [];

const message = (state = initialState, action) => {
    switch (action.type) {
        case FETCH:
            return (state = action.value);

        case ADD_MESSAGE:
            return (state = action.value);

        case REMOVE_MESSAGE:
            return state.filter((item) => item.commentId !== action.payload);
        default:
            return state;
    }
};

const store = createStore(message);

export default store;
