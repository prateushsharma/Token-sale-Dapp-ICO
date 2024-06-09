import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { ShowUserDetails } from '../Utils/index';

const Header = ({ address, connectWallet }) => {
  const [account, setAccount] = useState(null);
  const [details, setDetails] = useState(null);
  const [check, setCheck] = useState(false);

  const handleConnectWallet = async () => {
    const signer = await connectWallet();
    const account = await signer.getAddress();
    if (account) {
      setAccount(account.toString());
      console.log(account);
    }
  };

  const showDetails = async () => {
    setCheck(true);
    const details = await ShowUserDetails();
    setDetails(details);
  };

  const menuList = [
    { menu: "Home", link: "#" },
    { menu: "Service", link: "#service" },
    { menu: "About", link: "#about" },
    { menu: "Token", link: "#token" },
    { menu: "Team", link: "#team" },
    { menu: "Faq", link: "#faq" },
    { menu: "Contact", link: "#contact" },
  ];

  return (
    <>
      <div className="header_wrap fixed-top">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <a
              href="#home_section"
              className="navbar-brand page-scroll"
            >
              {/* <img src="assets/images/logo.png" alt="logo" className="logo_light" />
              <img src="assets/images/logo_darl.png" alt="logo" className="logo_dark" /> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <BiMenu />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                {menuList.map((menu, i) => (
                  <li key={i} className="nav-item">
                    <a href={menu.link} className="nav-link">
                      {menu.menu}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="navbar-nav nav_btn align-items-center">
                <li className="nav-item">
                  <a onClick={showDetails} className="btn btn-default btn-radius nav_item">
                    <small className="new-color"> {details ? `My Tokens = : ${details[0].toString()}` : 'Check my Tokens'}</small>
                  </a>
                  
                </li>
              </ul> 
              


              

              <ul className="navbar-nav nav_btn align-items-center">
                <li className="nav-item">
                  {address ? (
                    <a onClick={ShowUserDetails} className="btn btn-default btn-radius nav_item">
                      <small className="new-color">{address.slice(0, 15)}...</small>
                    </a>
                  ) : (
                    <a onClick={handleConnectWallet} className="btn btn-default btn-radius nav_item">
                      <small className="new-color">
                        {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
                      </small>
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
