import React from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { hideModalSuccessful } from '../../redux/actions';

export const Modal = ({ messageSide, modal }) => {

	const dispatch = useDispatch();
     return (
		<CSSTransition
			in={modal}
			timeout={200}
			classNames={'animation_modal'}
			mountOnEnter
			unmountOnExit
		>
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
		</CSSTransition>
    );
};