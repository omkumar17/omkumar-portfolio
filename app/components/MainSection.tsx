import Image from 'next/image'
import React from 'react'

const MainSection = () => {
  return (
    <div  className=' object-cover overflow-hidden flex lg:w-[35%] lg:my-10 mb-10  border-2 border-black shadow-2xl rounded-lg'>

      <Image className="object-contain object-center rounded-lg " src="/img/profile-3.jpeg" alt="OmKumarImage" width={550} height={500}/>
    </div>
  )
}

export default MainSection
