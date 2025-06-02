import "./Loader.css";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-faded-gray">
      <div className="loader-container">
        <div className="loader"></div>
        <div className="loader-dot"></div>
        <div className="w-10 h-10 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
