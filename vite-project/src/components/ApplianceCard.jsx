import React from 'react'

const ApplianceCard = ({ image, title, price, description }) => {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-200 p-4 m-8 mb-4 flex flex-col items-center">
            <div className='h-72 w-80 flex items-center justify-center'>
                <img className='max-h-full max-w-full object-contain hover:scale-105' src={image} alt={title} />
            </div>

            <div className="px-6 py-3">
                <span className='font-bold text-xl'>{title}</span>
            </div>

            <div className="px-6 py-1">
                {/* <span className='text-base font-normal'>{description}</span> */}
            </div>

            <div className="flex items-center justify-between px-6 py-2 w-full">
                <span className="text-xl font-bold">&#8377; {price}</span>

                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ApplianceCard

