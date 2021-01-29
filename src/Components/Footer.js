import React, { Component } from 'react';
import iconFinder from 'src/asset/iconFinder.png';
import { Twitter } from 'react-feather'
import { Facebook } from 'react-feather'
import { Instagram } from 'react-feather'


class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <img className="bottom-logo"
                src={iconFinder} alt="logo" />
                <a href ="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"className="socials">
                  <Twitter size={36} color="lightBlue" />
                </a>
                <a href ="https://www.facebook.com/" target="_blank" rel="noreferrer" className="socials" >
                   <Facebook size={36} color="blue" />
                   
                </a>
                <a href ="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer" className="socials">
                   <Instagram size={36} color="purple"/>
                </a>
                
                <p className="copyright">Copyight 2020 &copy;</p>
                

            </div>

        )
    }
}


export default Footer;