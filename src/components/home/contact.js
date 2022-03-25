import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';


const { TextArea } = Input;

function AppContact() {
    return (
        <div id='contact' className='block contactBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Get in Touch</h2>
                    <p>You can reach us using the form below</p>
                </div>

                <Form name="normal_login" className="login-form" initialValues={{ remember: true }} >

                    <Form.Item name="Full_Name" rules={[{ required: true, message: 'Please input your Full Name!' }]} >
                        <Input placeholder="Full Name" />
                    </Form.Item>

                    <Form.Item name="Email_Address" rules={[{ required: true, message: 'Please input your email address!' }]}>
                        <Input placeholder="Email Address" />
                    </Form.Item>

                    <Form.Item name="Telephone_Number" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                        <Input placeholder="Telephone" />
                    </Form.Item>
                    <Form.Item name="Subject" rules={[{ required: true, message: 'Please input the subject of your message!' }]}>
                        <Input placeholder="Subject" />
                    </Form.Item>

                    <Form.Item name="Message" rules={[{ message: 'Please input the subject of your message!' }]}>
                        <TextArea placeholder="Message" />
                    </Form.Item>

                    <Form.Item name="agreement" valuePropName="checked"

                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}

                    >
                        <Checkbox>
                            I have read the <a href="www.google.com">agreement</a>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Submit
                        </Button>

                    </Form.Item>
                </Form>

            </div>

        </div>
    )
}

export default AppContact;