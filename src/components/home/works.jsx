import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Appworks = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div id='works' className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Featured Product - How it Works</h2>
                    <p>The Samsung Galaxy Note 9 lets you focus on what matters most in today’s always-on, mobile world.</p>

                </div>
                <div className='contentHolder'>
                    <Button onClick={showModal}>
                        <i className='fas fa-play'></i>
                    </Button>
                </div>

                <Modal title="Samsung Note 9" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                    <iframe title='phone advertorial' width="100%" height="350" src="https://www.youtube.com/embed/87RPUPl-vxo"></iframe>
                </Modal>
            </div>

        </div>
    );

}
export default Appworks;