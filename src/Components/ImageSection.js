import React from 'react';
import about from '../img/portImages/KarimLee.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" height="150px"/>
            </div>
            <div className="about-info">
                <h4>I am<span> Karimli Karim</span></h4>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p className="tech">Education</p>
                        <p className="tech2">Technology Education</p>

                    </div>
                    <div className="right-section">
                        <p>: Karimli Karim</p>
                        <p>: 26</p>
                        <p>: Azerbaijan</p>
                        <p>: Azerbaijan, Russian, English, Turkish</p>
                        <p>:Dmitry Mendeleev University of Chemical Technology of Russia <br></br>Specialty- Service & Tourism</p>
                        <p>:Tech Academy Baku</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
