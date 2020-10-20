import React from 'react';
import { CollectionToDo } from './Components/CollectionToDo/CollectionToDo';
import './style.css';
// import './App.css';

function App() {
	return (
		<>
		<header className="header">
			<p className="header__title">ToDo List</p>
		</header>
		<main className="main">
			<CollectionToDo/>
			
			{/* <div className="list-right list">
				<div className="list-right__content content">
					<span className="content__title">Дела на неделю</span>
					<ul className="content__todo todo-list">
						<li className="todo-item">
							<div className="todo-item__title">
								<div className="todo-status fast"></div>
								<span className="text-todo">Купить МиниКупер</span>
							</div>
							<div className="todo-buttons">
								<div className="todo-date">16.10.2020</div>
								<div className="todo-btn">
									<button className="todo-complete">
										<img src="./img/uncheck.png"/>
									</button>
									<button className="todo-remove"></button>
								</div>
							</div>
						</li>
						<li className="todo-item">
							<div className="todo-item__title">
								<div className="todo-status"></div>
								<span className="text-todo">Купить МиниКупер</span>
							</div>
							<div className="todo-buttons">
								<div className="todo-date">16.10.2020</div>
								<div className="todo-btn">
									<button className="todo-complete">
										<img src="./img/check_.png"/>
									</button>
									<button className="todo-remove"></button>
								</div>
							</div>
						</li>
					</ul>
					<button className="content__sort">
						<p className="sort__title">Сортировать по дате</p>
						<img src="./img/sort.png"/>
	
					</button>
					<select className="content__filter right_filter ">
						<option>Дела на неделю</option>
						<option>Дела на месяц</option>
					</select>
				</div>
				<div className="list-right__control control">
					<form className="control__form todo-control">
						<label><input className="todo-control__input" type="text" placeholder="Введите название нового дела"/></label>
						<button className="todo-control__button" id="add"></button>
					</form>
					<div className="control__status status">
						<input type="checkbox" className="status__input" id="check"></input>
						<label for="check" className="status__title">Срочное</label>
					</div>	
				</div>
			</div>			 */}
		</main>
	</>
	);
}

export default App;
