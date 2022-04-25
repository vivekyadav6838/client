import React from 'react';
import '../App.css';
import { IoIosDoneAll } from 'react-icons/io';

const Plan = ({ plan }) => {
  return (
    <div className="plan">
        <PlanHeader plan={plan}/>
        <PlanBody plan={plan} />
    </div>
  )
}

const PlanHeader = ({ plan }) => {
    return (
        <div className="plan-header">
            <h1 style={{ fontStyle: 'italic' }}>FLAT {plan.save} OFF</h1>
            <p className="offer">Offer ends in</p>
            <div className="time-remaining-container">
                <div className="time-container">
                    <div className="time">
                        <p className="num">0</p>
                        <p>days</p>
                    </div>
                    <div className="time">
                        <p className="num">17</p>
                        <p>hrs</p>
                    </div>
                    <div className="time">
                        <p className="num">49</p>
                        <p>mins</p>
                    </div>
                    <div className="time">
                        <p className="num">49</p>
                        <p>secs</p>
                    </div>
                </div>
                <div className="circle">
                    <p className="num">75%</p>
                    <p>Booked</p>
                </div>
            </div>
        </div>
    );
}

const PlanBody = ({ plan }) => {
    return (
        <div className="plan-body">
            <div style=
            {{ 
                backgroundColor: plan.offerColor,
                color: !plan.offerColor ? "black" : "white"
            }} className="saver">
                {plan.saver}
            </div>
            <h3>{plan.heading}</h3>
            <div className="content">
                {plan.content.map((contentBody, idx) => (
                    <div key={idx}>
                        <p><IoIosDoneAll />{contentBody}</p>
                    </div>
                ))}
            </div>
            <p className="suit">{plan.suit}</p>
            <p className="referral">Flat {plan.save} OFF for being referred by Saurabh</p>
            <div className="price-section">
                <div className="price">
                    <p className="price-d">&#8377;{plan.price}</p>
                    <p className="save">Save {plan.save}</p>
                </div>
                <p className="original-price">&#8377;{plan.originalPrice}</p>
            </div>
            <button className="buy-now">Buy Now</button>
        </div>
    );
}

export default Plan;