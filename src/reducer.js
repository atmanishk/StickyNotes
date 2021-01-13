export const initialState = {
    array: [],
    weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
}

export const actionTypes = {
    ADD_CONTENT: "ADD_CONTENT",
    DELETE_CONTENT: "DELETE_CONTENT",
    MODIFY_CONTENT: "MODIFY_CONTENT",
    SELECT_CONTENT: "SELECT_CONTENT",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        //
        case actionTypes.ADD_CONTENT:
            const arrayData = [...state.array];
            arrayData.map((array) => {
                array["selected"] = false;
            })
            return {
                ...state,
                array: [...arrayData, action.data],
            };

        case actionTypes.SELECT_CONTENT:
            const arrayData1 = [...state.array];
            arrayData1.map((item) => {
                if (action.id === item.id) {
                    item["selected"] = true;
                }
                else {
                    item["selected"] = false;
                }
            });
            return {
                ...state,
                array: arrayData1,
            };

        case actionTypes.DELETE_CONTENT:
            const Obj1 = [...state.array];
            let index1 = state.array.findIndex((item) => item.id === action.id);
            if (index1 >= 0) {
                Obj1.splice(index1, 1);
            } else {
                console.warn('Cant find the id with the ${action.id}');
            }
            return {
                ...state,
                array: Obj1,
            };
        case actionTypes.MODIFY_CONTENT:
            const Obj2 = [...state.array];
            let index2 = state.array.findIndex((item) => item.id === action.data.id);
            if (index2 >= 0) {
                Obj2.splice(index2, 1, action.data);
            } else {
                console.warn('Cant find the id with the ${action.id}');
            }
            return {
                ...state,
                array: Obj2,
            };


        default:
            return state;
    }
}

export default reducer;