@ianemv Thank you. I had to set mine up a little differently because I'm using bindActionCreators and used the input primitives approach but the concept is mostly the same. Seems to be working now. Here for anyone who finds this useful:

import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import * as Fields from '../../shared/layout/components/forms-component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../shared/auth/store/auth-store';

class LoginForm extends React.Component {
    render() {
        const {
            values,
            touched,
            errors,
            dirty,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isSubmitting,
        } = this.props;
        return (
            <div className="forms-styles">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="single-row">
                            <Fields.TextInput
                                id="userId"
                                type="text"
                                label="User ID"
                                placeholder="User ID"
                                error={touched.userId && errors.userId}
                                value={values.userId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="single-row">
                            <Fields.TextInput
                                id="userPassword"
                                type="password"
                                label="Password"
                                placeholder="Password"
                                error={touched.userPassword && errors.userPassword}
                                value={values.userPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="single-row">
                            <button className="button secondary" type="submit" disabled={isSubmitting}>
                                Login
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        userId: Yup.string()
            .required('User ID is required.'),
        userPassword: Yup.string()
            .required('Password is required.')
    }),
    mapPropsToValues: () => ({
        userId: 'test',
        userPassword: 'test'
    }),
    handleSubmit: (payload, { props, setSubmitting }) => {
        props.loginUser(payload);
        setSubmitting(false);
    },
    displayName: 'LoginForm',
})(LoginForm);

const Login = connect(
    state => state.login,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(formikEnhancer)

export default Login;
