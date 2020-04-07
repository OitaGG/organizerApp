const validateRegForm = (outerErrors, values) => {
    let errors = {...outerErrors};
    const validate = {
        email: (errors, value) => {
            if (!value) {
                errors.email = 'Обязательное поле';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Неверный e-mail адресс';
            }
        },
        password: (errors, value) => {
            if (!value) {
                errors.password = 'Обязательное поле';
            } else if (!/(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(value)) {
                errors.password = 'Слишком простой пароль';
            }
        },
        username: (errors, value) => {
            if (!value) {
                errors.username = 'Обязательное поле';
            } else if (!/^[a-z0-9_-]{3,16}$/.test(value)) {
                errors.username = 'Придумайте другой логин';
            }
        },
        repeatPassword: (errors, value) => {
            if (!value) {
                errors.repeatPassword = 'Обязательное поле';
            } else if (!/(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(value)) {
                errors.repeatPassword = 'Слишком простой пароль';
            }
        }
    };
    Object.keys(values).forEach(key => validate.hasOwnProperty(key) && validate[key](errors, values[key]));
    return errors;
};

const validateLoginForm = (outerErrors, values) => {
    let errors = {...outerErrors};
    const validate = {
        username: (errors, value) => {
            if (!value) {
                errors.password = 'Обязательное поле';
            }
        },
        password: (errors, value) => {
            if (!value) {
                errors.password = 'Обязательное поле';
            }
        }
    };
    Object.keys(values).forEach(key => validate.hasOwnProperty(key) && validate[key](errors, values[key]));
    return errors;
};

export {
    validateRegForm,
    validateLoginForm
}