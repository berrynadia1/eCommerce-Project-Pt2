import React, { Component } from 'react';
import iconFinder from '../asset/iconFinder.png';
import { Twitter } from 'react-feather'
import { Facebook } from 'react-feather'
import { Instagram } from 'react-feather'


class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="bottom-logo">
                <img src={iconFinder} alt="logo"/></div>
                <p className="copyright">Nadia's ShoeWorld 2020 &copy;</p>
                <a href ="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"className="socials">
                  <Twitter size={36} color="lightBlue" />
                </a>
                <a href ="https://www.facebook.com/" target="_blank" rel="noreferrer" className="socials" >
                   <Facebook size={36} color="blue" />   
                </a>
                <a href ="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer" className="socials">
                   <Instagram size={36} color="purple"/>
                </a>
            </div>

        )
    }
}


export default Footer;