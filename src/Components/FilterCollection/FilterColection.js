import React from 'react';


export const FilterColection = ({ setSelect, toDoRight }) => {
   
    return(
        <select 
            className={toDoRight ? 'content__filter right_filter' : 'content__filter'}
            onChange={(e) => setSelect(e.target.value)}
        >
            <option value="Все списки">Все списки</option>
            <option value="Неисполненные">Неисполненные</option>
            <option value="Исполненные">Исполненные</option>
		</select>
    );
};