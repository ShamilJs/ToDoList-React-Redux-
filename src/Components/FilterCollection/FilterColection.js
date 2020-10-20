import React from 'react';


export const FilterColection = ({ todoList, toDoRight }) => {
    return(
        <select className={toDoRight ? 'content__filter right_filter' : 'content__filter'}>
            {!toDoRight && <option>Все списки</option>}
			{todoList && todoList.map((item, i) => (<option key={i}>{item[0]}</option>))}
		</select>
    );
};