
import React from 'react'
import singerImg from "../../assets/images/Singer/Erin-singer.jpg"
import openSign from "../../assets/images/open-bar.jpg"
export default function SingerPage() {
    return (
        <div className='container-singer row '>
            <div className='col-lg-6'>
                <img className='singer-image' src={singerImg} alt="woman singer with a guitar" />
            </div>
            <div className='singer-name col-lg-3'>
                <p>Erin Backstock
                    On Patio</p>
                <p><spam>2pm-5pm</spam></p>
            </div>
            <div className='col-lg-3'>
                <img className='openSign-img' src={openSign} alt="sign Open" />
            </div>

        </div>
    )
}
