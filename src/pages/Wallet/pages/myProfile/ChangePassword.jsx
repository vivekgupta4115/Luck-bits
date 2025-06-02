import { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import apis, { baseUrlUsaWin } from '../../../../services/api';

function ChangePassword() {
    const userId = localStorage.getItem("userId")
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
                const payload = {
                    id: userId,
                    old_password: values.currentPassword,
                    new_password: values.newPassword,
                    confirm_password: values.confirmPassword,
                };

                const res = await axios.post(`https://usawin.codingjourney.net/userapi/changepassword`, payload);
                // console.log("first",res)
                if (res?.data?.status === 200) {
                    toast.success(res.data.message || 'Password changed successfully');
                    resetForm();
                }
            } catch (error) {
                // console.log("ere", error)
                if (error.response?.data?.status === 500) {
                    console.log("server problem")
                } else {
                    toast.error(error.response?.data?.message || 'Error changing password');
                }
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
            {renderInput('currentPassword', 'Current Password', 'current')}
            {renderInput('newPassword', 'New Password', 'new')}
            {renderInput('confirmPassword', 'Confirm Password', 'confirm')}

            <div className="flex justify-end mt-5">
                <button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                    className={`px-32 py-2 text-xsm rounded-md text-white transition-colors duration-200 ${formik.isValid && formik.dirty
                            ? 'bg-bg4 text-bg2 cursor-pointer'
                            : 'bg-bg2 text-textGray2 cursor-not-allowed'
                        }`}
                >
                    SAVE CHANGES
                </button>

            </div>
        </form>
    );
}

export default ChangePassword;
