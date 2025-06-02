function LanguageModal({ setIsLanguageOpen, languages, handleLanguageSelect }) {
    return (
      <div className="absolute top-[40px] right-[9.5rem] bg-mainBg px-2 pb-2 pt-2 flex flex-col gap-0.5 h-40 overflow-y-auto hide-scrollbar w-[100px] shadow-2xl rounded-md z-50">
        {languages.map((item, i) => (
          <div
            key={i}
            onClick={() => handleLanguageSelect(item)}
            className="w-full gap-2 bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white cursor-pointer"
          >
            <img className="h-4 w-6 object-cover" src={item.flag} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default LanguageModal;
  