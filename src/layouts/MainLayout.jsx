import React, { useState, useEffect } from "react";
import './MainLayout.scss';
import Footer from '../сomponents/Footer.jsx'

export default function MainLayout (props) {
  
    return (
        <div className="layout">
            <header>
            </header> 
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}