import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token');

    if (token) {
      this.setState({ isSignedIn: true });
    }

    else {
      this.setState({ isSignedIn: false });
    }
  }

  render() {

    let data = {
      "header": {
        "color": "blue",
        "logo": "https://brave-together.com/wp-content/uploads/2020/04/%D7%A2%D7%95%D7%AA%D7%A7-%D7%A9%D7%9C-Copy-of-%D7%9C%D7%95%D7%92%D7%95-%D7%97%D7%93%D7%A9-%D7%A8%D7%A7%D7%A2-%D7%A9%D7%A7%D7%95%D7%A3.png",
        "links": [
          {
            "name": "",
            "diaplayName": "התחבר",
            "rout": "/login",
            "color": "white"
          },
          {
            "name": "",
            "diaplayName": "התנתק",
            "rout": "/logout",
            "color": "white"
          },
          {
            "name": "",
            "diaplayName": "בית",
            "rout": "/",
            "color": "white"
          },
          {
            "name": "",
            "diaplayName": "עיצוב ציטוט",
            "rout": "/",
            "color": "white"
          },
          {
            "name": "",
            "diaplayName": "הוספת סיפור",
            "rout": "/",
            "color": "white"
          },
          {
            "name": "",
            "diaplayName": "אודות",
            "rout": "/about",
            "tooltip": "עלינו...",
            "color": "white"
          },],
      },
    }

    return (
      <div className="header-container">
        <nav className="navbar navbar-expand-lg">
          <ul>
            <li className="nav-item">
              <NavLink className="nav-link link-dark" to={data.header.links[0].rout}>
                {data.header.links[0].diaplayName}
              </NavLink>
            </li>
            {/* // Logout button:
            <li className="nav-item">
              <NavLink className="nav-link link-dark" to={headerData.header.links[1].rout}>
                {headerData.header.links[1].diaplayName}
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link link-dark" to={data.header.links[2].rout}>
                {data.header.links[2].diaplayName}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link-dark" to={data.header.links[3].rout}>
                {data.header.links[3].diaplayName}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link-dark" to={data.header.links[4].rout}>
                {data.header.links[4].diaplayName}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link-dark" to={data.header.links[5].rout}>
                {data.header.links[5].diaplayName}
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="nav-item">
              <NavLink to="/">
                <img src={data.header.logo} alt="לוגו" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Header;
