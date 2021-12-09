import React from 'react'
import HotelCard from './HotelCard'
import '../../../css/MainContent.css'
import { useHistory } from 'react-router'

const MainContent = (props) => {
    const history = useHistory()

    const onClick = (cache => i => {
        if( !cache[i] ) cache[i] = e => {
            history.push(`/user/${i}`);
        }
        return cache[i];
    }
    )({});

    return (
        <div style={{marginTop:'10px'}} className='ui container'>
            <div className="ui grid">
                {props.hotelData.map(({hotel_id, hotel_name, hotel_address, hotelNumbers})=>(
                    
                    <HotelCard key={hotel_id} hotelName = {hotel_name} hotelAddress={hotel_address} hotelNumbers={hotelNumbers} onClick={()=>onClick(hotel_id)}></HotelCard>
                ))}
            </div>
        </div>
    )
}

export default MainContent