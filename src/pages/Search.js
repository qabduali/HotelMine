import React, {useEffect, useState} from 'react'
import MainContent from '../components/Header/HotelCard/MainContent'
import UserService from "../services/user.service";

const Search = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        UserService.getAllHotels().then(
            response => {
                setData(response.data);
                console.log(response.data);
            },
            error => {
                console.log(error);
            });
    },[])


    const styles = {
        marginTop: '10px',
        width: '100%',
    }

    return (
        <div className='ui container'>
            <br/>
            <h1 style={{fontSize: '48px'}}>Hotels</h1>
            <br/>
            {/*<div className="ui icon input" style={styles}>*/}
            {/*    <i className="search icon"></i>*/}
            {/*        <input type="text" placeholder="Search..."/>*/}
            {/*</div>*/}
            <MainContent hotelData={data}></MainContent>
        </div>
    )
}

export default Search