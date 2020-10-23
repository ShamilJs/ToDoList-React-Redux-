import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { changeCompleteState, changeStatusCollection } from '../../redux/actions';


export const ListItem = ({ todoList, titleCollection }) => {
    const dispatch = useDispatch();
    // const selector = useSelector(state => state.collections);
	// const collectionActive = selector.collectionActive;

    const result = todoList.filter(item =>item.titleToDo === titleCollection);
	const [count, setCount] = useState([]);
	let value = [];
	let status = {title: '', status: 1};

	const changeStatusList = () => {
		
		if (!result.length || !count.length) {
			return;
		} else {
			let temp = 0;
			result.forEach(item => {
				status.title = item.titleToDo;
				if (item.complete) {
					temp ++;
					if (temp === result.length) {
						temp = 0;
						dispatch(changeStatusCollection(status.title, 2));
						return;
					}
				}
				dispatch(changeStatusCollection(status.title, 1));
			});
		}
	};

    const changeStatus = (e) => {
       	result.forEach(element => {
           	if (element.id === e.target.name) {
				dispatch(changeCompleteState(!element.complete, e.target.name));
				value.push(!element.complete);
			} 
		});
		setCount(value);
    };
	useEffect( changeStatusList, [count]);


    return (
        <ul className="content__todo todo-list">
            {result.map(item => (
                <li className="todo-item" key={item.id}>
                    <div className="todo-item__title">
                        <div className={!item.fast ? 'todo-status fast' : 'todo-status'}></div>
                     <span className={!item.complete ? 'text-todo' : 'text-todo text-through'}>{item.title}</span> 
                    </div>
                    <div className="todo-buttons">
                        <div className="todo-date">{item.date + ' ' + item.time}</div>
                        <div className="todo-btn">
                            <button 
                                className="todo-complete"
                                onClick={changeStatus}
                            >
                                <img 
                                    src={!item.complete ? './img/uncheck.png' : './img/check_.png'}
                                    name={item.id} alt='chek'
                                />
                            </button>
                            <button className="todo-remove"></button>
                        </div>
                    </div>
                </li>
            ))}
		</ul>
    );
};