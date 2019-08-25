import React from "react"


function  useFormValidation (initialState, validate)  {
    const [values, setValues] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});
    const [disable, setDisable] = React.useState("");
    const [sent, setSent] = React.useState(false);

    React.useEffect(() => {
        if (disable) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                console.log(`name: ${values.name}, email: ${values.email}, message: ${values.message}`)
                const xhr = new XMLHttpRequest();
                const url =
                     "https://u7w61rtzaa.execute-api.us-west-2.amazonaws.com/v1/contact-us";
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
                setDisable ("disabled");
                
            } else {
                setDisable ("disabled");

            }
        }
    }, [disable, errors, values]);

    function handleChange (event) {
        setValues ({
            ...values,
            [event.target.name] : event.target.value
        })
        console.log(`${event.target.name}: ${event.target.value}`)
    }
    function handleBlur () {
        const validationErrors = validate(values);
        setErrors (validationErrors);
    }
    function handleOnClick () {

        const validationErrors = validate(values);
        setErrors (validationErrors);
        setDisable("disabled");
      };

    return { handleChange, values, handleOnClick, handleBlur, errors, disable, sent}
};

export default useFormValidation;