import {mainConstants} from "../../constants";

function setAttrValue(payload) {
    return {
        type: mainConstants["SET_MAIN_ATTR_VALUE"],
        payload
    };
}

export default {
    setAttrValue
};