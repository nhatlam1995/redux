import React from 'react'
import './homepage.css'

function HomePage() {
    return (
        <div className="homepage">
            <div className='header'>
                <h1 className='title'>Redux Demo</h1>
            </div>
            <div className='body'>
                <form style={{ color: 'green', padding: 10 }}>Enter hobby: <input /></form>
            </div>
            <div className='footer'>
                <h3 style={{ color: 'red', padding: 10 }}>My Hobbies: </h3>
                <ul>
                    <li>Engrisk</li>
                </ul>
            </div>
        </div>
    )
}

export default HomePage