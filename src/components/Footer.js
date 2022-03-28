import React from 'react';
import { BiFootball } from 'react-icons/bi';
import { FiTwitter } from 'react-icons/fi';

const Footer = () => (
    <footer className="footer flex flex-1 justify-around items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
            <BiFootball className='text-2xl lg:text-4xl"' />
            <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
                <FiTwitter className=" text-2xl lg:text-3xl" />
            </a>
        </div>
    </footer>
);

export default Footer;
