import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DashBoard.css';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('ipo');
  const [ipoData, setIpoData] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (apiUrl) => {
    try {
      setIsLoading(true);
      const response = await axios.get(apiUrl);

      if (selectedOption === 'ipo') {
        setIpoData(response.data);
        setCurrencyData([]);
      } else if (selectedOption === 'currencyRates') {
        setCurrencyData(response.data);
        setIpoData([]);
      }

      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIpoData([]);
      setCurrencyData([]);
      setError(error.message || 'Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const apiUrl =
      selectedOption === 'ipo'
        ? 'https://api.iex.cloud/v1/data/core/upcoming_ipos/market?token=pk_94ef65873918405e9c40c2c105b69075'
        : 'https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_94ef65873918405e9c40c2c105b69075';

    fetchData(apiUrl);
  }, [selectedOption]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label className='SelecteDropDownOptions'>
        <strong>Select The options: </strong>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="ipo">IPO</option>
          <option value="currencyRates">Currency Rates</option>
        </select>
      </label>

      {isLoading && <p>Loading...</p>}

      {error && <p className="error-message">Error: {error}</p>}

      <div className="data-card">
        {selectedOption === 'ipo' && ipoData.length > 0 && (
          <table className="ipo-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Symbol</th>
                <th>Volume</th>
                <th>Updated</th>
                <th>Filing Date</th>
                <th>Current Price</th>
                <th>Status</th>
                <th>Shares</th>
                <th>Price Range High</th>
                <th>Price Range Low</th>
                <th>Managers</th>
                <th>Offer Price</th>
              </tr>
            </thead>
            <tbody>
              {ipoData.map((item, index) => (
                <tr key={index}>
                  <td>{item.companyName || 'N/A'}</td>
                  <td>{item.symbol || 'N/A'}</td>
                  <td>{item.volume || 'N/A'}</td>
                  <td>{item.updated || 'N/A'}</td>
                  <td>{item.filedDate || 'N/A'}</td>
                  <td>{item.currentPrice || 'N/A'}</td>
                  <td>{item.status || 'N/A'}</td>
                  <td>{item.shares || 'N/A'}</td>
                  <td>{item.priceRangeHigh || 'N/A'}</td>
                  <td>{item.priceRangeLow || 'N/A'}</td>
                  <td>{item.managers || 'N/A'}</td>
                  <td>{item.offerPrice || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {selectedOption === 'currencyRates' &&
          currencyData.map((item, index) => (
            <div key={index} className="card currency-card">
              <h3>{item.symbol || 'N/A'}</h3>
              <p>Rate: {item.rate || 'N/A'}</p>
              <p>Timestamp: {item.timestamp || 'N/A'}</p>
              <p>IsDerived: {item.isDerived || 'N/A'}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Dashboard;
