import React from 'react'
import { List, Card, Button } from 'antd';
const data = [
    {
        title: 'Basic',
        content: [
            {
                price: "₦1500.00",
                space: "2 GB",
                support: "24/7",
                backup: "Fast and reliable",
                access: "Access from everywhere"

            }
        ]
    },
    {
        title: 'Medium',
        content: [
            {
                price: "₦5000.00",
                space: "10 GB",
                support: "24/7",
                backup: "Fast and reliable",
                access: "Access from everywhere"

            }
        ]
    },
    {
        title: 'Advanced',
        content: [
            {
                price: "₦10,000.00",
                space: "100 GB",
                support: "24/7",
                backup: "Fast and reliable",
                access: "Access from everywhere"

            }
        ]
    },

];

function AppPricing() {
    return (

        <div id='pricing' className='block pricingBlock bgGray'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Choose a data plan to fit your needs</h2>
                    <p>Choose a subscription plan that's right for you. Downgrade, upgrade or cancel any time..</p>
                </div>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 3,
                        lg: 3,
                        xl: 3,
                        xxl: 3,

                    }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title}>
                                <p className='large'>{item.content[0].price}</p>
                                <p>{item.content[0].space}</p>
                                <p>{item.content[0].support}</p>
                                <p>{item.content[0].backup}</p>
                                <p>{item.content[0].access}</p>
                                <Button type="primary" size='large'><i className="fab fa-telegram-plane"></i>Get Started</Button>
                            </Card>
                        </List.Item>
                    )}
                />

            </div>
        </div>

    )
}

export default AppPricing;