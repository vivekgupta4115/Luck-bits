import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const LeagueHeader = ({ country, leagueName, isOpen, toggleOpen }) => (
  <div className="flex justify-between items-center bg-headerBgSelected2 px-2 py-1">
    <div className="flex items-center gap-2">
      <img
        src={`https://flagcdn.com/w40/${country.code}.png`}
        alt="country"
        className="w-4 h-3"
      />
      <div className="leading-tight">
        <p className="text-[11px] font-semibold">{country.name}</p>
        <p className="text-[10px] text-hederColor3">{leagueName}</p>
      </div>
    </div>
    <button onClick={toggleOpen}>
      {isOpen ? (
        <ChevronUpIcon className="w-4 h-4 text-hederColor3" />
      ) : (
        <ChevronDownIcon className="w-4 h-4 text-hederColor3" />
      )}
    </button>
  </div>
);

export default LeagueHeader;
