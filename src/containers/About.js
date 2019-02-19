import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () =>{
    return(
        <div>
            <Header />
            <div className="container col-md-5">
                <h3>สวัสดีค่ะ</h3>
                <p className="title text-justify mt-4 mb-4">
                    นี่เป็น workshop เล็กๆเกี่ยวกับ React ที่เก็บเอาไว้ ขอบคุณที่แวะเข้ามาชมค่ะ
                </p>
            </div>
            <Footer company="KUNJANAPHORN" email="Kunjanaphorn.b@gmail.com" />
        </div>
    )
}

export default About;