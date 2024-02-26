import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import "../../assets/css/plans.css";
const initialFormData = {
  rupee: '',
  post: '',
  data: '',
  calls: '',
  validity: ''
};

const initialPlans = [
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
];

export default function PlanView() {
  const [formData, setFormData] = useState(initialFormData);
  const [plans, setPlans] = useState(initialPlans);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlan = { ...formData };
    setPlans([...plans, newPlan]);
    setFormData(initialFormData);
  };

  return (
    <div className='ad-plan'>
      <div className="plan-form">
       <center><form onSubmit={handleSubmit}>
          <input type="text" placeholder="Rupee" name="rupee" value={formData.rupee} onChange={handleInputChange} />
          <input type="text" placeholder="Post" name="post" value={formData.post} onChange={handleInputChange} />
          <input type="text" placeholder="Data" name="data" value={formData.data} onChange={handleInputChange} />
          <input type="text" placeholder="Calls" name="calls" value={formData.calls} onChange={handleInputChange} />
          <input type="text" placeholder="Validity" name="validity" value={formData.validity} onChange={handleInputChange} />
          <br></br>
          <div className='add-plan-but'><button type="submit">Add Plan</button></div>
        </form></center> 
      </div>
      <div className="plan-existing" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
      <div >
        {plans.map((plan, index) => (
          <div className='ad-plan-card-whole'  style={{color:'white'}} key={index}>
          <div className='ad-plan-card'>
            <div className='cost'>Rs {plan.rupee}</div>
            <div className='plan-det'>
            <p>{plan.post}</p>
            <p>{plan.data}</p>
            <p>{plan.calls}</p>
            <p>{plan.validity}</p>
            </div>
            </div>
          </div>
        ))}</div>
      </div>
    </div>
  );
}
