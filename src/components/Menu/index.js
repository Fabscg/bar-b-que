import React from 'react'
import SingerPage from '../SingerPage'

export default function Menu() {
    return (
        <div className='menu-list'>
            <div className='food-menu'>
                <h2>Smokin Saturday/Sunday</h2>
                <ul className='menu-items'>
                    <div>
                        <li className='gray'>Pulled Pork <p>Pulled Pork on a bun, baked beans, corn on the cob, coleslaw.</p></li>
                    </div>
                    <div>
                        <li>Hambuerger <p>Baked beans corn on the cob, coleslaw.</p></li>

                    </div>
                    <div>
                        <li className='gray'>Smokey Sausage <p>Sausage on a bon, baked beans, corn on the cob, coleslaw.</p></li>
                    </div>
                </ul>
            </div>
            <div>
                <h2>Drink Specials</h2>
            </div>
        </div>
    )
}
