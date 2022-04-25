import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plan from '../components/Plan';
import '../App.css';

const PlanAndPricingPage = () => {

  const [plans, setPlans] = useState([]);

    const getPlans = async () => {
        const response = await axios.get('http://demo3755793.mockable.io/plans');
        console.log(response.data);
        setPlans(response.data)
    }
    useEffect(() => {
        getPlans();
    }, [])

  return (
    <div className="container push-down">
      <div className="plans">
        {plans && plans.map((plan) => (
          <div key={plan.planId} className="Plan" style={{ backgroundColor: plan.backgroundColor }}>
            <Plan plan={plan}/> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlanAndPricingPage;