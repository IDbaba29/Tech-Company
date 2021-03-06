import React, { useState } from 'react'

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function Appheader() {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className='container-fluid'>
            <div className='header'>
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="www.google.com">Tech</a>
                </div>

                <div className='mobileHidden'>
                    <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Feature" />
                        <Link href="#works" title="How it works" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />

                    </Anchor>
                </div>

                <div className='mobileVisible'>
                    <Button className='mobileButton' type="primary" onClick={showDrawer}>
                        <i className='fas fa-bars'></i>
                    </Button>
                    <Drawer placement="right" onClose={onClose} visible={visible}>
                        <Anchor targetOffset="65">
                            <Link href="#hero" title="Home" />
                            <Link href="#about" title="About" />
                            <Link href="#feature" title="Feature" />
                            <Link href="#works" title="How it works" />
                            <Link href="#faq" title="FAQ" />
                            <Link href="#pricing" title="Pricing" />
                            <Link href="#contact" title="Contact" />

                        </Anchor>
                    </Drawer>
                </div>



            </div>
        </div>
    )
}

export default Appheader;