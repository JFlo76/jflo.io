'use client';

import { useEffect, useState } from "react";

export default function MobileCheck({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Check if the screen width is less than 768px (typical tablet breakpoint)
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        // Initial check
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // During SSR or before client-side hydration, render children
    if (!isClient) return <>{children}</>;

    if (isMobile) {
        return (
            <div className="flex flex-col items-center justify-center h-screen w-screen p-4 text-center">
                <h1 className="text-white text-2xl font-bold mb-4">Mobile version coming soon...</h1>
                <p className="text-white text-md">Please visit on a tablet or desktop device for the best experience.</p>
            </div>
        );
    }

    return <>{children}</>;
}
