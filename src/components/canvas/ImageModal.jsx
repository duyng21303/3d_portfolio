import React, { useState } from 'react';
import Modal from 'react-modal';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;

const ImageModal = ({ isOpen, onClose, pdf }) => {
  const [pdfDimensions, setPdfDimensions] = useState({ width: 0, height: 0 });

  // Function to set the dimensions of the PDF when loaded
  const onLoadSuccess = ({ numPages, pageIndex, pageOriginalWidth, pageOriginalHeight }) => {
    setPdfDimensions({
      width: pageOriginalWidth,
      height: pageOriginalHeight,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center z-50 p-4" // Added padding
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div 
        className="bg-white rounded-lg shadow-lg relative max-w-full md:max-w-3xl mx-auto" // Responsive max width
        style={{
          width: `${Math.min(pdfDimensions.width + 32, window.innerWidth - 32)}px`, // Max width
          height: `${Math.min(pdfDimensions.height + 32, window.innerHeight - 32)}px`, // Max height
          paddingTop: '40px', // Space at the top
          paddingBottom: '20px', // Space at the bottom
        }}
      >
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          Close
        </button>
        <div className="flex justify-center">
          <div className="overflow-y-auto" style={{ maxHeight: 'calc(80vh)', width: '100%' }}>
            <Document
              file={pdf}
              onLoadSuccess={onLoadSuccess}
            >
              <Page
                pageNumber={1}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                onLoadSuccess={({ width, height }) => setPdfDimensions({ width, height })}
              />
            </Document>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
