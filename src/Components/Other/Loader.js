import React from 'react';


export const Loader = () => {
    return (
        <div className="modal__add loader-box">
            <div className="loader__title">
            	<p className="loader__title-title">ToDo List</p>
            </div>
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </div>
    )
}