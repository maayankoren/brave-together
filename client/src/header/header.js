import React,{useState} from 'react'
import classes from "./Header.module.css"
import {Navbar,Container,Nav} from 'react-bootstrap'
import links from './links.json'
import icon from './icon.svg'
import user from './user.svg'
import miniLogo from './miniLogo.svg'

const Header = () => {
    const [isSmallScreen,setIsSmallScreen] = useState(window.innerWidth <= 992 ? true : false)

    const isAuthenticated = false; //need to figure out where do we get the user data from ? (context, localstorage , etc ...)
    const userName = "יוסי"

    const handleResize =()=>{
        if(window.innerWidth <= 992){
            setIsSmallScreen(true)
        }
        else{
            setIsSmallScreen(false)
        }
    }

    window.addEventListener('resize',handleResize)


    const renderLinks = ()=>{
        return links.map((link)=>{
            return (
                <Nav.Link className={classes.navLink} href={link.link}>{link.title}</Nav.Link>
            )
        })
    }

  return (
    <div>
        <Navbar className={classes.navbar} expand="lg">
            <Container fluid>
                <Navbar.Brand className={classes.brand}>
                    <img className={classes.userIcon} src={user} alt="User"/>
                    <h6 className={classes.helloText}>{isAuthenticated ? `שלום ${userName}` : "שלום אורח"}</h6>
                </Navbar.Brand>
                {isSmallScreen && 
                    <Navbar.Brand className='m-auto'>
                        <img src={miniLogo} className={classes.miniLogoIcon} alt="logo"/>
                    </Navbar.Brand>
                }
                <Navbar.Toggle className={classes.toggler} aria-controls="navbarScroll" />
                <Navbar.Collapse className={classes.navbarCollapse} id="responsive-navbar-nav">
                <Nav
                    className="m-auto"
                    style={{ padding:"1rem" }}
                >
                   {renderLinks()}
                </Nav>
                </Navbar.Collapse>
                {!isSmallScreen &&
                    <Navbar.Brand >
                      <img src={icon} className={classes.logoIcon} alt="Logo"/>
                    </Navbar.Brand>
                }
            </Container>
        </Navbar>
    </div>
  )
}

export default Header