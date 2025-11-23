
import React, { useState, useRef, useEffect } from 'react';
import { Upload, X, Loader2, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface TryWithAIProps {
  language: Language;
}

const TryWithAI: React.FC<TryWithAIProps> = ({ language }) => {
  const t = TRANSLATIONS[language].aiFeature;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Loading animation effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isLoading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % 3);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    validateAndSetImage(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetImage(e.target.files[0]);
    }
  };

  const validateAndSetImage = (file: File) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError(t.error.desc);
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError("File size too large (Max 5MB)");
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      setSelectedImage(base64);
      setGeneratedImage(null); // Reset previous result
      generateWrap(base64);
    };
    reader.readAsDataURL(file);
  };

  const generateWrap = async (imageBase64: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Extract clean base64 string and mime type
      const parts = imageBase64.split(';');
      const mimeType = parts[0].split(':')[1];
      const base64Data = parts[1].split(',')[1];

      // Call our secure server-side API route
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: base64Data,
          mimeType: mimeType
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate image");
      }

      setGeneratedImage(data.image);

    } catch (err: any) {
      console.error("AI Generation Error:", err);
      setError(err.message || t.error.desc);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setSelectedImage(null);
    setGeneratedImage(null);
    setError(null);
  };

  return (
    <div className="bg-brand-darker min-h-screen pt-24 pb-16 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3 mr-2" />
            Beta Feature
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            {t.title}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Main Interface */}
        {!selectedImage && (
          <div 
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
              isDragging 
                ? 'border-brand-blue bg-brand-blue/5 scale-[1.02]' 
                : 'border-slate-700 bg-slate-800/50 hover:border-slate-500'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t.dropzone.drag}</h3>
            <p className="text-slate-400 mb-6">{t.dropzone.or}</p>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="bg-brand-blue hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg shadow-brand-blue/20"
            >
              {t.dropzone.browse}
            </button>
            <p className="mt-4 text-xs text-slate-500">{t.dropzone.support}</p>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/png, image/jpeg" 
              onChange={handleFileInput}
            />
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
                <div className="relative w-24 h-24 mb-8">
                    <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-brand-blue rounded-full border-t-transparent animate-spin"></div>
                    <Sparkles className="absolute inset-0 m-auto text-brand-blue w-8 h-8 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.processing.title}</h3>
                <p className="text-brand-blue font-mono text-sm">
                    {loadingStep === 0 && t.processing.step1}
                    {loadingStep === 1 && t.processing.step2}
                    {loadingStep === 2 && t.processing.step3}
                </p>
            </div>
        )}

        {/* Result View */}
        {selectedImage && !isLoading && (
            <div className="animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Before */}
                    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.result.before}</span>
                        </div>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black relative group">
                            <img src={selectedImage} alt="Original" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* After */}
                    <div className="bg-slate-800 rounded-xl p-4 border border-brand-blue/30 shadow-[0_0_30px_rgba(14,165,233,0.1)]">
                         <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center">
                                <Sparkles className="w-3 h-3 mr-2" />
                                {t.result.after}
                            </span>
                        </div>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black relative">
                            {error ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-900">
                                    <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                                    <p className="text-white font-bold">{t.error.title}</p>
                                    <p className="text-slate-400 text-sm mt-2">{error}</p>
                                </div>
                            ) : generatedImage ? (
                                <img src={generatedImage} alt="Generated" className="w-full h-full object-contain" />
                            ) : (
                                <div className="absolute inset-0 bg-slate-900"></div> // Placeholder
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <button 
                        onClick={reset}
                        className="flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold transition-colors"
                    >
                        {t.result.regenerate}
                    </button>
                    <p className="text-xs text-slate-500 max-w-md text-center">{t.result.disclaimer}</p>
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default TryWithAI;
