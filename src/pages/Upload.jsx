import React, { useState, useEffect } from 'react';
import { Upload as UploadIcon, Image as ImageIcon, CheckCircle, X } from 'lucide-react';
import SectionCard from '../components/SectionCard';

const Upload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [currentAd, setCurrentAd] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    useEffect(() => {
        // Load current advertisement from localStorage
        const savedAd = localStorage.getItem('fcTamilionsAd');
        if (savedAd) {
            setCurrentAd(savedAd);
        }
    }, []);

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
            setUploadSuccess(false);
        }
    };

    const handleUpload = () => {
        if (previewUrl) {
            localStorage.setItem('fcTamilionsAd', previewUrl);
            setCurrentAd(previewUrl);
            setUploadSuccess(true);
            setTimeout(() => {
                setUploadSuccess(false);
                setSelectedImage(null);
                setPreviewUrl(null);
            }, 2000);
        }
    };

    const handleRemove = () => {
        localStorage.removeItem('fcTamilionsAd');
        setCurrentAd(null);
        setSelectedImage(null);
        setPreviewUrl(null);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-club-black mb-3">Advertisement Upload</h1>
                    <p className="text-gray-600">Upload an advertisement banner to display on the home page</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Upload Section */}
                    <SectionCard title="Upload New Advertisement">
                        <div className="space-y-6">
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-club-yellow transition-colors">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageSelect}
                                    className="hidden"
                                    id="imageUpload"
                                />
                                <label htmlFor="imageUpload" className="cursor-pointer">
                                    <UploadIcon className="mx-auto mb-4 text-club-yellow" size={48} />
                                    <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                                    <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </label>
                            </div>

                            {previewUrl && (
                                <div className="space-y-4">
                                    <div className="relative rounded-lg overflow-hidden border-2 border-club-yellow">
                                        <img src={previewUrl} alt="Preview" className="w-full h-auto" />
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={handleUpload}
                                            className="btn-primary flex-1 flex items-center justify-center"
                                        >
                                            <CheckCircle size={18} className="mr-2" />
                                            Upload Advertisement
                                        </button>
                                        <button
                                            onClick={() => {
                                                setSelectedImage(null);
                                                setPreviewUrl(null);
                                            }}
                                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {uploadSuccess && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                                    <CheckCircle className="text-green-600 mr-3" size={24} />
                                    <div>
                                        <p className="font-semibold text-green-800">Upload Successful!</p>
                                        <p className="text-sm text-green-600">Advertisement is now live on the home page</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </SectionCard>

                    {/* Current Advertisement */}
                    <SectionCard title="Current Advertisement">
                        {currentAd ? (
                            <div className="space-y-4">
                                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                                    <img src={currentAd} alt="Current Advertisement" className="w-full h-auto" />
                                </div>
                                <button
                                    onClick={handleRemove}
                                    className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
                                >
                                    <X size={18} className="mr-2" />
                                    Remove Advertisement
                                </button>
                                <p className="text-sm text-gray-500 text-center">
                                    This advertisement is currently displayed on the home page
                                </p>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <ImageIcon className="mx-auto mb-4 text-gray-400" size={64} />
                                <p className="text-gray-500">No advertisement currently uploaded</p>
                                <p className="text-sm text-gray-400 mt-2">Upload an image to get started</p>
                            </div>
                        )}
                    </SectionCard>
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                        <strong>Note:</strong> The uploaded advertisement will be displayed prominently on the home page. 
                        Recommended image dimensions: 1200x300px for best results.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Upload;
