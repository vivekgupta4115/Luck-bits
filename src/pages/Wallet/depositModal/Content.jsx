// Content.jsx
import { RxCross2 } from "react-icons/rx";
import ProfileDetails from "../pages/myProfile/ProfileDetails";
import ChangePassword from "../pages/myProfile/ChangePassword";
import TransactionHistory from "../pages/balanceManagement/TransactionHistory";
import Info from "../pages/balanceManagement/Info";
import Withdraw from "../pages/balanceManagement/Withdraw";
import Deposit from "../pages/balanceManagement/Deposit";
import All from "../pages/betHistory/All";
import CashedOut from "../pages/betHistory/CashedOut";
import Lost from "../pages/betHistory/Lost";
import LostReturn from "../pages/betHistory/LostReturn";
import OpenBets from "../pages/betHistory/OpenBets";
import Returned from "../pages/betHistory/Returned";
import Won from "../pages/betHistory/Won";
import WonReturn from "../pages/betHistory/WonReturn";
import SportBonuses from "../pages/bonuses/SportBonuses";
import CasinoBonuses from "../pages/bonuses/CasinoBonuses";
import BonusHistory from "../pages/bonuses/BonusHistory";
import PromoCode from "../pages/bonuses/PromoCode";
import Inbox from "../pages/messages/Inbox";
import Sent from "../pages/messages/Sent";
import New from "../pages/messages/New";

const Content = ({ section, setIsDepositModal }) => {
  const renderContent = () => {
    switch (section) {
      case 'Deposit':
        return <Deposit />;
      case 'Withdraw':
        return <Withdraw />;
      case 'Personal Details':
        return <ProfileDetails />;
      case 'Change Password':
        return <ChangePassword />;
      case 'Transaction History':
        return <TransactionHistory />;
      case 'Info':
        return <Info />;
      case 'All':
        return <All />;
      case 'Cashed Out':
        return <CashedOut />;
      case 'Lost':
        return <Lost />;
      case 'Lost Return':
        return <LostReturn />;
      case 'Open Bets':
        return <OpenBets />;
      case 'Returned':
        return <Returned />;
      case 'Won':
        return <Won />;
      case 'Won Return':
        return <WonReturn />;
      case 'Sport Bonuses':
        return <SportBonuses />;
      case 'Casino Bonuses':
        return <CasinoBonuses />;
      case 'Bonus History':
        return <BonusHistory />;
      case 'Promo Code':
        return <PromoCode />;
      case 'Inbox':
        return <Inbox />;
      case 'Sent':
        return <Sent />;
      case 'New':
        return <New />;
      default:
        return <p>Select an option from the sidebar</p>;
    }
  };

  return (
    <div className="flex-1 bg-mainBg">
      <div className="flex items-center justify-between bg-bg2 p-3">
        <h1 className="text-sm">{section}</h1>
        <h1 onClick={() => setIsDepositModal(false)} className="text-2xl text-lightGray hover:text-white"><RxCross2 /></h1>
      </div>
      {renderContent()}
    </div>
  );
};

export default Content;
