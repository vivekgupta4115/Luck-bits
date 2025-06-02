import { useState } from 'react';
import { HiMiniExclamationCircle } from 'react-icons/hi2';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import apis from '../../services/api';
import { toast } from 'react-toastify';

const forgotPasswordAPI = apis?.forgotPassword;
const changePasswordAPI = apis?.updatepassword;

function ForgotPassword({ setIsOpenLogin, setIsForgetOpen }) {
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      otp: '',
      newPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('This field is required'),
      otp: otpSent ? Yup.string().required('OTP is required') : Yup.string(),
      newPassword: otpVerified ? Yup.string().min(6, 'Minimum 6 characters required').required('New password is required') : Yup.string(),
    }),
    validateOnChange: true,
    onSubmit: async (values) => {
      try {
        if (!otpSent) {
          // Step 1: Request OTP
          const res = await axios.post(forgotPasswordAPI, { email: values.email });
          if (res?.data?.status === 200) {
            setOtpSent(true);
            console.log('OTP sent to email');
          }
        } else if (otpSent && !otpVerified) {
          // Step 2: Verify OTP
          if (values.otp === '1234') {
            setOtpVerified(true);
            console.log('OTP verified');
          } else {
            alert('Invalid OTP');
          }
        } else if (otpVerified) {
          // Step 3: Change Password
          const res = await axios.post(changePasswordAPI, {
            email: values.email,
            newPassword: values.newPassword,
          });
          if (res?.data?.status === 200) {
            toast.success('Password changed successfully!');
            setIsForgetOpen(false);
          } else {
            toast.error('Failed to change password.');
          }
        }
      } catch (err) {
        console.error('Error:', err);
      }
    },
  });

  return (
    <div className="bg-mainBg h-[80%] w-full max-w-sm rounded-lg shadow-lg p-5 relative">
      <button onClick={() => setIsForgetOpen(false)} className='absolute top-6 right-12 text-xsm underline hover:text-white text-textGray'>
        SIGN IN
      </button>
      <button onClick={() => setIsOpenLogin(false)} className="absolute top-4 right-4 text-textGray2 hover:text-white text-3xl">
        &times;
      </button>

      <div className="text-3xl font-bold mb-4 flex items-center gap-1">
        <img className='h-6' src="favicon.png" alt="logo not found" />
      </div>

      <div className='w-full border-bg2 border-b-[0.5px]'></div>
      <p className="text-sm mb-1 text-white mt-3">RESET PASSWORD</p>

      <form onSubmit={formik.handleSubmit}>
        {/* Email Input */}
        <div className="mb-4 mt-3">
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              className={`peer w-full px-4 py-0.5 h-14 rounded text-sm bg-bg1 text-white border ${formik.touched.email && formik.errors.email ? 'border-customred' : 'border-transparent'}`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="email" className="absolute left-4 text-textGray1 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1">
              Email
            </label>
          </div>
          {formik.touched.email && formik.errors.email && (
            <p className="text-white bg-[#33142C] p-0.5 rounded-sm text-xsm mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* OTP Input */}
        {otpSent && !otpVerified && (
          <div className="mb-4">
            <div className="relative w-full">
              <input
                type="text"
                name="otp"
                placeholder=" "
                className={`peer w-full px-4 py-0.5 h-14 rounded text-sm bg-bg1 text-white border ${formik.touched.otp && formik.errors.otp ? 'border-customred' : 'border-transparent'}`}
                value={formik.values.otp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="otp" className="absolute left-4 text-textGray1 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1">
                Enter OTP
              </label>
            </div>
            {formik.touched.otp && formik.errors.otp && (
              <p className="text-white bg-[#33142C] p-0.5 rounded-sm text-xsm mt-1">{formik.errors.otp}</p>
            )}
          </div>
        )}

        {/* New Password Input */}
        {otpVerified && (
          <div className="mb-4">
            <div className="relative w-full">
              <input
                type="password"
                name="newPassword"
                placeholder=" "
                className={`peer w-full px-4 py-0.5 h-14 rounded text-sm bg-bg1 text-white border ${formik.touched.newPassword && formik.errors.newPassword ? 'border-customred' : 'border-transparent'}`}
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="newPassword" className="absolute left-4 text-textGray1 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1">
                New Password
              </label>
            </div>
            {formik.touched.newPassword && formik.errors.newPassword && (
              <p className="text-white bg-[#33142C] p-0.5 rounded-sm text-xsm mt-1">{formik.errors.newPassword}</p>
            )}
          </div>
        )}

        <button
          type="submit"
          className={`w-full py-2 text-bg2 text-xsm rounded transition 
    ${!otpSent
              ? formik.values.email && !formik.errors.email
                ? 'bg-bg4 hover:bg-bg5 text-bg2 '
                : 'bg-bg2 text-bg2'
              : !otpVerified
                ? formik.values.otp.length === 4
                  ? 'bg-bg4 hover:bg-bg5 text-bg2 '
                  : 'bg-bg2 text-bg2'
                : formik.values.newPassword.length >= 8
                  ? 'bg-bg4 hover:bg-bg5 text-bg2 '
                  : 'bg-bg2 text-bg2'
            }`}
        >
          {!otpSent ? 'SEND OTP' : !otpVerified ? 'VERIFY OTP' : 'RESET'}
        </button>


        <p className='text-xsm flex items-center gap-1 text-textGray2 mt-3'>
          <HiMiniExclamationCircle className='text-textGray2' size={15} />
          reset_password_info_message
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;
