
import "../../assets/css/plans.css";


const Plans = () => {
  // Sample array of details for each "whole-bo"
  const plansDetails = [
    {
      rupee: '700',
      post: 'Postpaid',
      data: '12GB',
      calls: 'Unlimited',
      validity: '128days',
    },
    {
      rupee: '800',
      post: 'Prepaid',
      data: '20GB',
      calls: 'Unlimited',
      validity: '180days',
    },
    {
        rupee: '700',
        post: 'Postpaid',
        data: '12GB',
        calls: 'Unlimited',
        validity: '128days',
      },
      {
        rupee: '800',
        post: 'Prepaid',
        data: '20GB',
        calls: 'Unlimited',
        validity: '180days',
      },
      {
        rupee: '600',
        post: 'Postpaid',
        data: '8GB',
        calls: '500 minutes',
        validity: '90days',
      },
      {
        rupee: '900',
        post: 'Prepaid',
        data: '30GB',
        calls: 'Unlimited',
        validity: '365days',
      },
      {
        rupee: '1000',
        post: 'Postpaid',
        data: '15GB',
        calls: 'Unlimited',
        validity: '180days',
      },
      {
        rupee: '1200',
        post: 'Prepaid',
        data: '50GB',
        calls: 'Unlimited',
        validity: '180days',
      },
      {
        rupee: '1500',
        post: 'Postpaid',
        data: '25GB',
        calls: 'Unlimited',
        validity: '180days',
      },
      {
        rupee: '1200',
        post: 'Prepaid',
        data: '40GB',
        calls: 'Unlimited',
        validity: '365days',
      },
      {
        rupee: '1800',
        post: 'Postpaid',
        data: '30GB',
        calls: 'Unlimited',
        validity: '365days',
      },
      {
        rupee: '2000',
        post: 'Prepaid',
        data: '60GB',
        calls: 'Unlimited',
        validity: '365days',
      },
      {
        rupee: '2500',
        post: 'Postpaid',
        data: '50GB',
        calls: 'Unlimited',
        validity: '180days',
      },
      {
        rupee: '2200',
        post: 'Prepaid',
        data: '100GB',
        calls: 'Unlimited',
        validity: '365days',
      },
      {
        rupee: '3000',
        post: 'Postpaid',
        data: '40GB',
        calls: 'Unlimited',
        validity: '180days',
      },
      {
        rupee: '2800',
        post: 'Prepaid',
        data: '80GB',
        calls: 'Unlimited',
        validity: '365days',
      },
  ];

  return (

    <div className="plans-container">
    
      {plansDetails.map((plan, index) => (
        <div className="plan-card" key={index}>
          <div className="plan-left"><b>₹{plan.rupee}</b></div>
          <div className="plan-right">
            <div className="type-plan">{plan.post}</div>
            <div className="right-data"><b>Data</b>: {plan.data}</div>
            <div className="right-data"><b>Calls</b>: {plan.calls}</div>
            <div className="right-data"><b>Validity</b>: {plan.validity}</div>
          </div>
          <div className="plan-button"><div className="p-button"><b>Pay</b></div></div>
        </div>
      ))}
    </div>
  );
};

export default Plans;
