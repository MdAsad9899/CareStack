import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        {/* --------------------------------- Left section---------------------------------  */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur, dignissimos facilis pariatur voluptate debitis aspernatur delectus iste! Architecto ea modi iste ratione nisi repudiandae laboriosam odit laborum, vero praesentium.
            Cum ex dignissimos ea corrupti inventore! Neque placeat asperiores maxime doloremque quam enim illo ipsa perspiciatis, sequi eum incidunt eos aut excepturi facere, harum nemo in consequuntur et debitis est.</p>
        </div>

        {/* --------------------------------- Center section---------------------------------  */}
        <div>
            <p className='font-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>Abount us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* --------------------------------- Right section---------------------------------  */}
        <div>
            <p className='font-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 XXXXXXXXX899</li>
                <li>asad@gmail.com</li>
            </ul>
        </div>
      </div>

      {/* ---------- Copyright text ----------- */}

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026@ CareStack all right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
