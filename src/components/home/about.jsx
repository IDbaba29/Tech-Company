import React from 'react'
import { Row, Col } from 'antd';

const items = [
    {
        key: '1',
        icon: <i className='fas fa-chart-pie'></i>,
        title: "High Performance.",
        content: "We only sell high performance gadgets that would pass the test of time."
    },
    {
        key: '2',
        icon: <i className='fas fa-desktop'></i>,
        title: "Flat Design.",
        content: "We have a way of making all our customers special with our flat design."
    },
    {
        key: '3',
        icon: <i className='fas fa-database'></i>,
        title: "Excellent Service.",
        content: "We maintain a database of our customers so as to follow up with you to give you excellent after sale service."
    },
]

function AppAbout() {
    return (
        <div id='about' className='block aboutBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>About Us</h2>
                    <p>Welcome to Tech. Our customers are valued</p>
                </div>
                <div className='contentHolder'>
                    <p>Tech is a leading company in Nigeria offering best deals on smartphones, Apple products, and computers
                        from top  brands at affordable prices.
                        We are committed to deliver nothing but quality in products and best possible services and improving
                        it every day.
                        Our services which include selling premium products at optimum price guarantee.
                    </p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col md={{ span: 8 }} key={item.key}>
                                <div className='content'>
                                    <div className='icon'>
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>


                            </Col>

                        );
                    })
                    }

                </Row>

            </div>

        </div>
    )
}

export default AppAbout;