import React, { useRef, useState } from 'react';
import SplineViewer from '../components/SplineViewer';
import Sphere from '../components/Sphere';
import { Download } from 'lucide-react';

const Landing2Page: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRecording, setIsRecording] = useState(false);

  const recordVideo = async () => {
    if (!containerRef.current || isRecording) return;
    
    setIsRecording(true);
    
    const stream = containerRef.current.querySelector('canvas')?.captureStream(60);
    if (!stream) {
      setIsRecording(false);
      return;
    }

    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=vp9',
      videoBitsPerSecond: 5000000
    });

    const chunks: BlobPart[] = [];
    mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/mp4' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'landing-animation.mp4';
      a.click();
      URL.revokeObjectURL(url);
      setIsRecording(false);
    };

    mediaRecorder.start();
    setTimeout(() => mediaRecorder.stop(), 5000); // Record for 5 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950
                    flex flex-col relative overflow-hidden select-none isolate"
         ref={containerRef}>
      <SplineViewer />
      <Sphere />
      
      <button
        onClick={recordVideo}
        disabled={isRecording}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-xl font-medium
                 bg-blue-500/20 border border-blue-500/30 text-blue-400
                 hover:bg-blue-500/30 transition-all duration-300
                 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Download className="w-4 h-4" />
        {isRecording ? 'Recording...' : 'Download Video'}
      </button>
    </div>
  );
};

export default Landing2Page;