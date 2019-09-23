const validate = (values) => {
  let errors = {};

  // email
    if (!values.email) {
      errors.email = "Required Email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }


  // name
  if (!values.name) {
    errors.name = "Required Name";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  // Phone
  if (!values.phone) {
    errors.phone = "Required Phone Number";
  } else if (!/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i.test(values.phone)) {
    errors.phone = "Invalid phone number format";
  }

  // message
  if (!values.message) {
    errors.message = "Required Message";
  } else if (values.message.length < 10) {
    errors.message = "Name must be at least 10 characters";
  }
  return errors;
};

export default validate;
