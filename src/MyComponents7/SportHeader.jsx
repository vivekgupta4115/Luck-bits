import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

const SportHeader = ({ name, iconColor, matchCount, isOpen, toggleOpen }) => (
  <div className="flex justify-between items-center bg-headerBg px-2 py-1 font-semibold">
    <div className="flex items-center gap-2">
      <GlobeAltIcon className={`w-4 h-4 ${iconColor}`} />
      <span>{name}</span>
    </div>
    <div className="flex items-center gap-1">
      <span>{matchCount}</span>
      <button onClick={toggleOpen}>
        {isOpen ? (
          <ChevronUpIcon className={`w-4 h-4 ${iconColor}`} />
        ) : (
          <ChevronDownIcon className={`w-4 h-4 ${iconColor}`} />
        )}
      </button>
    </div>
  </div>
);

export default SportHeader;
