export default function validate (values) {
    let errors = {};
    if (!values.email) {
       errors.email = 'Required Email';
      console.log(errors.email);
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
      console.log(errors.email);
    }

    if (!values.name) {
        errors.name = 'Required Name';
        console.log(errors.name);
    } else if (values.name.length < 3)
    {
        errors.name = 'Name must be at least 3 characters';
        console.log(errors.name);
    }
    if (!values.message) {
        errors.message = 'Required Message';
        console.log(errors.message);
    } else if (values.message.length < 10){
        errors.message = 'Name must be at least 10 characters';
        console.log(errors.message);
    }
    return errors;
}
