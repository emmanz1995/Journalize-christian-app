import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import { useSelector, useDispatch } from 'react-redux';
import { getPrayerRequests } from '../app/action/prayerAction';
import PrayerCard from '../components/PrayerCard';
import styled from 'styled-components';
import CustomSearchBar from '../components/customTextFields/CustomSearchBar';

const DashboardContainer = styled.main`
  .flex-cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1100px;
    margin: 0 auto;
  }
  .search-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
  }
  .search-prayer {
    padding: 7px;
    width: 1042px;
    border-radius: 4px;
    border: 2px solid #ddd;
    &:hover {
      background-color: #ddd;
      transition: all 0.2s ease-in-out;
    }
  }
  .search-btn {
    border-radius: 4px;
    border: 2px solid #ddd;
    padding: 7px;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
      transition: all 0.2s ease-in-out;
    }
  }
`;

function Dashboard() {
    const prayerRequests = useSelector(prayer => prayer.prayerReducer);
    const {myPrayers} = prayerRequests;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPrayerRequests())
    }, [dispatch])
    console.log(myPrayers);

    const displayPrayerRequests = myPrayers?.length > 0 ? myPrayers.map(({ _id, title, body }) => (
        <PrayerCard _id={_id} title={title} body={body} />
    )): <span>No prayer requests found!</span>

    return (
        <DashboardContainer>
            <Banner/>
            <div className="search-container">
                <CustomSearchBar type="search" name="searchprayer" className="search-prayer" placeholder="Search for Prayer Request" />
                <button className="search-btn">Search</button>
            </div>
            <div className="flex-cards">
                {displayPrayerRequests}
            </div>
        </DashboardContainer>
    );
}

export default Dashboard;
