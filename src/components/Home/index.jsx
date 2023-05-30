import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Home() {
  const [location, setLocation] = useState(null);
  const [address,setAddress]=useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
  
        const apiKey = 'AIzaSyCmJ1dcSVYnmhtcoAjXWmYMHQLRjJsbM1Y';
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
        
        setAddress(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  console.log(address); // "32 Mễ Trì Thượng, Từ Liêm, Hà Nội, Vietnam"
  return (
    <div>
      
      {address ? (
        <p>
          Your current location is: {address}
        </p>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
}

export default Home;
