import React from 'react'
import { Collapse } from 'antd';
import { Button } from 'antd';

const { Panel } = Collapse;

const text = `
We will never ask you to pay money into any personal account. 
Such request is fraudulent and should be disregarded. You can pay by Direct Bank transfer of in cash at our office. After payment contact us to confirm payment.`;

const text1 = `
We are located at 40, Ogbonabali Waterlines Port Harcourt, Rivers State Nigeria`;

const text2 = `
You can place an order in a number of ways – whichever is most convenient for you:
 very easily at our shop, via our website (contact us form), email or directly through a phone call..`;

const text3 = `
Yes. Our delivery hour is from 10:00 AM to 08:00 PM. Generally it takes between 45 minutes to 1 hour time to deliver the order. 
Due to long distance or heavy traffic, delivery might take few extra minutes..`;

const text4 = `
Customers can return materials within 3 days of making their purchase. 
The materials must be in “like-new” and resalable condition (no marks, physical damage, etc.).
Items do not have to be in the original shrink wrap. 
The customer is responsible for return shipping costs via the carrier of choice. 
To initiate a return please call us before you send it back. 
Once we have received the item(s), the customer can expect a refund in 10–15 business days.
If you are not satisfied with how our product is working within 60 days, call us at 08023452749 to find out about our 100% satisfaction guarantee.`;

const text5 = `
Yes. However after initial evaluation it might be necessary to take the device to our office.`;

const text6 = `
Delivery costs, just like delivery time, are determined by the distance.
Usually the closer your location the smaller the delivery fee. If a delivery driver has to travel a long way,
they may charge a little extra for the service. We offer free delivery to many locations as well.
You can easily check the delivery cost for your location by calling us.`;

function AppFaq() {
    /* Collapse component */
    return (
        <div id='faq' className='block faqBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Frequently Asked Questions</h2>
                    <p>We have collected the most frequent questions and we have put ourselves in your shoes to meet your needs. Have a look! </p>
                </div>
                <Collapse accordion>
                    <Panel header="How do I pay?" key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="Where is your office location?" key="2">
                        <p>{text1}</p>
                    </Panel>
                    <Panel header="How can I place an order?" key="3">
                        <p>{text2}</p>
                    </Panel>
                    <Panel header="Do you do home delivery? How long would I receive my order?" key="4">
                        <p>{text3}</p>
                    </Panel>
                    <Panel header="What are the delivery costs?" key="5">
                        <p>{text6}</p>
                    </Panel>
                    <Panel header="What is the return policy?" key="6">
                        <p>{text4}</p>
                    </Panel>
                    <Panel header="Do you do home service?" key="7">
                        <p>{text5}</p>
                    </Panel>

                </Collapse>
                <div className='quickSupport'>
                    <h2>Quick Support</h2>
                    <p>Do you have a specific question that has not been answered above? Send us a mail for quick support.</p>
                    <Button type="primary" size='large'>
                        <i className='fas fa-envelope'></i> Email your question
                    </Button>

                </div>
            </div>
        </div>
    );
}

export default AppFaq;