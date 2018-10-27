import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions';
import store from '../reducers/store';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import Asteroid from "./Asteroid";
import Form from "./Form";
import { Provider } from "react-redux";


const Component = ({ data, history }) => (
    <section>
        <Provider store={store}>
             <Form />
        </Provider>
        {data.map((data) => {
                return (<Asteroid key={data.id} data={data}/>);
            })}
    </section>
);

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    if (typeof ownProps.match.params.date1 !== "undefined" && typeof ownProps.match.params.date2 !== "undefined") {
        dispatch(fetchSearch(ownProps.match.params.date1, ownProps.match.params.date2));
    }
    return bindActionCreators({

    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Component))