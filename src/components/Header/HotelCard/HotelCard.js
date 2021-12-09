import React from "react";


const HotelCard = (props) => {
    const styles = {
        marginLeft: '20px',
        marginTop: '10px',
        marginRight: '10px',
    }

    
    return (
        <div onClick={props.onClick()} className='four wide column'>
            <div className="ui link blue fluid card">
                <div className="content">
                    <div className="header">{props.hotelName}</div>
                    <div className="meta">
                        <span className="category">{}</span>
                    </div>
                    <div className="description">
                        <p></p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="right floated author">
                        {props.hotelAddress}
                    </div>
                </div>
                <div className="extra content">
                        {props.hotelNumbers.map((number)=>(
                            <div className="right floated author">
                            {number.phone_number}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}



export default HotelCard