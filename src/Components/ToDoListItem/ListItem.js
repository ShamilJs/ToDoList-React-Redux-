import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCompleteState } from '../../redux/actions';


export const ListItem = ({ todoList }) => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.collections.collectionActive);
    const result = todoList.filter(item =>item[4] === selector);
     
    const changeStatus = (e) => {
       	result.forEach(element => {
           	if (element[6] === e.target.name) {
            	dispatch(changeCompleteState(!element[5], e.target.name));
           	}
      	});
    };

    return (
        <ul className="content__todo todo-list">
            {result.map(item => (
                <li className="todo-item" key={item[6]}>
                    <div className="todo-item__title">
                        <div className={!item[1] ? 'todo-status fast' : 'todo-status'}></div>
                     <span className={!item[5] ? 'text-todo' : 'text-todo text-through'}>{item[0]}</span> 
                    </div>
                    <div className="todo-buttons">
                        <div className="todo-date">{item[2] + ' ' + item[3]}</div>
                        <div className="todo-btn">
                            <button 
                                className="todo-complete"
                                onClick={changeStatus}
                            >
                                <img src={!item[5] ? './img/uncheck.png' : './img/check.png'} name={item[6]} alt='chek'/>
                            </button>
                            <button className="todo-remove"></button>
                        </div>
                    </div>
                </li>
            ))}
		</ul>
    );
};