import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

const useForm = (submitCallback: () => void, validateFunc: (values: object) => object) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submitCallback();
        }
    }, [errors]);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        setErrors(validateFunc(values));
        setIsSubmitting(true);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();

        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;
