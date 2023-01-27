import './Header.scss'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import logo  from "../../../assets/img/bag.png"
const Header = () => {
  return (
    <div className='main-header'>
      <div className="logo">
        <img src={logo}/>
        eBaazar</div>
      <div className="tabs">
        <div className="tab-item"><DashboardIcon/>Dashboard</div>
        <div className="tab-item"><ReceiptOutlinedIcon/>Billing</div>
        <div className="tab-item"><InventoryIcon/>Products</div>
        <div className="tab-item"><GroupsIcon/>Customers</div>
        <div className="tab-item"><LocalShippingIcon/>Suppliers</div>
      </div>
    </div>
  );
};

export default Header;
