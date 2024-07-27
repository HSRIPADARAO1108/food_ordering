import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-test'>Explore Our Menu: Indulge in a delightful journey through our carefully crafted menu. From sizzling appetizers to decadent desserts, we’ve curated a symphony of flavors just for you. Whether you crave comfort classics or crave exotic delicacies, our kitchen is ready to tantalize your taste buds.</p>

        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""}src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                    </div>
                )

})}
        </div>
        <hr/>
    </div>   
   )
}          

export default ExploreMenu
