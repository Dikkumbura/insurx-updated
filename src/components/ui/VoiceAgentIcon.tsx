import React from 'react';
import { motion } from 'framer-motion';

const VoiceAgentIcon: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[500px]">
      <svg width="100%" height="100%" viewBox="0 0 700 800" className="w-full h-full min-h-[500px] transform-gpu hover:scale-[1.01] transition-transform duration-1000 ease-out" preserveAspectRatio="xMidYMid meet">
        {/* Background Glow */}
        <defs>
          <radialGradient id="voiceBackgroundGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </radialGradient>
          <linearGradient id="voiceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
          </linearGradient>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
          </linearGradient>
        </defs>

        {/* Main Container - Much wider */}
        <motion.rect
          x="15"
          y="10"
          width="670"
          height="780"
          rx="30"
          fill="url(#voiceBackgroundGlow)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Top Section - Voice Agent Header - Wider */}
        <motion.rect
          x="35"
          y="25"
          width="630"
          height="100"
          rx="20"
          fill="url(#voiceGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Phone Icon */}
        <motion.circle
          cx="120"
          cy="75"
          r="24"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
        />

        <motion.path
          d="M108 60 Q120 56 132 60 Q132 75 132 90 Q120 94 108 90 Q108 75 108 60"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        <motion.text
          x="350"
          y="65"
          fill="white"
          fontSize="32"
          fontWeight="700"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          VOICE AGENT
        </motion.text>

        <motion.text
          x="350"
          y="95"
          fill="rgba(255,255,255,0.8)"
          fontSize="20"
          fontWeight="500"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
        >
          Call: 00:03:42
        </motion.text>

        {/* Voice Waveform Section - Much wider */}
        <motion.rect
          x="35"
          y="150"
          width="630"
          height="200"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          strokeDasharray="4,4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.0 }}
        />

        <motion.text
          x="350"
          y="180"
          fill="white"
          fontSize="24"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.5 }}
        >
          VOICE WAVEFORM
        </motion.text>

        {/* Dynamic Waveform Bars - More bars across wider space */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((i) => {
          const heights = [40, 60, 80, 100, 90, 70, 50, 80, 110, 90, 60, 75, 55, 40, 60, 95, 75, 45, 65, 55, 85, 70, 90, 65, 45, 75, 85, 55, 70, 60];
          const x = 70 + i * 18;
          const height = heights[i];
          const y = 280 - height / 2;

          return (
            <motion.rect
              key={i}
              x={x}
              y={y}
              width="10"
              height={height}
              rx="5"
              fill="url(#waveGradient)"
              initial={{ height: 15, y: 272 }}
              animate={{ height: height, y: y }}
              transition={{
                duration: 3.5,
                delay: 3.0 + i * 0.04,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Central AI Processor - Centered in wider space */}
        <motion.circle
          cx="350"
          cy="450"
          r="100"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />

        {/* Microphone Icon in Center */}
        <motion.circle
          cx="350"
          cy="450"
          r="40"
          fill="rgba(255,255,255,0.15)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
        />

        <motion.rect
          x="330"
          y="430"
          width="40"
          height="40"
          rx="20"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 3.0 }}
        />

        <motion.path
          d="M320 475 Q350 490 380 475"
          fill="none"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 3.5 }}
        />

        {/* Sound Wave Rings - Centered */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.circle
            key={i}
            cx="350"
            cy="450"
            r={100 + i * 25}
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            strokeDasharray="8,8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.1, 1.3] }}
            transition={{
              duration: 5,
              delay: 4.0 + i * 0.4,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Processor Label */}
        <motion.text
          x="350"
          y="580"
          fill="white"
          fontSize="28"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 4.0 }}
        >
          VOICE PROCESSOR
        </motion.text>

        <motion.text
          x="350"
          y="610"
          fill="rgba(255,255,255,0.7)"
          fontSize="20"
          fontWeight="400"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 4.5 }}
        >
          Processing speech
        </motion.text>

        {/* Call Analytics Section - Wider */}
        <motion.rect
          x="35"
          y="650"
          width="630"
          height="60"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.0 }}
        />

        <motion.text
          x="350"
          y="675"
          fill="white"
          fontSize="20"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 4.5 }}
        >
          CALL ANALYTICS
        </motion.text>

        <motion.text
          x="350"
          y="695"
          fill="rgba(255,255,255,0.8)"
          fontSize="16"
          fontWeight="400"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 5.0 }}
        >
          Response Time: 0.8s | Clarity: 9.2/10
        </motion.text>

        {/* Bottom Analytics Indicators - Spread across width */}
        <motion.text
          x="120"
          y="745"
          fill="white"
          fontSize="18"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 5.0 }}
        >
          EMOTIONAL INTELLIGENCE
        </motion.text>

        {/* Emotion Indicators - Spread wider */}
        {['Happy', 'Calm', 'Engaged'].map((emotion, i) => {
          const colors = ['rgba(34,197,94,0.8)', 'rgba(59,130,246,0.8)', 'rgba(147,51,234,0.8)'];
          return (
            <motion.circle
              key={i}
              cx={480 + i * 45}
              cy={740}
              r="14"
              fill={colors[i]}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                delay: 5.5 + i * 0.3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Data Flow Lines - Centered */}
        <motion.path
          d="M350 350 Q350 380 350 410"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="4"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            delay: 6.0,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.path
          d="M350 550 Q350 580 350 630"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="4"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            delay: 6.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.path
          d="M350 710 Q350 720 350 730"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="4"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            delay: 7.0,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
};

export default VoiceAgentIcon;