import React from 'react';
import { useDispatch } from 'react-redux';
import { sortByData, sortByAlphabet } from '../../redux/actions';

export const SortButton = ({ title, side, setAlphabet}) => {
    const dispatch = useDispatch();


    return (
        <button 
			className={!side ? 'content__sort relative' : 'content__sort'}
			onClick={() => {
                if (side) dispatch(sortByData());
                else {
                    dispatch(sortByAlphabet());
                    setAlphabet(true);
                };
            }}
		>
			<p className="sort__title">{title}</p>
			<img src="./img/sort.png" alt="sort"/>
		</button>
    );
};