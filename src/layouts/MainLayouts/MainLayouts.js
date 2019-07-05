import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {
    Input,
    Layout,
    Tag
} from "antd";
import {main_actions} from "../../actions";

const {Header, Content} = Layout;

@connect((state, ownProps) => {
    return {
        mainStore: state.mainStore
    };
}, (dispatch, ownProps) => {
    return {
        setAttrValue(payload) {
            dispatch(main_actions.setAttrValue(payload));
        }
    };
})
class MainLayouts extends PureComponent {
    static propTypes = {};

    state = {};

    onChangeHandler = (val) => {
        const {setAttrValue} = this.props;
        val = val.target ? val.target.value : val;
        setAttrValue({
            val
        });
    };

    render() {
        const {mainStore: {val}} = this.props;
        const {onChangeHandler} = this;
        return (
            <Layout>
                <Header>

                </Header>
                <Content>
                    <Tag

                        color='purple'
                    >
                        {val}
                    </Tag>
                    <Input
                        value={val}
                        onChange={onChangeHandler}
                    />
                </Content>
            </Layout>
        );
    }
}

export default MainLayouts;