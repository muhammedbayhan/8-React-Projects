import React from 'react'

const CardAlbum = ({imageUrl,text}) => {
    return (
<div>
    <div className='text-center font-bold text-2xl'>PROPS</div>
<div className='flex justify-around py-10'>

<div className='border-2 rounded-b-lg  w-1/4 text-start'> <img className='rounded-t-lg' src={imageUrl} alt="" />{text}</div>

<div className='border-2 rounded-b-lg  w-1/4 text-start'> <img className='rounded-t-lg' src={imageUrl} alt="" />{text}</div>

<div className='border-2 rounded-b-lg  w-1/4 text-start'> <img className='rounded-t-lg' src={imageUrl} alt="" />{text}</div>


</div>
</div>


    )
}

export default CardAlbum