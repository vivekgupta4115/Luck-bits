import { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

function New() {
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const togglePassword = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            currentPassword: Yup.string().required('Current password is required'),
            newPassword: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('New password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('newPassword')], 'Passwords must match')
                .required('Confirm password is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const res = await axios.post('/api/change-password', values); // Replace with your real endpoint
                toast.success(res.data.message || 'Password changed successfully');
                resetForm();
            } catch (error) {
                toast.error(error.response?.data?.message || 'Error changing password');
            }
        },
    });

    const renderInput = (name, label, typeKey) => (
        <div className="relative w-full mt-4">
            <input
                id={name}
                type={showPassword[typeKey] ? 'text' : 'password'}
                name={name}
                placeholder=" "
                className={`peer w-full px-4 py-0.5 h-14 rounded text-sm bg-bg1 text-white focus:outline-none pr-10 ${formik.errors[name] && formik.touched[name] ? 'border border-customred' : ''
                    }`}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <label
                htmlFor={name}
                className="absolute left-4 text-textGray2 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1"
            >
                {label}
            </label>

            {formik.values[name] && (
                <span
                    className="absolute right-4 top-[50%] transform -translate-y-1/2 text-white cursor-pointer"
                    onClick={() => togglePassword(typeKey)}
                >
                    {showPassword[typeKey] ? <FiEyeOff /> : <FiEye />}
                </span>
            )}

            {formik.errors[name] && formik.touched[name] && (
                <div className="bg-[#33142C] text-white text-xs mt-1 rounded p-1">{formik.errors[name]}</div>
            )}
        </div>
    );

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col items-end justify-between px-4">
            {renderInput('subject', 'Subject', 'subject')}
            {renderInput('message', 'Mesaage', 'message')}
            <div className="flex justify-end mt-5">
                <button
                    disabled
                    className="px-32 py-2 text-xsm rounded-md bg-bg2 text-textGray2 cursor-not-allowed"
                >
                    SUBMIT
                </button>
            </div>
        </form>
    );
}

export default New;
