import React from 'react';
import Image from 'next/image';

const Contact: React.FC = () => {
    return (
        <div className="container p-5 mx-auto max-w-sm border-2 border-black bg-white   rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                Contact me on
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Connect with me on any of the following channels. Click on any of the following option
            </p>
            <ul className="my-2 space-y-3">
                <li>
                    <a
                        href="https://www.linkedin.com/in/om-kumar17" target="_blank"
                        className="flex items-center p-3 text-base font-bold border-2 border-black text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                        <Image
                            src="/img/linkedin.png" // replace with your Metamask logo image
                            alt="linkedin Logo"
                            width={20}
                            height={20}
                        />
                        <span className="flex-1 ml-3 whitespace-nowrap ">LinkedIn <span className='opacity-50 float-right'>om-kumar17</span></span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://x.com/om_kumar17" target="_blank"
                        className="flex items-center p-3 text-base font-bold border-2 border-black text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                        <Image
                            src="/img/tweeter.png" // replace with your Coinbase Wallet logo image
                            alt="tweeter Logo"
                            width={20}
                            height={20}
                            className="invert dark:invert-0"
                        />
                        <span className="flex-1 ml-3 whitespace-nowrap ">Tweeter (X)  <span className='opacity-50 float-right'> om_kumar17</span></span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/_om__kumar17" target="_blank"
                        className="flex items-center p-3 text-base font-bold border-2 border-black text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                        <Image
                            src="/img/instagram.png" // replace with your Opera Wallet logo image
                            alt="Instagram Logo"
                            width={20}
                            height={20}
                        />
                        <span className="flex-1 ml-3 whitespace-nowrap ">Instagram  <span className='opacity-50 float-right'>_om__kumar17</span></span>
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:omkumar1870@gmail.com" target="_blank"
                        className="flex items-center p-3 text-base font-bold border-2 border-black text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                        <Image
                            src="/img/gmail.png" // replace with your WalletConnect logo image
                            alt="gmail Logo"
                            width={20}
                            height={20}
                        />
                        <span className="flex-1 ml-3 whitespace-nowrap ">Gmail  <span className='opacity-50 float-right'>omkumar1870@gmail.com</span> </span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://wa.me/9693808798" target="_blank"
                        className="flex items-center p-3 text-base font-bold border-2 border-black text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                        <Image
                            src="/img/whatsapp.png" // replace with your WalletConnect logo image
                            alt="whatsapp Logo"
                            width={20}
                            height={20}
                        />
                        <span className="flex-1 ml-3 whitespace-nowrap ">Whatsapp   <span className='opacity-50 float-right'>+91-9693808798</span></span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
