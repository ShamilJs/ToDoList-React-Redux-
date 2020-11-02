import React from 'react';


export const FilterColection = ({ setSelect }) => {
   
    return(
        <select className='content__filter'
            onChange={(e) => setSelect(e.target.value)}
        >
            <option value="Все списки">Все списки</option>
            <option value="Неисполненные">Неисполненные</option>
            <option value="Исполненные">Исполненные</option>
		</select>
    );
};