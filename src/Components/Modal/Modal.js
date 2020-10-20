import React from 'react';
import { useDispatch } from 'react-redux';
import { hideModalSuccessful } from '../../redux/actions';

export const Modal = ({ messageSide }) => {

	const dispatch = useDispatch();
	
     return (
        <div className="modal__add modal">
			<div className="oveflow">
	 			<div className="modal__title">{messageSide}</div>
				<div className="modal__button button">
					<button 
						className="button__yes btn"
						onClick={() => dispatch(hideModalSuccessful(''))}
					>ОК</button>
				</div>
				<div 
					className="modal__close"
					onClick={() => dispatch(hideModalSuccessful(''))}
				>X</div>
			</div>	
		</div>
    );
};