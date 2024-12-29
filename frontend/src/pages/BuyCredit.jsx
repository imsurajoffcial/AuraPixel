import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const BuyCredit = () => {
  const { user } = useContext(AppContext);

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 mb-10 px-4"
    >
      <button className="border border-gray-900 px-10 py-2 rounded-full mb-6">
        Welcome to AuraPixel
      </button>

      <div className="flex flex-col gap-6 text-left max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Rules for Using AuraPixel</h2>
        <ul className="list-disc list-inside space-y-3">
          <li><strong>Creative and Non-offensive Content:</strong> Ensure all generated images are appropriate and non-offensive.</li>
          <li><strong>Respect Intellectual Property:</strong> Avoid replicating copyrighted materials without permission.</li>
          <li><strong>Customization Guidelines:</strong> Utilize provided customization options for themes and styles.</li>
          <li><strong>Output Quality:</strong> Expect high-resolution images suitable for personal and professional use.</li>
          <li><strong>Usage Rights and Licensing:</strong> Follow specified usage rights for all generated content.</li>
          <li><strong>User-Friendly Interface:</strong> Leverage an intuitive design for a seamless user experience.</li>
          <li><strong>Diversity and Inclusivity:</strong> Celebrate diverse themes and cultures in your creations.</li>
          <li><strong>Privacy Protection:</strong> Rest assured your data is handled securely and minimally collected.</li>
          <li><strong>Prohibited Requests:</strong> Avoid creating sensitive or prohibited content.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default BuyCredit;
