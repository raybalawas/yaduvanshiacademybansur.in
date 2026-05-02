import React, { useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

const AdminUploadTalentExamResult = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewData, setPreviewData] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedClass, setSelectedClass] = useState('');
  const [results, setResults] = useState([]);
  const [uploadMessage, setUploadMessage] = useState('');

  const classes = ['3rd', '4th', '5th', '6th', '7th', '8th'];

  const getAuthToken = () => {
    return localStorage.getItem('adminToken');
  };

  // Clean empty rows and remove unwanted content
  const cleanEmptyRows = (data) => {
    return data.filter(row => {
      const name = row['NAME'] || row['name'];
      const phone = row['MOBILE NO'] || row['phone'] || row['MOBILE'];

      if (!name || String(name).trim() === '') return false;

      const nameStr = String(name).toLowerCase();
      if (nameStr.includes('clipboard') || nameStr.includes('autosave')) return false;

      return true;
    });
  };

  // Handle file selection
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const fileType = selectedFile.name.split('.').pop().toLowerCase();
    if (!['csv', 'xlsx', 'xls'].includes(fileType)) {
      alert('Please upload CSV or Excel file only');
      return;
    }

    setFile(selectedFile);
    previewFileData(selectedFile);
  };

  // Preview file data
  const previewFileData = (file) => {
    const fileType = file.name.split('.').pop().toLowerCase();

    if (fileType === 'csv') {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          let cleanedData = cleanEmptyRows(results.data);
          cleanedData = cleanedData.map((row, idx) => ({
            ...row,
            'SR.NO': idx + 1
          }));
          setPreviewData(cleanedData.slice(0, 10));
          setResults(cleanedData);
          setUploadMessage(`✅ Loaded ${cleanedData.length} records`);
        },
        error: () => {
          alert('Error parsing CSV file');
        }
      });
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet);

        jsonData = cleanEmptyRows(jsonData);
        jsonData = jsonData.map((row, idx) => ({
          ...row,
          'SR.NO': idx + 1
        }));

        setPreviewData(jsonData.slice(0, 10));
        setResults(jsonData);
        setUploadMessage(`✅ Loaded ${jsonData.length} records`);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  // Upload data to server
  const handleUpload = async () => {
    if (!results.length) {
      alert('No data to upload. Please select a file first.');
      return;
    }

    const formattedResults = [];
    const errors = [];

    results.forEach((row, index) => {
      try {
        const formatted = {
          srNo: row['SR.NO'] || row['srNo'] || index + 1,
          name: (row['NAME'] || row['name'] || '').toUpperCase(),
          fName: (row['FATHER NAME'] || row['fName'] || row['FATHER_NAME'] || '').toUpperCase(),
          phone: String(row['MOBILE NO'] || row['phone'] || row['MOBILE'] || '').replace(/\D/g, ''),
          class: selectedClass || row['CLASS'] || row['class'] || '',
          marks: parseInt(row['MARKS'] || row['marks'] || 0),
          rollNo: row['ROLL NO'] || row['rollNo'] || row['ROLL_NO'] || '',
        };

        if (!formatted.name) errors.push(`Row ${index + 1}: Name is required`);
        if (!formatted.fName) errors.push(`Row ${index + 1}: Father name is required`);
        // if (!formatted.phone || formatted.phone.length !== 10) {
        //   errors.push(`Row ${index + 1}: Valid 10-digit phone number is required`);
        // }
        if (!formatted.class) errors.push(`Row ${index + 1}: Class is required`);
        if (isNaN(formatted.marks) || formatted.marks < 0 || formatted.marks > 100) {
          errors.push(`Row ${index + 1}: Marks must be between 0 and 100`);
        }

        formattedResults.push(formatted);
      } catch (err) {
        errors.push(`Row ${index + 1}: ${err.message}`);
      }
    });

    if (errors.length > 0) {
      alert(`Validation errors:\n${errors.slice(0, 5).join('\n')}`);
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const token = getAuthToken();

      if (!token) {
        alert('Please login first. Token not found.');
        setUploading(false);
        return;
      }

      const API_URL = 'http://localhost:5000'; // For local development
      // const API_URL = 'https://yaduvanshiacademybansur-backend.vercel.app'; // For production

      const batchSize = 50;
      let uploaded = 0;
      let failed = 0;

      for (let i = 0; i < formattedResults.length; i += batchSize) {
        const batch = formattedResults.slice(i, i + batchSize);

        const response = await axios.post(
          `${API_URL}/api/talent-result/bulk-upload`,
          { results: batch },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (response.data.success) {
          uploaded += response.data.totalUploaded || batch.length;
          failed += response.data.totalFailed || 0;
        }

        setUploadProgress(Math.round(((i + batch.length) / formattedResults.length) * 100));
      }

      alert(`✅ Upload completed! ${uploaded} records uploaded, ${failed} failed`);
      setUploadMessage(`✅ Upload completed! ${uploaded} records uploaded`);

      // Clear after successful upload
      setFile(null);
      setPreviewData([]);
      setResults([]);
      document.getElementById('file-input').value = '';

    } catch (error) {
      console.error('Upload error:', error);
      alert(error.response?.data?.message || 'Failed to upload data');
      setUploadMessage('❌ Upload failed. Please try again.');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  // Download sample template
  const downloadTemplate = () => {
    const template = [
      ['SR.NO', 'NAME', 'FATHER NAME', 'CLASS', 'MOBILE NO', 'MARKS', 'ROLL NO'],
      ['1', 'AYUSH SINGH', 'DEEPAK SINGH', '4th', '7300499272', '39', '4036'],
      ['2', 'DAKSH', 'DINESH', '4th', '9461041184', '37', '4056'],
      ['3', 'JHALAK YADAV', 'LAKHMI CHAND YADAV', '4th', '9694376488', '36', '']
    ];

    const ws = XLSX.utils.aoa_to_sheet(template);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Template');
    XLSX.writeFile(wb, 'talent_exam_result_template.xlsx');
  };

  return (
    <div className="p-6 w-full bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] px-6 py-4">
          <h1 className="text-2xl font-bold text-white">
            Upload Talent Exam Results
          </h1>
          <p className="text-gray-200 text-sm mt-1">
            Bulk upload student results using CSV or Excel file
          </p>
        </div>

        <div className="p-6">
          {/* Instructions */}
          <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-800 mb-2">Instructions</h3>
            <ul className="text-sm text-blue-700 space-y-1 ml-6 list-disc">
              <li>Supported formats: CSV, Excel (.xlsx, .xls)</li>
              <li>Required columns: NAME, FATHER NAME, MOBILE NO, MARKS</li>
              <li>Optional columns: SR.NO, CLASS, ROLL NO</li>
              <li>Click "Browse" to select your file, then click "Upload to Server"</li>
            </ul>
          </div>

          {/* Class Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Class (if not in file)
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
            >
              <option value="">Select Class (optional)</option>
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>

          {/* File Upload Area */}
          <div className="mb-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#B8860B] transition">
              <input
                id="file-input"
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileSelect}
                className="hidden"
                disabled={uploading}
              />
              <label
                htmlFor="file-input"
                className={`cursor-pointer flex flex-col items-center ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-600">Click to browse or drag and drop</p>
                <p className="text-xs text-gray-400 mt-1">CSV or Excel files only</p>
              </label>
            </div>
          </div>

          {/* Upload Message */}
          {uploadMessage && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700">{uploadMessage}</p>
            </div>
          )}

          {/* File Preview */}
          {previewData.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800">Preview (First 10 rows)</h3>
                <span className="text-sm text-green-600">
                  ✅ {results.length} valid records found
                </span>
              </div>
              <div className="overflow-x-auto border rounded-lg">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      {Object.keys(previewData[0] || {}).map((key) => (
                        <th key={key} className="px-4 py-2 text-left text-xs font-medium text-gray-500 border-b">
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {previewData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        {Object.values(row).map((value, i) => (
                          <td key={i} className="px-4 py-2 text-sm text-gray-600 border-b">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {results.length > 10 && (
                  <p className="text-sm text-gray-500 p-2">
                    Showing first 10 of {results.length} records
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Upload Progress */}
          {uploading && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Uploading...</span>
                <span className="text-sm text-gray-500">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#B8860B] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={downloadTemplate}
              className="px-6 py-2 border border-[#B8860B] text-[#B8860B] rounded-lg hover:bg-[#B8860B] hover:text-white transition font-medium"
            >
              Download Template
            </button>
            <button
              onClick={handleUpload}
              disabled={!results.length || uploading}
              className={`px-6 py-2 rounded-lg font-medium transition flex items-center gap-2
                ${results.length && !uploading
                  ? 'bg-[#B8860B] hover:bg-[#9E7008] text-white cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >
              {uploading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading...
                </>
              ) : (
                'Upload to Server'
              )}
            </button>
          </div>

          {/* Status Message */}
          {!results.length && !uploading && file && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-700">
                ⚠️ No valid records found. Please check your file format.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUploadTalentExamResult;