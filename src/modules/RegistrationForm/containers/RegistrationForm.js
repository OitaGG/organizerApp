import RegistrationForm from "../components/RegistrationForm.jsx";
import { withFormik } from 'formik';
import {validateRegForm} from "../../../utils/validation";
export default withFormik({
    mapPropsToValues: () => ({
       email: '',
       password: '',
       username: '',
       repeatPassword: '',
    }),
    validate: values => {
        let errors = {};
        return validateRegForm(errors, values);
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'RegisterForm', // helps with React DevTools
})(RegistrationForm);