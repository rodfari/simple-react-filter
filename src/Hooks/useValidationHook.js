
import React, { useState } from 'react'

export const useValidationHook = () => {
    const [errors, setErrors] = useState({});

    const validate = (data) => {
        let newErrors = {};
        if (!data.name) {
            newErrors.name = "Full Name is required";
        }

        if (!data.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = "Email address is invalid";
        }

        if (!data.phone) {
            newErrors.phone = "Phone Number is required";
        } else if (!/^\d+$/.test(data.phone)) {
            newErrors.phone = "Phone Number is invalid";
        }
        if (!data.message) {
            newErrors.message = "Comments are required";
        }
        return newErrors;
    };

    const onFormSubmit = (e) => {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const validationErrors = validate(data);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return false;
        } else {
            setErrors({});
            return true;
        }
    };

    return { errors, onFormSubmit }
}
