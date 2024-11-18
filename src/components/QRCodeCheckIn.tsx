import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Check, X } from 'lucide-react';

const QRCodeCheckIn = ({ eventId, userId }) => {
  const [showQR, setShowQR] = useState(false);
  const [checkInStatus, setCheckInStatus] = useState(null);

  const handleCheckIn = () => {
    // Simulate check-in process
    setTimeout(() => {
      setCheckInStatus('success');
      setTimeout(() => setShowQR(false), 2000);
    }, 1500);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowQR(true)}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
      >
        <QrCode className="w-5 h-5" />
        <span>Show Check-in QR</span>
      </button>

      {showQR && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <div className="bg-gray-800 rounded-xl p-6 max-w-sm w-full text-center">
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-semibold mb-4">Event Check-in</h3>
            
            <div className="relative aspect-square bg-white p-4 rounded-lg mb-4 mx-auto max-w-[200px]">
              {/* Placeholder for actual QR code */}
              <div className="absolute inset-0 flex items-center justify-center">
                {checkInStatus === 'success' ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <Check className="w-8 h-8 text-white" />
                  </motion.div>
                ) : (
                  <QrCode className="w-full h-full text-gray-900 p-4" />
                )}
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              {checkInStatus === 'success' 
                ? 'Successfully checked in!'
                : 'Show this QR code to the event organizer'}
            </p>

            {!checkInStatus && (
              <button
                onClick={handleCheckIn}
                className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
              >
                Simulate Check-in
              </button>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QRCodeCheckIn;