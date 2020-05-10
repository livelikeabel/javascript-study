import React, { useState } from 'react';
import axios from 'axios';
import NewsList from "./components/NewsList";

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=3fa5633c26a1488fbd3470f0fc7a7ba9'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <NewsList/>
  );
};

export default App;
