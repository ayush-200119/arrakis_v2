import { default as React, useState } from 'react';
import AuthService from '../../services/auth.service';
import '../../App.css'

const bondsData = [
  { id: 1, name: 'Government Bond', yield: 2.5 },
  { id: 2, name: 'Corporate Bond', yield: 4.2 },
  { id: 3, name: 'Municipal Bond', yield: 3.8 },
  // Add more bonds
];

const UserLanding = () => {
const user = AuthService.getCurrentUser();
console.log("user is : " , user)
const [bonds, setBonds] = useState(bondsData);
const [selectedType, setSelectedType] = useState('all');

const handleTypeChange = (event) => {
  const type = event.target.value;
  setSelectedType(type);

  if (type === 'all') {
    setBonds(bondsData);
  } else {
    const filteredBonds = bondsData.filter(bond => bond.name.toLowerCase().includes(type));
    setBonds(filteredBonds);
  }
};

return (
  <div className="bond-container">
    <h1>Securities</h1>
    <div className="filter-container">
      <label>Filter by Type:</label>
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="all">All</option>
        <option value="government">Government</option>
        <option value="corporate">Corporate</option>
        <option value="municipal">Municipal</option>
      </select>
    </div>
    <div className="bonds-list">
      {bonds.map(bond => (
        <div key={bond.id} className="bond-card">
          <h2>{bond.name}</h2>
          <p>Yield: {bond.yield}%</p>
        </div>
      ))}
    </div>
  </div>
);
};


export default UserLanding