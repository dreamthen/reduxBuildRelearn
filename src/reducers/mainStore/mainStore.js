import {mainConstants} from "../../constants";

const defaultState = {
    val: null
};

export default function mainStore(state = defaultState, {type, payload}) {
    switch (type) {
        case mainConstants["SET_MAIN_ATTR_VALUE"]:
            return Object.assign({}, state, payload);
        default:
            return state;
    }
}