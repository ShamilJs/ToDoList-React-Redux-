import React from 'react';

export const Burger = ({ openList, setOpenList }) => {
	const openLeftList = () => {
		if (openList === '' || openList === 'animation-left') setOpenList('animation-right')
		if (openList === 'animation-right') setOpenList('animation-left')
	}

    return (
		<div className="nav__burger"
			onClick={openLeftList}
		>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};