  const validate = (values) => {
    let errors = {};
    if (!values.email) {
       errors.email = 'Required Email';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.name) {
        errors.name = 'Required Name';
    } else if (values.name.length < 3)
    {
        errors.name = 'Name must be at least 3 characters';
    }
    if (!values.message) {
        errors.message = 'Required Message';
    } else if (values.message.length < 10){
        errors.message = 'Name must be at least 10 characters';
    }
    return errors;
}

export default validate;