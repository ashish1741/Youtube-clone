import React from 'react'
import {abbreviateNumber} from "js-abbreviation-number";
import { Link } from 'react-router-dom';
import {AiFillCheckCircle} from "react-icons/ai"
import VideoLength from '../shared/videoLength';



function card({video}) {
  return <Link to={`/video/${video?.videoId}`}>
    <div className="flex flex-col mb-8 ">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
            <img 
              className='h-full w-full object-cover '
              src={video?.thumbnails[0]?.url}
              alt="thumbnails"
           />
          
           {video.lengthSeconds &&(
            <VideoLength time = {video?.lengthSeconds} />
           )}
        </div>
        <div className="flex text-white mt-3 ">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
               className='h-full w-full object-cover'
               src={video?.author?.avatar[0]?.url} 
               />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-y-hidden">
            <span className='text-sm font-bold line-clamp-2'>
              {video?.title}
            </span>
            <span className='text-[12px] font-semibold mt-2 text-white flex items-center'>
              {video?.author?.title}
             
                <AiFillCheckCircle className="text-white/[0.5] text-[12px] ml-1 "/>
      
            </span>
            <div className="flex text-[12px] font-semibold text-white truncate overflow-hidden">
              <span >{`${abbreviateNumber(video?.stats.views,2)} views`}</span>
              <span className='flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-2 '>.</span>
              <span className='truncate'>
                {video?.publishedTimeText}
              </span>
            </div>

          </div>
        </div>

    </div>

  </Link>
}

export default card