import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import styled from "styled-components";

import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
	const { data } = useContext(DataContext);
	return (
		<ListContainer>
			{data.map((res) => (
				<RestaurantCard item={res}></RestaurantCard>
			))}
		</ListContainer>
	);
};

export default RestaurantList;

const ListContainer = styled.div`
	margin: 0 auto;
	width: 1200px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;
