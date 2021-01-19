import React from 'react';
import Nav from './nav';
import Footer from './Footer';


export default function Layout(props) {
    console.log(props.children)
    return <div>
        <Nav>
        {props.children}
        </Nav>
        <Footer></Footer>
    </div>
}