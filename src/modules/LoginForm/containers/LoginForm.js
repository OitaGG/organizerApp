import LoginForm from "../components/LoginForm";
import { withFormik } from 'formik';
import {validateLoginForm} from "../../../utils/validation";
export default withFormik({
    mapPropsToValues: () => ({
        password: '',
        username: '',
    }),
    validate: values => {
        let errors = {};
        return validateLoginForm(errors, values);
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'LoginForm',
})(LoginForm);