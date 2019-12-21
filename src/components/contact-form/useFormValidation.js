import { useState, useEffect } from "react";
import validate from "./validateForm";

const useFormValidation = initialState => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState("");
  const [sent, setSent] = useState(false);
  const [touch, setTouch] = useState({});

  useEffect(() => {
    if (disable) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        const xhr = new XMLHttpRequest();
        const url = "https://u7w61rtzaa.execute-api.us-west-2.amazonaws.com/v1/contact-us";
        const data = JSON.stringify(values);
        xhr.responseType = "json";
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return xhr.response;
          }
        };
        xhr.open("POST", url);
        xhr.send(data);
        setSent(true);
        setDisable("disabled");
      } else {
        setDisable("disabled");
      }
    }
  }, [disable, errors, values]);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    setTouch({
      ...touch,
      [event.target.name]: true
    });
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setDisable("");
  };

  const handleBlur = event => {
    setTouch({
      ...touch,
      [event.target.name]: true
    });
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setDisable("");
  };

  const handleOnClick = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setDisable("disabled");
  };

  return { handleChange, values, handleOnClick, handleBlur, errors, disable, sent, touch };
};

export default useFormValidation;
