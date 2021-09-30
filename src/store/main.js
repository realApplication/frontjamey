const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const { type, payload } = action;
    let testData = [];
    console.log(action);
    switch (type) {
        case 'GET':
            console.log("payload ---->", payload)

            testData = payload.map(element => {
                return {title:element.title ,id:element.id ,author:element.author ,image:element.image};
            })

            return [...state, testData];

        default:
            return state;
    }
}
