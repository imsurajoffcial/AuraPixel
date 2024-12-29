import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { user, setShowLogin } = useContext(AppContext);
    const navigate = useNavigate();
    
    const onClickHandler = () => {
        if (user) {
            navigate('/result');
        } else {
            setShowLogin(true);
        }
    }

    const imageSources = [assets.sample_img_1, assets.sample_img_2,assets.sample_img_3,assets.sample_img_4,assets.sample_img_5,assets.sample_img_6]; // Array for multiple images

    return (
        <motion.div
            className='flex flex-col justify-center items-center text-center my-20'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
            >
                <p>Best text to image generator</p>
                <img src={assets.star_icon} alt="" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.4 }}
                className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
            >
                Turn text to <span className='text-yellow-300'>image</span>, in seconds.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='text-center max-w-xl mx-auto mt-5'
            >
                Unleash your creativity with AI. Turn your imagination into visual art in seconds - Just type, and watch the magic happen.
            </motion.p>

            <motion.button
                onClick={onClickHandler}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.8 }, opacity: { delay: 0.8, duration: 1 } }}
                className='sm:text-lg text-white bg-gradient-to-b from-black to-slate-800 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
            >
                Generate Images
                <img className='h-6' src={assets.star_group} alt="" />
            </motion.button>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className='flex flex-wrap justify-center mt-16 gap-3'
            >
                {Array(6).fill('').map((item, index) => (
                    <motion.img
                        whileHover={{ scale: 1.05, duration: 1 }}
                        className='rounded cursor-pointer max-sm:w-10'
                        src={imageSources[index % imageSources.length]} // Alternate between imageSources
                        alt={`Sample Image ${index}`}
                        key={index}
                        width={70}
                    />
                ))}
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className='mt-2 text-neutral-700'
            >
                Generated images from AuraPixel
            </motion.p>
        </motion.div>
    );
}

export default Header;
