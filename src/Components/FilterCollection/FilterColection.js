import React from 'react';


export const FilterColection = ({ setSelect, todoList, toDoRight }) => {

    const changeSelect = (e) => {
        setSelect(e.target.value);
    };
    
    return(
        <select 
            className={toDoRight ? 'content__filter right_filter' : 'content__filter'}
            onChange={changeSelect}
        >
            {!toDoRight && <option value="Все списки">Все списки</option>}
            {todoList && todoList.map(item => (
                <option 
                    key={item.id}
                    value={item.id}
                >{item.title}
                </option>)
            )}
		</select>
    );
};