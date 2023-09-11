import React,{useContext,useEffect} from 'react'
import { Context } from '../context/contextApi';
import LeftNav from "./LeftNav";
import Card from "../components/Card";
import { IoTimeSharp } from 'react-icons/io5';
import LazyLoading from './LazyLoading';



function Feed() {
  const {loading,searchResult} = useContext(Context);


  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);


  
  if (searchResult.length===0 ) {
    return <LazyLoading />
    
  }
  return(
       <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-col-4 gap-4 p-5 "> 
      {!loading && searchResult && 
        searchResult?.map((items)=>{
          if(items?.type!=="video") return false
          return <Card 
          key={items?.video?.videoId}
          video={items?.video}
           />
        })
      }
      </div>
      </div>
    </div>

  )
 
  
}

export default Feed