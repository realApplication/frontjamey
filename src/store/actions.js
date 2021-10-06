import superagent from 'superagent';

const api =  process.env.LINK || 'http://localhost:7896';

// const api = 'http://localhost:7896/book';


export const getRemoteData = () => (dispatch, state) => {

    console.log("inside get book ");
    return superagent.get(`${api}/book`).then(res => {
        dispatch(getAction(res.body));
    });
}

export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}
