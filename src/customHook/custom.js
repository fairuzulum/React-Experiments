import { useState } from "react";

const useTogle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
    const togle = () => setValue(!value);
    return [value, togle];

}


const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }
    
    const resetForm = () => {
        setValues(initialValue)
    }

    return [values, handleChange, resetForm];
}

export { useTogle, useForm };


