import React from 'react';


export const FilterColection = ({ todoList, toDoRight, value, setValue }) => {
    

    const handleChange = event =>  {
        setValue(event.target.value);
        // console.log(value);
    }

    return(
        <select className={toDoRight ? 'content__filter right_filter' : 'content__filter'}
                value={value}
                onChange={handleChange}
        >
            {!toDoRight && <option value="">Все списки</option>}
            {todoList && todoList.map(item => (<option 
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.title}
                                                </option>)
                                    )
            }
		</select>
    );
};