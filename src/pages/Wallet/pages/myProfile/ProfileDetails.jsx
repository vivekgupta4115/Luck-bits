import { useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { RiCalendar2Fill } from "react-icons/ri";
import CustomSelectBox from "../CustomSelectBox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useEffect } from "react";
import apis from "../../../../services/api";
import useApi from "../../../../hooks/useApi";
import Loader from "../../../../reusableComponents/Loader/Loader"
import { toast } from "react-toastify";
const schema = yup.object().shape({
    passportId: yup.string().required("This field is required"),
    city: yup.string().required("This field is required"),
    address: yup.string().required("This field is required"),
    mobile_no: yup
        .string()
        .required("This field is required")
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    currentPassword: yup.string().required("This field is required"),
    gender: yup.string().required("This field is required"),
    country: yup.string().required("This field is required"),
});

const ProfileDetails = () => {
    const userId = localStorage.getItem('userId');
    const { get, post, put, del, loading, error } = useApi();
    const [showPassword, setShowPassword] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        gender: "",
        email: "",
        passportId: "",
        country: "",
        city: "",
        address: "",
        mobile_no: "",
        currentPassword: "",
    });
    const [countryOptions, setCountryOptions] = useState([]);
    const [countries, setCountries] = useState([]);
    const [profile, setProfile] = useState(null);
    const [isEditable, setIsEditable] = useState({
        gender: false,
        country: false,
        passportId: false,
        city: false,
        address: false,
        mobile_no: false,
    });

    useEffect(() => {
        // country 
        get(`${apis?.country}`)
            .then((res) => {
                if (res?.data?.status === 200 && Array.isArray(res?.data?.data)) {
                    const data = res.data.data;
                    setCountries(data);
                    const optionsWithJSX = data.map(c => ({
                        label: (
                            <div className="flex items-center gap-2">
                                <img src={c.image} alt={c.name} className="w-4 h-4 object-cover" />
                                <span>{c.name}</span>
                            </div>
                        ),
                        value: c.name
                    }));
                    setCountryOptions(optionsWithJSX);
                }
            })
            .catch(console.error);

        // profile <details></details>
        get(`${apis?.profile}${userId}`)
            .then((res) => {
                if (res?.data?.status === 200 || res?.data?.status === "200") {
                    // console.log("profile",res)
                    const data = res.data.data;
                    setProfile(data);
                }
            })
            .catch(console.error);
    }, [userId]);
    useEffect(() => {
        if (profile) {
            setFormData({
                username: profile?.username || "",
                firstName: profile?.frist_name || "",
                lastName: profile?.last_name || "",
                birthDate: profile?.dob || "",
                gender: profile?.gender || "",
                email: profile?.email || "",
                passportId: profile?.passport_id || "",
                country: profile?.country || "",
                city: profile?.city || "",
                address: profile?.address || "",
                mobile_no: profile?.mobile_no || "",
                currentPassword: "",
            });
        }
    }, [profile]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            passportId: "",
            city: "",
            address: "",
            mobile_no: "",
            currentPassword: "",
            gender: "",
            country: "",
        },
    });

    const onSubmit = (data) => {
        const payload = {
            ...data, id: userId
        }
        console.log("payload", payload)
        post(`${apis?.updateProfile}`, payload)
            .then((res) => {
                if (res?.data?.status === 200) {
                    toast.success(res?.data?.message)
                }
            }
            )
            .catch(console.error);
    };
    // console.log("profile", profile)

    if (loading) return <Loader />;
    if (error) return <p style={{ color: 'red' }}>{JSON.stringify(error)}</p>;
    return (
        <form
            className="flex flex-col items-end justify-between p-4 overflow-auto hide-scrollbar max-h-[670px] "
            onSubmit={handleSubmit(onSubmit)}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="text-sm text-gray mb-4">
                    <span className="flex items-center gap-1 ">
                        <span className="text-textGray2 text-xsm flex items-center"><FaCircleExclamation className="text-textGray2" /> &nbsp; Eligible for bonus:</span>{" "}
                        <span className={`text-${profile?.bouns_status === "0" ? "red" : "bg4"} text-xsm`}>{profile?.bouns_status === "0" ? "No" : "Yes"}</span>
                    </span>
                </div>
                <div className="w-full bg-cardBg rounded  px-3 py-2">
                    <p className="text-[13px] text-textGray2">Username</p>
                    <p className="text-[14px] text-textGray1 h-5">{profile?.username}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    {/* First Name */}
                    <div className="w-full bg-cardBg rounded px-3 py-2">
                        <p className="text-[13px] text-textGray2">First Name</p>
                        <p className="text-[14px] text-textGray1 h-5">{profile?.frist_name}</p>
                    </div>
                    {/* Last Name */}
                    <div className="w-full bg-cardBg rounded px-3 py-2">
                        <p className="text-[13px] text-textGray2">Last Name</p>
                        <p className="text-[14px] text-textGray1 h-5">{profile?.last_name}</p>
                    </div>
                    {/* Birth date */}
                    <div className="w-full justify-between flex items-center bg-cardBg rounded px-3 py-2">
                        <div className="">
                            <p className="text-[13px] text-textGray2">Birth date</p>
                            <p className="text-[14px] text-textGray1 h-5">{profile?.dob}</p>
                        </div>
                        <div><RiCalendar2Fill size={25} className="text-textGray2" />  </div>
                    </div>
                    {/* Gender */}
                    <div className="w-full">
                        {!isEditable.gender ? (
                            <div
                                className="bg-bg1 rounded p-2 cursor-pointer"
                                onClick={() => setIsEditable(prev => ({ ...prev, gender: true }))}
                            >
                                <p className="text-[13px] text-textGray2">Gender</p>
                                <p className="text-[14px] text-textGray1">{formData.gender}</p>
                            </div>
                        ) : (
                            <>
                                <CustomSelectBox
                                    modalBg="cardBg"
                                    optionBg="bg1"
                                    optionHoverBg="titleBg"
                                    optionH="[200px]"
                                    titleBg="bg1"
                                    title="Gender"
                                    options={["Male", "Female"]}
                                    selected={formData?.gender}
                                    onChange={(val) => {
                                        setSelectedOption(val);
                                        setFormData({ ...formData, gender: val });
                                        setValue("gender", val); // tell react-hook-form about the change
                                    }} placeholder="Select gender"
                                />
                                {errors.gender && (
                                    <p className="bg-redError text-white text-xs p-1 rounded mt-1">
                                        {errors.gender.message}
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                    {/* Email */}
                    <div className="w-full bg-cardBg px-3">
                        <p className="text-[13px] text-textGray2">Email</p>
                        <p className="text-[14px] h-5">{profile?.email}</p>
                    </div>
                    {/* Passport / ID */}
                    <div className="relative w-full">
                        {!isEditable.passportId ? (
                            <div
                                className="bg-bg1 rounded p-2 cursor-pointer"
                                onClick={() => setIsEditable(prev => ({ ...prev, passportId: true }))}
                            >
                                <p className="text-[13px] text-textGray2">Passport / ID</p>
                                <p className="text-[14px] text-textGray1">{formData.passportId}</p>
                            </div>
                        ) : (
                            <>
                                <input
                                    {...register("passportId")}
                                    name="passportId"
                                    id="passportId"
                                    type="text"
                                    placeholder=" "
                                    value={formData.passportId}
                                    onChange={handleChange}
                                    className={`peer w-full px-4 py-0.5 h-14 rounded text-sm bg-bg1 text-white focus:outline-none ${errors.passportId ? "border border-red" : ""
                                        }`}
                                />
                                <label
                                    htmlFor="passportId"
                                    className="absolute left-4 text-textGray2 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1"
                                >
                                    Passport / ID
                                </label>
                                {errors.passportId && (
                                    <p className="bg-redError text-white text-xs p-1 rounded mt-1">
                                        {errors.passportId.message}
                                    </p>
                                )}
                            </>
                        )}
                    </div>

                    {/* Country */}
                    <div className="w-full">
                        {!isEditable.country ? (
                            <div
                                className="bg-bg1 rounded p-2 cursor-pointer"
                                onClick={() => setIsEditable(prev => ({ ...prev, country: true }))}
                            >
                                <p className="text-[13px] text-textGray2">Country</p>
                                <p className="text-[14px] text-textGray1">{formData.country}</p>
                            </div>
                        ) : (
                            <>
                                <CustomSelectBox
                                    modalBg="cardBg"
                                    optionBg="bg1"
                                    optionHoverBg="titleBg"
                                    optionH="[200px]"
                                    titleBg="bg1"
                                    title="Country"
                                    options={countryOptions.map(opt => opt.label)}
                                    selected={
                                        selectedCountry ? (
                                            <div className="flex items-center gap-2">
                                                <img src={selectedCountry.image} alt={selectedCountry.label} className="w-4 h-4 object-contain" />
                                                <span>{selectedCountry.label}</span>
                                            </div>
                                        ) : null
                                    }
                                    onChange={(label) => {
                                        const selected = countryOptions.find(opt => opt.label === label);
                                        setFormData({ ...formData, country: selected.label });
                                        setValue("country", selected.label); // send plain string to form
                                    }}
                                    placeholder="Select country"
                                />

                                {errors.country && (
                                    <p className="bg-redError text-white text-xs p-1 rounded mt-1">
                                        {errors.country.message}
                                    </p>
                                )}
                            </>
                        )}

                    </div>
                    {/* City */}
                    <div className="relative w-full">
                        {!isEditable.city ? (
                            <div
                                className="bg-bg1 rounded p-2 cursor-pointer"
                                onClick={() => setIsEditable(prev => ({ ...prev, city: true }))}
                            >
                                <p className="text-[13px] text-textGray2">City</p>
                                <p className="text-[14px] text-textGray1">{formData.city || ""}</p>
                            </div>
                        ) : (
                            <>
                                <input
                                    {...register("city")}
                                    id="city"
                                    type="text"
                                    placeholder=" "
                                    className={`peer w-full px-4 py-0.5 h-14 rounded text-sm bg-bg1 text-white focus:outline-none ${errors.city ? "border border-red" : ""
                                        }`}
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="city"
                                    className="absolute left-4 text-textGray2 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1"
                                >
                                    City
                                </label>
                                {errors.city && (
                                    <p className="bg-redError text-white text-xs p-1 rounded mt-1">
                                        {errors.city.message}
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                    <div className="relative w-full">
                        {!isEditable.address ? (
                            <div
                                className="bg-bg1 rounded p-2 cursor-pointer"
                                onClick={() => setIsEditable(prev => ({ ...prev, address: true }))}
                            >
                                <p className="text-[13px] text-textGray2">Address</p>
                                <p className="text-[14px] text-textGray1">{formData.address || ""}</p>
                            </div>
                        ) : (
                            <>
                                <input
                                    {...register("address")}
                                    id="address"
                                    type="text"
                                    name="address"
                                    placeholder=" "
                                    className={`peer w-full px-4 py-0.5 h-14 rounded text-sm bg-bg1 text-white focus:outline-none ${errors.address ? "border border-red" : ""
                                        }`}
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="address"
                                    className="absolute left-4 text-textGray2 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1"
                                >
                                    Address
                                </label>
                                {errors.address && (
                                    <p className="bg-redError text-white text-xs p-1 rounded mt-1">
                                        {errors.address.message}
                                    </p>
                                )}
                            </>
                        )}

                    </div>
                    <div className="relative w-full">
                        {!isEditable.mobile_no ? (
                            <div
                                className="bg-bg1 rounded p-2 cursor-pointer"
                                onClick={() => setIsEditable(prev => ({ ...prev, mobile_no: true }))}
                            >
                                <p className="text-[13px] text-textGray2">Phone</p>
                                <p className="text-[14px] text-textGray1">{formData.mobile_no || ""}</p>
                            </div>
                        ) : (
                            <>
                                <input
                                    {...register("mobile_no")}
                                    id="mobile_no"
                                    type="text"
                                    name="mobile_no"
                                    placeholder=" "
                                    className={`peer w-full px-4 py-0.5 h-14 rounded text-sm bg-bg1 text-white focus:outline-none ${errors.mobile_no ? "border border-red" : ""
                                        }`}
                                    value={formData.mobile_no}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="mobile_no"
                                    className="absolute left-4 text-textGray2 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1"
                                >
                                    Phone
                                </label>
                                {errors.mobile_no && (
                                    <p className="bg-redError text-white text-xs p-1 rounded mt-1">
                                        {errors.mobile_no.message}
                                    </p>
                                )}
                            </>
                        )}

                    </div>
                    {/* <PhoneNumberInput register={register} errors={errors} /> */}
                </div>
                <div className="w-full mt-3 bg-bg1 h-[0.1px]"></div>
                <div className="bg-redError  text-xsm text-white py-0.5 mt-2 rounded-md">
                    Enter your password to save changes
                </div>
                <div className="relative w-full mt-1">
                    <input
                        id="currentPassword"
                        type={showPassword ? "text" : "password"}
                        name="currentPassword"
                        placeholder=" "
                        className="peer w-full px-4 py-0.5 h-14 rounded text-sm bg-bg1 text-white focus:outline-none pr-10"
                        value={formData.currentPassword}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="currentPassword"
                        className="absolute left-4 text-textGray2 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1"
                    >
                        Current Password
                    </label>

                    {formData?.currentPassword && (
                        <span
                            className="absolute right-4 top-7 transform -translate-y-1/2 text-white cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </span>
                    )}
                    {errors.currentPassword && (
                        <p className="bg-redError text-white text-xs p-1 rounded mt-1">
                            {errors.currentPassword.message}
                        </p>
                    )}
                </div>
            </form>
            <div className="flex justify-end mt-20 mb-10">
                <button
                    type="submit"
                    className={`px-32 py-2 text-xsm rounded-md ${Object.keys(errors).length === 0 ? "bg-bg4 text-white cursor-pointer" : "bg-bg2 text-textGray2 cursor-not-allowed"}`}
                >
                    SAVE CHANGES
                </button>


            </div>
        </form>
    );
};

export default ProfileDetails;
