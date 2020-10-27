import React from 'react';


export const FilterColection = ({ setSelect, toDoRight }) => {

    const changeSelect = (e) => {
        setSelect(e.target.value);
    };
    
    return(
        <select 
            className={toDoRight ? 'content__filter right_filter' : 'content__filter'}
            onChange={changeSelect}
        >
            <option value="Все списки">Все списки</option>
            <option value="Неисполненные">Неисполненные</option>
            <option value="Исполненные">Исполненные</option>
            
            {/* {todoList && todoList.map(item => (
                <option 
                    key={item.id}
                    value={item.id}
                >{item.title}
                </option>)
            )} */}
		</select>
    );
};