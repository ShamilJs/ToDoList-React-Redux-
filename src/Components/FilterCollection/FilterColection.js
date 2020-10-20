import React from 'react';


export const FilterColection = ({ todoList }) => {
    return(
        <select className="content__filter">
			<option>Все списки</option>
			{todoList && todoList.map((item, i) => (<option>{item}</option>))}
		</select>
    );
};