import React from 'react';
import './about-section.css';
import Button from '@material-ui/core/Button';

function about_section() {
    return (
        <div className="about-sec">
            <div className="about-one">
                <div className="about-one--img">
                    <img src="https://images.pexels.com/photos/2793772/pexels-photo-2793772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </div>
            </div>
            <div className="about-two">
                <h1>Hola! Everyone</h1>
                <p>
                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <Button color="primary" variant="outlined">Outlined</Button>
            </div>
            {/* <h1>This is About section</h1> */}
        </div>
    )
}

export default about_section;
