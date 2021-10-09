import React from 'react'

function whatIDo()
{
    const boxes = () =>
    {
        h1: 'box1'
        Paragraph: 'Lorem Ipsum is simply dummy text of the printing'
    };
    


    return (
        <div className="what_else">
            <h1>What else you want?</h1>

            <div className="box">
                <h2>{ boxes.h1 }</h2>
                <p>{ boxes.Paragraph }</p>
            </div>

        </div>
    )
}

export default whatIDo;
