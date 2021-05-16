import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';

const Nav = (props) => {
    const userSignin = useSelector(state => state.userReducers);
    //console.log(totalQuantities);
    const dispatch = useDispatch();
    const onClickHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
        dispatch({ type: 'CLEAR' });
        //props.history.push('/signin');
    }
    return (
        <div className="nav">
            <div className="nav__container">
                <div className="nav__left">
                    <Link to="/MarketPlace"><img src="/images/logo.png" alt="logo" /> </Link>
                </div>
                 
                <div class="rightHeader mobileDisplayNone">
                    <div class="menuItem  ">HOME</div>
                    <div class="menuItem  ">ABOUT</div>
                    <div class="menuItem  ">BLOG</div>
                    <div class="menuItem activeMenuItem ">MARKETPLACE</div>
                        {userSignin.userInfo ? <div class="menuItem" onClick={onClickHandler}>Log out</div> :
                         <div class="menuItem  "><Link style={{color:'#FFF'}} to="/signin">LOGIN</Link></div>}
                    <div id="signup" class="menuItem menuSphere flexBox-center signup">SIGNUP</div>
                    </div>

            </div>

        </div>
    )
}

export default Nav