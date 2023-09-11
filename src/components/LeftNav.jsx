import React,{useContext} from 'react';
import {useNavigate} from "react-router-dom";
import LeftNavMenuItems from "./LeftNavMenuItems";
import {categories} from "../utlis/constants"
import { Context } from '../context/contextApi';

function LeftNav() {
  const {selectCategories,setselectCategories,mobileMenu} = useContext(Context);
  const navigate = useNavigate();


  
  const clickHander = (name , type) =>{
    switch (type) {
        case "category":
          return setselectCategories(name);

        case "home":
          return setselectCategories(name);  

          case "menu":
            return false
      default:
        break;
    }}

  return (
    <div className="md:block w-[240px] overflow-y-auto h-full py-[3px] bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all">
      <div className="flex px-5 flex-col" >
        {categories.map((items)=>{
          return(
            <React.Fragment key={items.name} >
              <LeftNavMenuItems 
                text={items.type==="home"?"Home" : items.name}
                icons = {items.icon}
                action = {()=>{
                  clickHander(items?.name, items?.type);
                  navigate("/");
                }}
                className={`${selectCategories===items?.name ?"bg-white/[0.15]" : ""}`}
               />
               { items.divider && (
                  <hr className='my-5 border-white/[0.2]' />
                )}

            </React.Fragment>

          );
        })};
         <hr className='my-5 border-white/[0.2]' />
         <div className="text-white/[0.5] text-[12px]">
          clone by: Mr.IT

         </div>




      </div>

    </div>
  )
}

export default LeftNav