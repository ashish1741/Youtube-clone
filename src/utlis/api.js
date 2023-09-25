import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      "X-RapidAPI-Key":'72068a305bmsh744bf2be04dc01ep10c00djsnc2ab909ccbf7',
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
  };

 export  const fetchDataFromApi = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }