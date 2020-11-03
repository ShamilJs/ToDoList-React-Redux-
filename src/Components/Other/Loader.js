import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Loader = ({ loader }) => {
    return (
        <CSSTransition
			in={loader}
			timeout={{
				enter: 200,
				exit: 100
			}}
			classNames={'animation_loader'}
			mountOnEnter
			unmountOnExit
		>
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
        </CSSTransition>
    )
}