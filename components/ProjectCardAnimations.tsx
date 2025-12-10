import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Animation for Attenda (Geo/Verification)
export const GeoAnimation = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            {/* Grid Map Background */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 opacity-20">
                {[...Array(64)].map((_, i) => (
                    <div key={i} className="bg-brand-500/30 rounded-[1px]" />
                ))}
            </div>

            {/* Radar Pulse Effect */}
            <motion.div
                className="absolute w-64 h-64 border border-brand-500/30 rounded-full"
                animate={{ scale: [0, 1.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
             <motion.div
                className="absolute w-64 h-64 border border-brand-400/20 rounded-full"
                animate={{ scale: [0, 1.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
            />

            {/* Scanning Line */}
            <div className="absolute inset-0 origin-center animate-[spin_3s_linear_infinite] bg-gradient-to-t from-transparent via-brand-500/10 to-transparent w-1/2 h-full left-1/2 origin-left" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 50%)' }}></div>

            {/* User Dot */}
            <motion.div
                className="z-10 relative flex flex-col items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <div className="w-4 h-4 bg-green-500 rounded-full shadow-[0_0_15px_#22c55e] animate-pulse"></div>
                <div className="mt-2 px-2 py-1 bg-black/80 backdrop-blur border border-green-500/50 rounded text-[10px] font-mono text-green-400 whitespace-nowrap">
                    LOCATION VERIFIED
                </div>
            </motion.div>

            {/* Floating Coordinates */}
            <div className="absolute bottom-2 left-2 text-[8px] font-mono text-brand-400 opacity-60">
                LAT: 6.5244 N <br/>
                LNG: 3.3792 E
            </div>
        </div>
    );
};

// Animation for Seamless (AI/Search)
export const AiSearchAnimation = () => {
    return (
        <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center p-4 overflow-hidden">
            {/* Search Bar Simulation */}
            <div className="w-full max-w-[200px] bg-white rounded-full shadow-sm border border-gray-200 p-2 flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full border border-gray-300"></div>
                <div className="h-2 w-20 bg-gray-100 rounded animate-pulse"></div>
            </div>

            {/* Neural Network Nodes */}
            <div className="relative flex items-center justify-center gap-4">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-16 h-20 bg-white border border-brand-100 rounded-lg shadow-sm flex flex-col items-center justify-center p-1"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                    >
                        <div className="w-8 h-8 rounded-full bg-brand-50 mb-2 flex items-center justify-center text-[10px]">
                            {i === 0 ? '⚙️' : i === 1 ? '🧠' : '🛒'}
                        </div>
                        <div className="w-10 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                             <motion.div 
                                className="h-full bg-brand-500"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 1 + (i * 0.5), duration: 1 }}
                             />
                        </div>
                    </motion.div>
                ))}
                
                {/* Connecting Lines */}
                <svg className="absolute top-1/2 left-0 w-full h-full pointer-events-none -z-10" style={{ transform: 'translateY(-50%)' }}>
                    <motion.path 
                        d="M 50 40 L 100 40" 
                        stroke="#e0f2fe" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                     <motion.path 
                        d="M 130 40 L 180 40" 
                        stroke="#e0f2fe" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    />
                </svg>
            </div>
             <div className="mt-4 text-[10px] text-gray-400 font-mono">
                 AI MATCH: 98.4%
             </div>
        </div>
    );
};

// Animation for Afrisata (Voting/Stats)
export const VotingAnimation = () => {
    return (
        <div className="w-full h-full bg-gray-900 flex flex-col justify-end pb-0 overflow-hidden relative">
            {/* Live Indicator */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] text-red-400 font-bold tracking-widest uppercase">Live Voting</span>
            </div>

            {/* Bars */}
            <div className="flex items-end justify-center gap-3 h-32 px-6 pb-6">
                {[40, 70, 50, 90, 60].map((h, i) => (
                    <motion.div
                        key={i}
                        className="w-8 bg-gradient-to-t from-brand-900 to-brand-500 rounded-t-sm relative group"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "backOut" }}
                    >
                        {/* Hover Value */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                            {h}k
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Socket Stream Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>
    );
};

// Animation for ParcelTrack (Logistics)
export const LogisticsAnimation = () => {
    return (
        <div className="w-full h-full bg-[#0f172a] relative overflow-hidden flex items-center justify-center">
            {/* World Map Dots simulation */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 opacity-10 p-4">
                 {[...Array(144)].map((_, i) => (
                    <div key={i} className="bg-white rounded-full w-0.5 h-0.5" />
                 ))}
            </div>

            {/* Route Line */}
            <svg className="absolute inset-0 w-full h-full">
                <motion.path 
                    d="M 50 150 C 100 100, 200 100, 250 150"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </svg>

            {/* Package Icon Moving */}
            <motion.div
                className="absolute w-8 h-8 bg-blue-600 rounded-md border border-blue-400 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10 text-white"
                initial={{ x: 50, y: 134, scale: 0 }}
                animate={{ 
                    x: [50, 150, 250],
                    y: [134, 84, 134],
                    scale: 1
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
                <div className="text-[12px]">📦</div>
            </motion.div>

            {/* Checkpoints */}
            <div className="absolute left-[50px] top-[150px] w-2 h-2 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-green-500/50"></div>
            <div className="absolute left-[250px] top-[150px] w-2 h-2 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-purple-500/50"></div>
            
            {/* UI Overlay */}
            <div className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur px-3 py-1 rounded border border-slate-700">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-slate-300 font-mono">LIVE TRACKING</span>
                </div>
            </div>
            
            {/* RLS Badge */}
             <div className="absolute bottom-4 left-4 bg-slate-800/80 backdrop-blur px-2 py-1 rounded border border-slate-700">
                <div className="flex items-center gap-1">
                    <span className="text-[8px] text-brand-300 font-mono font-bold">RLS: ENABLED</span>
                </div>
            </div>
        </div>
    );
};