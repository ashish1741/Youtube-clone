import React,{ useState,useEffect } from 'react';
import { useContext } from 'react';
import {useParams} from "react-router-dom";
import {fetchDataFromApi} from "../utlis/api"
import { Context } from '../context/contextApi';
import LeftNav from "./LeftNav";
import SearchResultVideo from "./searchResultVideos"

function SearchResult() {


  const[result , setResult] = useState();
  const {searchQuery} = useParams();
  const{setloading} = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResult();
  }, [searchQuery]);



  const fetchSearchResult = () =>{
    setloading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res)=>{
      console.log(res);
      setResult(res?.contents)
      setloading(false);
    })

  }
  
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav />
      <div className="grow w-[calc(100%-240px) h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((items,index)=>{
            if(items?.type !=="video") return false;
            let video = items?.video;

            return(
              <SearchResultVideo 
              key={video?.videoId} 
              video={video} 
              />
            )

          })}
        </div>

      </div>

    </div>
  )
}

export default SearchResult