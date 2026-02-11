import React from 'react'

const menu_list = [
    { menu_name: "Salad", menu_image: "/menu_1.png" },
    { menu_name: "Rolls", menu_image: "/menu_2.png" },
    { menu_name: "Desserts", menu_image: "/menu_3.png" },
    { menu_name: "Sandwich", menu_image: "/menu_4.png" },
    { menu_name: "Cake", menu_image: "/menu_5.png" },
    { menu_name: "Pure Veg", menu_image: "/menu_6.png" },
    { menu_name: "Pasta", menu_image: "/menu_7.png" },
    { menu_name: "Noodles", menu_image: "/menu_8.png" },
    { menu_name: "Pizza", menu_image: "/menu_9.png" },
    { menu_name: "Burger", menu_image: "/menu_10.png" },
    { menu_name: "Ice Cream", menu_image: "/menu_11.png" },
    { menu_name: "Drinks", menu_image: "/menu_12.png" },
]

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu flex flex-col gap-5 px-[5vw]' id='explore-menu'>
            <h1 className='text-[#262626] font-medium text-2xl'>Explore our menu</h1>
            <p className='explore-menu-text max-w-[60%] text-[#808080]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="explore-menu-list flex items-center gap-[30px] text-center my-5 overflow-x-auto no-scrollbar">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item cursor-pointer flex-shrink-0'>
                            <img src={item.menu_image} alt={item.menu_name} className={`w-[7.5vw] min-w-[80px] h-[7.5vw] min-h-[80px] rounded-full object-cover transition duration-200 cursor-pointer ${category === item.menu_name ? "border-4 border-[tomato] p-[2px]" : ""}`} />
                            <p className='mt-2.5 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr className='my-2.5 h-[2px] bg-[#e2e2e2] border-none' />
        </div>
    )
}

export default ExploreMenu
