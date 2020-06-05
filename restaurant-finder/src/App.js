import React, { useState } from "react";
import styled from "styled-components";

import RestaurantList from "./component/RestaurantList";

import "./App.css";

function App() {
	const [typeActive, setTypeActive] = useState(false);
	const [type, setType] = useState("Service Type");
	const [cuisineActive, setCuisineActive] = useState(false);
	const [cuisine, setCuisine] = useState("Cuisine");

	const toggleTypeActive = () => {
		setTypeActive((prevMode) => !prevMode);
	};

	const toggleCuisineActive = () => {
		setCuisineActive((prevMode) => !prevMode);
	};

	const selectType = (event) => {
		setType(event.target.value);
	};

	const selectCuisine = (event) => {
		setCuisine(event.target.value);
	};

	return (
		<div className='App'>
			<div>
				<div className='header'>
					<nav>
						<div>ReDI to Find</div>
					</nav>
					<div className='filterSection'>
						<div className='dropdownContainer'>
							<div className='select-box'>
								<div
									className={`${
										!typeActive
											? "options-container"
											: "options-container active"
									}`}
								>
									<div className='option'>
										<input
											type='radio'
											className='radio'
											id='pickup'
											name='category'
											value='Pick Up'
											onClick={selectType}
										></input>
										<label for='pickup'>Pick Up</label>
									</div>
									<div className='option'>
										<input
											type='radio'
											className='radio'
											id='delievery'
											name='category'
											value='Delivery'
											onClick={selectType}
										></input>
										<label for='delievery'>Delivery</label>
									</div>
									<div className='option'>
										<input
											type='radio'
											className='radio'
											id='showAll'
											name='category'
											value='Show All'
											onClick={selectType}
										></input>
										<label for='showAll'>Show All</label>
									</div>
								</div>
								<div
									className='selected activeButton'
									onClick={toggleTypeActive}
								>
									{type}
									{!typeActive ? (
										<img
											style={
												({ border: "1px solid green" },
												{ paddingLeft: "20px" })
											}
											src='https://i.imgur.com/Yc9zbTk.png'
										></img>
									) : null}
								</div>
							</div>
						</div>
						<div className='dropdownContainer'>
							<div className='select-box'>
								<div
									className={`${
										!cuisineActive
											? "options-container"
											: "options-container active"
									}`}
								>
									<div className='option'>
										<input
											type='radio'
											className='radio'
											id='italian'
											name='category'
											value='Italian'
											onClick={selectCuisine}
										></input>
										<label for='italian'>Italian</label>
									</div>
									<div className='option'>
										<input
											type='radio'
											className='radio'
											id='chinese'
											name='category'
											value='Chinese'
											onClick={selectCuisine}
										></input>
										<label for='chinese'>Chinese</label>
									</div>
									<div className='option'>
										<input
											type='radio'
											className='radio'
											id='thai'
											name='category'
											value='Thai'
											onClick={selectCuisine}
										></input>
										<label for='thai'>Thai</label>
									</div>
									<div className='option'>
										<input
											type='radio'
											className='radio'
											id='mexican'
											name='category'
											value='Mexican'
											onClick={selectCuisine}
										></input>
										<label for='mexican'>Mexican</label>
									</div>
									<div className='option'>
										<input
											type='radio'
											className='radio'
											id='indian'
											name='category'
											value='Indian'
											onClick={selectCuisine}
										></input>
										<label for='indian'>Indian</label>
									</div>
									<div className='option'>
										<input
											type='radio'
											className='radio'
											id='turkish'
											name='category'
											value='Turkish'
											onClick={selectCuisine}
										></input>
										<label for='turkish'>Turkish</label>
									</div>
								</div>
								<div
									className='selected activeButton'
									onClick={toggleCuisineActive}
								>
									{cuisine}
									{!cuisineActive ? (
										<img
											style={
												({ border: "1px solid green" },
												{ paddingLeft: "20px" })
											}
											src='https://i.imgur.com/Yc9zbTk.png'
										></img>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</div>

				
				<RestaurantList />
			</div>
		</div>
	);
}

export default App;

