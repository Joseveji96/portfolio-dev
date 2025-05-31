import React from 'react'

interface BtnTitleProps {
    title: string;
}

const BtnTitle: React.FC<BtnTitleProps> = ({ title }) => {
    return (
        <div className='bg-blurAzul py-1 px-3 w-fit rounded-xl'>
            <h1 className='text-white font-dm text-medium'>{title}</h1>
        </div>
    )
}

export default BtnTitle