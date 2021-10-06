import superagent from 'superagent';

const api = 'https://jameeey.herokuapp.com/book';

export const getRemoteData = () => (dispatch, state) => {

    console.log("inside get book ");
    return superagent.get(api).then(res => {
        dispatch(getAction(res.body));
    });
}

export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}
