import React from 'react'
import { BackTop } from 'antd';



function AppFooter() {
    return (
        <div className='container-fluid'>
            <div className='footer'>
                <div className='logo'>
                    <i className='fas fa-bolt'></i>
                    <a href='www.google.com'>Tech </a>
                </div>
                <ul className='socials'>
                    <li><a href='https://www.facebook.com' target="_blank" rel="noopener"><i className='fab fa-facebook'></i></a></li>
                    <li><a href='https://www.twitter.com' target="_blank" rel="noopener"><i className='fab fa-twitter'></i></a></li>
                    <li><a href='https://www.instagram.com' target="_blank" rel="noopener"><i className='fab fa-instagram'></i></a></li>
                    <li><a href='https://www.linkedin.com' target="_blank" rel="noopener"><i className='fab fa-linkedin'></i></a></li>
                    <li><a href='https://www.facebook.com' target="_blank" rel="noopener" ><i className='fab fa-facebook'></i></a></li>
                </ul>
                <div className='copyright'>
                    Copyright &copy; <span id="year">2022 TECH</span>
                </div>
                <BackTop>
                    <div className='goTop'><i className='fas fa-arrow-circle-up'></i></div>
                </BackTop>
            </div>
        </div>
    )
}

export default AppFooter;