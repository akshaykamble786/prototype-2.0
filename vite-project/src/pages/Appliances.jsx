import React from 'react';
import Pordcard from '../components/pordcard';

const Appliances = () => {
    const approduct1 = {
        images: {
            '#ff0000': 'https://i.imghippo.com/files/4dDBx1722158230.png'
        },
        colorOptions: ['#ff0000', '#00ff00', '#0000ff'],
        title: 'Agaro Vacuum',
        originalPrice : 5999,
        price : 4999,
        rating : 4.1,
        reviewAmount : "(87)",
        saleOrNot : true
    };
    const approduct2 = {
        images: {
            '#ff0000': 'https://i.imghippo.com/files/4dDBx1722158230.png'
        },
        // colorOptions: ['#ff0000', '#00ff00', '#0000ff'],
        title: 'Agaro Vacuum',
        originalPrice : 5999,
        price : 4999,
        rating : 4.1,
        reviewAmount : "(87)",
        saleOrNot : true
    };
    const approduct3 = {
        images: {
            '#ff0000': 'https://i.imghippo.com/files/4dDBx1722158230.png'
        },
        title: 'Agaro Vacuum',
        colorOptions: ['#ff0000', '#00ff00', '#0000ff'],
        originalPrice : 5999,
        price : 4999,
        rating : 4.1,
        reviewAmount : ("87"),
        saleOrNot : false
    };
    const approduct4 = {
        images: {
            '#ff0000': 'https://i.imghippo.com/files/4dDBx1722158230.png'
        },
        title: 'Agaro Vacuum',
        colorOptions: ['#ff0000', '#00ff00', '#0000ff'],
        originalPrice : 5999,
        price : 4999,
        rating : 4.1,
        reviewAmount : ("87"),
        saleOrNot : false
    };
    const approduct5 = {
        images: {
            '#ff0000': 'https://i.imghippo.com/files/4dDBx1722158230.png'
        },
        title: 'Agaro Vacuum',
        colorOptions: ['#ff0000', '#00ff00', '#0000ff'],
        originalPrice : 5999,
        price : 4999,
        rating : 4.1,
        reviewAmount : ("87"),
        saleOrNot : false
    };
    const approduct6 = {
        images: {
            '#ff0000': 'https://i.imghippo.com/files/4dDBx1722158230.png'
        },
        title: 'Agaro Vacuum',
        colorOptions: ['#ff0000', '#00ff00', '#0000ff'],
        originalPrice : 5999,
        price : 4999,
        rating : 4.1,
        reviewAmount : ("87"),
        saleOrNot : false
    };
    const approduct7 = {
        images: {
            '#ff0000': 'https://i.imghippo.com/files/4dDBx1722158230.png'
        },
        title: 'Agaro Vacuum',
        colorOptions: ['#ff0000', '#00ff00', '#0000ff'],
        originalPrice : 5999,
        price : 4999,
        rating : 4.1,
        reviewAmount : ("87"),
        saleOrNot : false
    };
    const approduct8 = {
        images: {
            '#ff0000': 'https://i.imghippo.com/files/4dDBx1722158230.png'
        },
        title: 'Agaro Vacuum',
        colorOptions: ['#ff0000', '#00ff00', '#0000ff'],
        originalPrice : 5999,
        price : 4999,
        rating : 4.1,
        reviewAmount : ("87"),
        saleOrNot : false
    };
    const approduct9 = {
        images: {
            '#ff0000': 'https://i.imghippo.com/files/4dDBx1722158230.png'
        },
        title: 'Agaro Vacuum',
        colorOptions: ['#ff0000', '#00ff00', '#0000ff'],
        originalPrice : 5999,
        price : 4999,
        rating : 4.1,
        reviewAmount : ("87"),
        saleOrNot : false
    };
    const approduct10 = {
        images: {
            '#ff0000': 'https://i.imghippo.com/files/4dDBx1722158230.png'
        },
        title: 'Agaro Vacuum',
        colorOptions: ['#ff0000', '#00ff00', '#0000ff'],
        originalPrice : 5999,
        price : 4999,
        rating : 4.1,
        reviewAmount : ("87"),
        saleOrNot : false
    };

    const approducts = [approduct1, approduct2, approduct3, approduct4, approduct5, approduct6, approduct7, approduct8, approduct9, approduct10]

    return (
        <>
            <h1 className='text-center font-semibold text-3xl m-2 p-4'>Appliances</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {approducts.map((product, index) => (
                    <Pordcard key={index} {...product} />
                ))}
            </div>
        </>
    );
};

export default Appliances;
