import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { myCV, myCVpdf } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import ImageModal from './canvas/ImageModal'; // Import the modal component
import { pdfjs } from 'react-pdf';
import SocialIcons from './canvas/SocialIcon'; // Import the SocialIcons component

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;

const CartCV = ({ image, title, index }) => {
  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => {
    // Check window width before opening the modal
    if (window.innerWidth > 768) {
      setModalOpen(true);
    }
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Tilt className="xs:w-[350px] sm:w-[400px] w-full">
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[2px] rounded-[25px] shadow-card'
        >
          <div
            className='bg-tertiary rounded-[25px] min-h-[400px] flex justify-center items-center flex-col overflow-hidden cursor-pointer'
            onClick={openModal} // Open modal on click
          >
            <img
              src={image} // Ensure this points to the thumbnail or image
              alt={title}
              className='w-full h-full object-cover'
            />
          </div>
        </motion.div>
      </Tilt>
      <ImageModal isOpen={isModalOpen} onClose={closeModal} pdf={myCVpdf[index].pdf} /> {/* Call modal */}
    </>
  );
};

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My CV</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {myCV.map((cv, index) => (
          <CartCV key={cv.title} index={index} {...cv} />
        ))}
        <SocialIcons /> {/* Add the SocialIcons component here */}

      </div>
    </>
  );
};

export default SectionWrapper(Resume, 'resume');
