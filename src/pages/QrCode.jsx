import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download, Copy, Check, Smartphone } from 'lucide-react';
import Swal from 'sweetalert2';

function TalentExamQR() {
  const [showQR, setShowQR] = useState(true);
  const [copied, setCopied] = useState(false);
  const qrRef = useRef(null);
  
  const formUrl = "http://localhost:5175/telent-search-exam";
  
  const downloadQR = () => {
    const canvas = qrRef.current.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'talent-exam-qr.png';
      link.href = url;
      link.click();
      
      Swal.fire({
        icon: 'success',
        title: 'Downloaded!',
        text: 'QR code has been downloaded successfully',
        timer: 2000,
        showConfirmButton: false
      });
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(formUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    Swal.fire({
      icon: 'success',
      title: 'Copied!',
      text: 'URL copied to clipboard',
      timer: 1500,
      showConfirmButton: false
    });
  };

  const shareQR = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Talent Search Exam Registration',
        text: 'Fill out the talent search exam registration form',
        url: formUrl
      }).catch(console.error);
    } else {
      copyUrl();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Talent Search Exam QR Code
          </h1>
          <p className="text-gray-600">
            Scan this QR code to access the registration form
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* QR Code Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col items-center">
              <div 
                ref={qrRef}
                className="bg-white p-4 rounded-xl border-2 border-gray-200 mb-6"
              >
                <QRCodeCanvas
                  value={formUrl}
                  size={250}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="H"
                  includeMargin={true}
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Scan to Register
              </h3>
              <p className="text-sm text-gray-500 text-center mb-6">
                Use your phone's camera or QR scanner to open the registration form
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={downloadQR}
                  className="flex items-center gap-2 bg-[#B8860B] hover:bg-[#9E7008] text-white px-4 py-2 rounded-lg transition"
                >
                  <Download size={18} />
                  Download QR
                </button>
                
                <button
                  onClick={copyUrl}
                  className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied!' : 'Copy URL'}
                </button>

                <button
                  onClick={shareQR}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition md:hidden"
                >
                  <Smartphone size={18} />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              How to Use
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#B8860B] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Scan the QR Code
                  </h3>
                  <p className="text-sm text-gray-600">
                    Open your phone's camera or QR scanner app and point it at the QR code
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#B8860B] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Open the Link
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tap the notification that appears to open the registration form in your browser
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#B8860B] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Fill the Form
                  </h3>
                  <p className="text-sm text-gray-600">
                    Complete all required fields and submit your registration
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Quick Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#B8860B]">24/7</div>
                    <div className="text-xs text-gray-600">Available</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#B8860B]">2 min</div>
                    <div className="text-xs text-gray-600">To complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* URL Display */}
        <div className="mt-8 bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-2">Direct URL:</p>
          <div className="flex items-center justify-center gap-2">
            <code className="bg-white px-4 py-2 rounded-lg text-sm text-gray-800 border border-gray-200">
              {formUrl}
            </code>
            <button
              onClick={copyUrl}
              className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              title="Copy URL"
            >
              {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {/* Print Instructions */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Download the QR code and print it for physical distribution</p>
          <p className="mt-1">Or share the URL directly with candidates</p>
        </div>
      </div>
    </div>
  );
}

export default TalentExamQR;