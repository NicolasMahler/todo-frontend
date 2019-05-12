import React from 'react';
import './AddMenu.css';

export default function AddMenu() {
    return (
        <React.Fragment>
            <div className="menu-container">
                <nav className="menu">
                    <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
                    <label className="menu-open-button" for="menu-open">
                        <span className="hamburger hamburger-1"></span>
                        <span className="hamburger hamburger-2"></span>
                        <span className="hamburger hamburger-3"></span>
                    </label>
                    <button type="button" className="menu-item"> <i className="fa fa-id-card"></i> </button>
                    <button dsabled={true} type="button" className="menu-item"> <i className="fa fa-cogs"></i> </button>
                    <button type="button" className="menu-item"> <i className="fa fa-plus"></i> </button>
                </nav>
            </div>
        </React.Fragment>
    );
}