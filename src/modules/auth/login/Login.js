import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Login.scss";
import { useState } from "react";
const Login = () => {
  const MSG_TITLE = "Welcome Back!";
  const LOGIN_MSG_TITLE = 'Hello Friend';
  const LOGIN_MSG_MESSAGE = 'Enter your personal details and continue your journey with us.'
  const MSG_MESSAGE =
    "To Keep connected with us please login with your personal info.";
  const MSG_ACTION_BUTTON = "SIGN IN";
  const ACTION_TITLE_1 = "Create Account";
  const ACTION_TITLE_2 = 'Sign In your account'
  const [animation,setAnimation]= useState(false);
  const [isTxr,setIsTxr] = useState(false);
  const ToggleIsTxr = ()=>{
    setIsTxr(!isTxr);
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
    }, 1500);
  }

  return (
    <div className="main-login">
      <div className="wrapper">
        <div className={`message ${isTxr?'is-txr':' '} ${animation?"is-gx":' '} ${!isTxr?'is-txl':' '}`}>
        <div className={`top-circle ${isTxr?'is-txr':''}`}></div>

          <div className={`switch-cnt ${isTxr?'is-hidden':''}`}>
          <div className="title">{MSG_TITLE}</div>
          <div>{MSG_MESSAGE}</div>
          </div>
          
          <div className={`switch-cnt ${!isTxr?'is-hidden':''}`}>
          <div className="title">{LOGIN_MSG_TITLE}</div>
          <div>{LOGIN_MSG_MESSAGE}</div>
          </div>
          <button onClick={ToggleIsTxr}>{MSG_ACTION_BUTTON}</button>
          <div className={`bottom-circle ${isTxr?'is-txr':''}`}></div>
        </div>
        <div className={`action a ${isTxr?'is-txl-cnt':''}`}>
          <div className="title">{ACTION_TITLE_1}</div>
          <div className="social-icons">
            <FacebookOutlinedIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
          <form>
            <input />
            <input />
            <input />
            <button>{MSG_ACTION_BUTTON}</button>
          </form>
        </div>
        <div className={`action b ${isTxr?'is-txl-cnt':''} ${!isTxr?'is-txr-cnt':''}`}>
          <div className="title">{ACTION_TITLE_2}</div>
          <div className="social-icons">
            <FacebookOutlinedIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
          <form>
            <input />
            <input />
            <input />
            <button>{MSG_ACTION_BUTTON}</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
