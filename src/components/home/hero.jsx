import React from 'react'
import { Carousel } from 'antd';
import { Button } from 'antd';

const items = [
    {
        key: '1',
        title: "Samsung Galaxy Note 9-The powerphone forever changing how you work and play.",
        content: "This is not a smartphone as you know it. This is a full computer suite in your pocket. This is a pro-grade 8K camera and editing suite."
    },
    {
        key: '2',
        title: "Iphone 13 Pro-Max -Whao!!! - Macro photography comes to iPhone..",
        content: "With its redesigned lens and powerful autofocus system, the new Ultra Wide camera can focus at just 2 cm — making even the smallest details seem epic. Transform a leaf into abstract art.."
    },
    {
        key: '3',
        title: "HUAWEI P50 Pro - Excellence Exceeds Expectations..",
        content: "The simplified, geometric design makes the Dual-Matrix Camera Design truly stand out. The two 'dazzling eyes' shine through, wherever you go.."
    },
]

function AppHero() {
    return (
        <div id='hero' className='heroBlock'>
            <Carousel autoplay>
                {items.map(item => {
                    return (
                        <div className='container-fluid' key={item.key}>
                            <div className='content'>
                                <h3 style={{ width: 380 }}>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className='btnHolder'>
                                    <Button type="primary" size='large'>Learn More</Button>
                                    <Button size='large'><i className="fas fa-desktop"></i>Watch a Demo</Button>

                                </div>
                            </div>
                        </div>
                    );
                })}

            </Carousel>

        </div>
    )
}

export default AppHero;