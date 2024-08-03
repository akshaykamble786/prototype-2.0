import React from 'react';
import ProdCard from '../components/ProdCard';

const Appliances = () => {
    const approduct1 = {
        images: {
            '#465066': 'https://i.imghippo.com/files/4dDBx1722158230.png',
            '#7E7E7E': 'https://i.imghippo.com/files/c4TUe1722158339.png',
            '#E9D6DB': 'https://i.imghippo.com/files/DKtvy1722158286.png',
        },
        colorOptions: ['#465066', '#7E7E7E', '#E9D6DB'],
        title: 'Product 1'
    };

    const approduct2 = {
        images: {
            '#465066': 'https://i.imghippo.com/files/4dDBx1722158230.png',
            '#7E7E7E': 'https://i.imghippo.com/files/c4TUe1722158339.png',
            '#E9D6DB': 'https://i.imghippo.com/files/DKtvy1722158286.png',
        },
        colorOptions: ['#465066', '#7E7E7E', '#E9D6DB'],
        title: 'Product 2'
    };

    const approduct3 = {
        images: {
            '#465066': 'https://i.imghippo.com/files/4dDBx1722158230.png',
            '#7E7E7E': 'https://i.imghippo.com/files/c4TUe1722158339.png',
            '#E9D6DB': 'https://i.imghippo.com/files/DKtvy1722158286.png',
        },
        colorOptions: ['#465066', '#7E7E7E', '#E9D6DB'],
        title: 'Product 3'
    };

    const approduct4 = {
        images: {
            '#465066': 'https://i.imghippo.com/files/4dDBx1722158230.png',
            '#7E7E7E': 'https://i.imghippo.com/files/c4TUe1722158339.png',
            '#E9D6DB': 'https://i.imghippo.com/files/DKtvy1722158286.png',
        },
        colorOptions: ['#465066', '#7E7E7E', '#E9D6DB'],
        title: 'Product 4'
    };

    const approduct5 = {
        images: {
            '#465066': 'https://i.imghippo.com/files/4dDBx1722158230.png',
            '#7E7E7E': 'https://i.imghippo.com/files/c4TUe1722158339.png',
            '#E9D6DB': 'https://i.imghippo.com/files/DKtvy1722158286.png',
        },
        colorOptions: ['#465066', '#7E7E7E', '#E9D6DB'],
        title: 'Product 5'
    };

    const approduct6 = {
        images: {
            '#465066': 'https://i.imghippo.com/files/4dDBx1722158230.png',
            '#7E7E7E': 'https://i.imghippo.com/files/c4TUe1722158339.png',
            '#E9D6DB': 'https://i.imghippo.com/files/DKtvy1722158286.png',
        },
        colorOptions: ['#465066', '#7E7E7E', '#E9D6DB'],
        title: 'Product 6'
    };

    const approduct7 = {
        images: {
            '#465066': 'https://i.imghippo.com/files/4dDBx1722158230.png',
            '#7E7E7E': 'https://i.imghippo.com/files/c4TUe1722158339.png',
            '#E9D6DB': 'https://i.imghippo.com/files/DKtvy1722158286.png',
        },
        colorOptions: ['#465066', '#7E7E7E', '#E9D6DB'],
        title: 'Product 7'
    };

    const approduct8 = {
        images: {
            '#465066': 'https://i.imghippo.com/files/4dDBx1722158230.png',
            '#7E7E7E': 'https://i.imghippo.com/files/c4TUe1722158339.png',
            '#E9D6DB': 'https://i.imghippo.com/files/DKtvy1722158286.png',
        },
        colorOptions: ['#465066', '#7E7E7E', '#E9D6DB'],
        title: 'Product 8'
    };

    const approduct9 = {
        images: {
            '#465066': 'https://i.imghippo.com/files/4dDBx1722158230.png',
            '#7E7E7E': 'https://i.imghippo.com/files/c4TUe1722158339.png',
            '#E9D6DB': 'https://i.imghippo.com/files/DKtvy1722158286.png',
        },
        colorOptions: ['#465066', '#7E7E7E', '#E9D6DB'],
        title: 'Product 9'
    };

    const approducts = [approduct1, approduct2, approduct3, approduct4, approduct5, approduct6, approduct7, approduct8, approduct9];

    return (
        <>
            <h1 className='text-center font-semibold text-3xl m-2 p-4'>Appliances</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {approducts.map((product, index) => (
                    <ProdCard key={index} {...product} />
                ))}
            </div>
        </>
    );
};

export default Appliances;
