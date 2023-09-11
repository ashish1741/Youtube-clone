import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      "X-RapidAPI-Key":"bed366ac9fmshb332b72c14f3ac0p14b9bejsn75dee19138a4",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
  };

 export  const fetchDataFromApi = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }