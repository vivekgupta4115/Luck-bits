
const PhoneNumberInput = ({ register, errors }) => {
  return (
    <div className="relative w-full">
      <input
        {...register("phoneNumber")}
        type="text"
        placeholder=" "
        className={`peer w-full px-4 py-0.5 h-14 rounded text-sm bg-bg1 text-white focus:outline-none ${errors.phoneNumber ? "border border-customred" : ""}`}
      />
      <label
        htmlFor="phoneNumber"
        className="absolute left-4 text-textGray2 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1"
      >
        Phone Number
      </label>
      {errors.phoneNumber && (
        <p className="bg-customred text-white text-xs p-1 rounded mt-1">
          {errors.phoneNumber.message}
        </p>
      )}
    </div>
  );
};

export default PhoneNumberInput
