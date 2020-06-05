import React from "react";
import styled from "styled-components";

const RestaurantCard = ({ item }) => {
	return (
		<div>
			<StyledContainer>
				<FoodImg
					style={{ backgroundImage: `url(${item.photos[0].links[0]})` }}
				></FoodImg>
				<StyledName>{item.name}</StyledName>
				<TextContainer>
					<StyledRating>
						{item.rating} / 5.0
						<StyledSpan>({item.user_ratings_total})</StyledSpan>
					</StyledRating>
					<StyledCategoryContainer>
						<StyledCuisine>{item.cuisine}</StyledCuisine>
						<StyledDietary>{item.dietaryRestrictions}</StyledDietary>
					</StyledCategoryContainer>
					<StyledDetailList>
						<StyledListItem>
							<StyledSpan>Opening Hours</StyledSpan>
							{item.opening_hours.hours.open} ~
							{item.opening_hours.hours.close}
						</StyledListItem>
						<StyledListItem>
							Delievery {item.delivery ? "available" : "not available"}
						</StyledListItem>
						<StyledListItem>
							Pick Up {item.pickup ? "available" : "not available"}
						</StyledListItem>
						{/* {item.price_level >= 4 && (
						<StyledListItem>expensive</StyledListItem>
					)}
					{3 >= item.price_level >= 2 && (
						<StyledListItem>average</StyledListItem>
					)}
					{2 > item.price_level >= 1 && (
						<StyledListItem>cheap</StyledListItem>
					)} */}
						<StyledListItem>{item.formatted_address}</StyledListItem>
						<StyledListItem> {item.social.phone}</StyledListItem>
						<StyledListItem>{item.social.email}</StyledListItem>
					</StyledDetailList>
				</TextContainer>
			</StyledContainer>
		</div>
	);
};

export default RestaurantCard;

const StyledContainer = styled.div`
	border-radius: 10px;
	width: 340px;
	margin: 0 auto;
	margin-bottom: 20px;
	background-color: #fefefe;
	-webkit-box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
	-moz-box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
	box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
`;

const FoodImg = styled.div`
	border: 1px solid transparent;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	width: 100%;
	height: 200px;
	background-repeat: no-repeat;
	background-position: center;
	margin: 0;
`;

const TextContainer = styled.div`
	padding: 0 16px 12px 16px;
`;

const StyledName = styled.h2`
	font-family: "Raleway", sans-serif;
	font-size: 20px;
	margin: 0;
	border-radius: 30px;
	display:inline;
	padding: 10px 20px 6px 20px;
	position: relative;
	top: -10px;
	background-color:white;
	line-height: 1.6;
`;

const StyledSpan = styled.span`
	font-family: "Quicksand", sans-serif;
	font-size: 14px;
	font-weight: 600;
	margin: 0;
	// border: 1px solid yellow;
	padding: 0 5px;
`;

const StyledRating = styled.p`
	font-family: "Quicksand", sans-serif;
	font-size: 14px;
	font-weight: 400;
	margin: 0;
	// border: 1px solid blue;
`;

const StyledCategoryContainer = styled.div`
	// border: 1px solid blue;
	display: flex;
	justify-content: center;
	padding: 10px 0;
`;

const StyledCuisine = styled.p`
	font-family: "Open Sans", sans-serif;
	border: 1px solid green;
	border-radius: 40px;
	margin: 0px;
	margin-right: 10px;
	padding: 5px 20px;
`;

const StyledDietary = styled.p`
	font-family: "Open Sans", sans-serif;
	border: 1px solid orange;
	border-radius: 40px;
	margin: 0px;
	padding: 5px 20px;
`;

const StyledDetailList = styled.ul`
	// border: 1px solid green;
	list-style: none;
	padding-left: 0;
	margin: 0;
	padding: 0 0 10px 0;
`;

const StyledListItem = styled.li`
	font-family: "Open Sans", sans-serif;
	font-size: 14px;
	padding: 3px 0;
`;
