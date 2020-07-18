import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.component';


class Navbar extends React.Component{
    state = {
       modalOpen: false
    }
  
    handleModalOpen = () => {
       this.setState((prevState) => {
          return{
             modalOpen: !prevState.modalOpen
          }
       })
    }

    render(){
    return (
        <div>
        <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>

        <a className='navbar-brand' href='/'>
          <img className="ui small image" src="img/logo_1.png" width='100' height='50' alt='logo is missing' />
        </a>

        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse sticky-top' id='collapsibleNavbar'>
          <ul className='navbar-nav mr-auto' >
            <li className='nav-item'>
              <Link to='/ourProducts' className='nav-link' ><b>Our Products</b></Link>
            </li>
            <li className='nav-item'>
              <Link to='/ourCompany' className='nav-link'><b>Our Company</b></Link>
            </li>
            <li className='nav-item'>
              <Link to='/help' className='nav-link' ><b>Help</b></Link>
            </li>
            <li className='nav-item'>
              <Link to='/viewProfile' className='nav-link' ><b>Offers</b></Link>
            </li>
          </ul>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item '>
              <Link to='/' className='nav-link'>
                <i className="white globe icon">EN</i></Link>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      
            <li className='nav-item'>
                <a onClick={this.handleModalOpen} className='nav-link'>
                  <i className="white user outline icon">Login</i>
                </a>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            <li className='nav-item'>
              <Link to='/CustomerSignUp' className='nav-link' ><b>Sign up</b></Link>
            </li>
          </ul>
        </div>

      </nav>
       <Login
       modalOpen={this.state.modalOpen}
       handleModalOpen={this.handleModalOpen}
    />
    </div>
    )
}
}

export default Navbar;