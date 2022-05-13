import React from 'react';
import mission from '../../../images/mission.jpg'
import images from '../../../images/images.png'
const Mission = () => {
    return (
        <div className='container'>
            <div className="row"> 
                <h2 className='text-center mx-2 my-4'>Our Mission</h2>
                <div className="col-md-6">
                    <img width={300} src={mission} alt="" />
                </div>
                <div className="col-md-6">
                    <h2>At autoRoyal, we want to provide you with the best automotive experience possible.</h2>
                    <p>From researching the vehicle you want to test driving your options, we’re here to help with our knowledgeable sales staff and an impressive selection of cars, trucks, and SUVs.!</p>
                </div>
            </div>
            <div className="row"> 
                <h2 className='text-center mx-2 my-4'>Popular Cars in 2022</h2>
                <div className="col-md-6">
                    <img width={400} src={images} alt="" />
                </div>
                <div className="col-md-6">
                    <h2>Popular Cars</h2>
                    <div className='d-flex'>
                        
                        <ul className='me-5'>
                            <li>Ashok Leyland</li>
                            <li>Audi</li>
                            <li>BMW </li>
                            <li>Captain </li>
                            <li>Eicher </li>
                            <li>Farmtrac</li>
                            
                        </ul>
                        <ul className='ms-5'>
                            <li>Foton</li>
                            <li>Haval</li>
                            <li>Hino </li>
                            <li>Honda</li>
                            <li>Hyundai</li>
                            <li>Isuzu </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Mission;