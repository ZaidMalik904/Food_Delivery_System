import React from 'react'

const Header = () => {
    return (
        <div className='header h-[34vw] my-[30px] mx-[5vw] bg-[url("/header_img.png")] bg-no-repeat bg-contain relative' id='home'>
            <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] right-[2vw] animate-fadeIn">
                <h2 className='font-medium text-black text-[max(4.5vw,22px)] font-outfit'>Order Your Favourite Food Here</h2>
                <p className='text-black text-[1.2vw] max-[750px]:hidden'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <a href='#explore-menu'>
                    <button className='border-none text-white font-medium py-[1vw] px-[2.3vw] bg-[black] text-[max(18px,13px)] rounded-[50px] hover:bg-[tomato] hover:text-white transition active:scale-95 cursor-pointer'>View Menu</button>
                </a>
            </div>
        </div>
    )
}

export default Header
