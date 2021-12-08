import React, { Component, Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "../../asset/CSS/custom.css";
import "../../asset/CSS/bootstrap.min.css";

class TopNavbar extends Component {
  constructor(props) {
    super();
    this.state = {
      navBartitle: "navtitle",
      navBarBackground: "navBackground",
      navVariant: "dark",
      navBarItem: "navBarItems",
      pageTitle: props.title,
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBartitle: "navtitlescroll",
        navBarBackground: "navBackgroundscroll",
        navBarItem: "navBarItemsscroll",
        navVariant: "light",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBartitle: "navtitle",
        navBarBackground: "navBackground",
        navBarItem: "navBarItems",
        navVariant: "dark",
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
        <Navbar
          className={this.state.navBarBackground}
          collapseOnSelect
          fixed="top"
          expand="lg"
          variant="dark"
        >
          <Container>
            <Navbar.Brand className={this.state.navBartitle}>
              <NavLink className="reactproject" to="/">
                REACT PROJECT
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link>
                  {" "}
                  <NavLink
                    exact
                    activeStyle={{ color: "#f1f107" }}
                    className={this.state.navBarItem}
                    to="/"
                  >
                    Home
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    exact
                    activeStyle={{ color: "#f1f107" }}
                    className={this.state.navBarItem}
                    to="/about"
                  >
                    About
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    exact
                    activeStyle={{ color: "#f1f107" }}
                    className={this.state.navBarItem}
                    to="/service"
                  >
                    Service
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    exact
                    activeStyle={{ color: "#f1f107" }}
                    className={this.state.navBarItem}
                    to="/allcourse"
                  >
                    Courses
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    exact
                    activeStyle={{ color: "#f1f107" }}
                    className={this.state.navBarItem}
                    to="/allportfolio"
                  >
                    Portfolio
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    exact
                    activeStyle={{ color: "#f1f107" }}
                    className={this.state.navBarItem}
                    to="/contact"
                  >
                    Contact us
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavbar;
