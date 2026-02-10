import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function PageTransitionLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-[#148d8d]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-[#148d8d] rounded-full animate-spin"></div>
        </div>
        <p className="text-sm font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
