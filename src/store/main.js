const initialState = [];

export default (state = initialState, action) => {
    const { type, payload } = action;
    let testData = [];
    switch (type) {
        case 'GET':
            testData = payload.map(element => {
                return {title:element.title ,id:element.id ,author:element.author ,image:element.image,description:element.description};
            })

            return [...state, testData];

        default:
            return state;
    }
}
