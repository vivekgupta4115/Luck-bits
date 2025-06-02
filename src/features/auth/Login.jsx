import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import ForgotPassword from './ForgotPassword';
import apis from '../../services/api';
const loginEndpoint = apis?.login;

const Login = ({ setIsOpenLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgetOpen, setIsForgetOpen] = useState(false);

  const LoginSchema = Yup.object().shape({
    loginId: Yup.string().required('loginId is required'),
    password: Yup.string().min(6, 'Password too short').required('Password is required'),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    // console.log("dfsdfsdf")
    try {
      const res = await axios.post(loginEndpoint, values);
      if (res?.data?.status === 200) {
        localStorage.setItem("userId", res?.data?.user?.id)
        toast.success(res?.data?.message);
        setIsOpenLogin(false)
      }
      // console.log("response",res)
      // redirect or close modal
    } catch (error) {

      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      {!isForgetOpen ? (
        <div className="bg-mainBg h-[80%] w-full max-w-sm rounded-lg shadow-lg p-5 relative">
          <button onClick={() => setIsOpenLogin(false)} className="absolute top-4 right-4 text-3xl text-textGray2 hover:text-white ">&times;</button>

          <div className="text-3xl font-bold mb-4 flex items-center gap-1">
            <img className='h-6' src="favicon.png" alt="logo not found" />
          </div>

          <div className='w-full border-bg2 border-b-[0.5px]'></div>
          <p className="text-xsm mb-1 text-textGray1 mt-3">Already have an account?</p>
          <h2 className="text-sm mb-4 text-white">SIGN IN, WE ARE WAITING FOR YOU</h2>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
            validateOnChange
          >
            {({ handleChange, handleSubmit, values, errors, touched, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="loginId"
                      id="loginId"
                      placeholder=" "
                      className={`peer w-full px-4 py-0.5 h-14 rounded text-sm bg-bg1 text-white border ${errors.loginId && touched.loginId ? 'border-customred' : 'border-transparent'} focus:outline-none`}
                      value={values.loginId}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="loginId"
                      className="absolute left-4 text-textGray1 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1"
                    >
                      Email / Username
                    </label>
                  </div>
                  {errors.loginId && touched.loginId && <p className="text-white bg-[#33142C] p-0.5 rounded-sm text-xsm mt-1">{errors.loginId}</p>}
                </div>

                <div className="mb-4 relative">
                  <div className="relative w-full">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      placeholder=" "
                      className={`peer w-full px-4 py-0.5 h-14 rounded text-sm bg-bg1 text-white border ${errors.password && touched.password ? 'border-customred' : 'border-transparent'} focus:outline-none`}
                      value={values.password}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-4 text-textGray1 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      className="absolute right-3 top-4 text-gray"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </button>
                  </div>
                  {errors.password && touched.password && <p className="text-white bg-[#33142C] p-0.5 rounded-sm text-xsm mt-1">{errors.password}</p>}
                </div>

                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    className="mr-2 appearance-none h-4 w-4 border border-gray rounded bg-bg1 checked:bg-bg4"
                  />
                  <label className='text-xsm text-textGray1'>Remember me</label>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-2 bg-bg4 hover:bg-bg5 text-black text-xsm rounded transition">
                  {isSubmitting ? 'Signing in...' : 'SIGN IN'}
                </button>
              </form>
            )}
          </Formik>
          <button onClick={() => setIsForgetOpen(true)} className="mt-8 text-center text-[15px] hover:text-white text-textGray1 cursor-pointer hover:underline">
            FORGOT YOUR PASSWORD?
          </button>
        </div>
      ) : (
        <ForgotPassword setIsOpenLogin={setIsOpenLogin} setIsForgetOpen={setIsForgetOpen} />
      )}
    </div>
  );
};

export default Login;
