import React from 'react'
import moment from "moment";

function VideoLength({time}) {
    const videoLengthInSecond  = moment().startOf("day").seconds(time).format("mm:ss");

  return (
    <div className='absolute bottom-2 right-2 bg-black py-1 px-2 text-white rounded-md '>
        {
            videoLengthInSecond
        }

    </div>
  )
}

export default VideoLength