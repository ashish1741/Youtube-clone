import React from 'react'

function LeftNavMenuItems({text,icons,className,action}) {
  return (
    <div className={"text-white text-sm cursor-pointer h-10 flex items-center px-3  rounded-lg hover:bg-white/[0.15] "  +
     className
     }
     onClick={action}
    >
        <span className='text-xl mr-5'>{icons}</span>
      {text}
    </div>
  
  )
}

export default LeftNavMenuItems