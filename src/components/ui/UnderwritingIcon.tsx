import React from 'react';
import { motion } from 'framer-motion';

const UnderwritingIcon: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[500px]">
      <svg width="100%" height="100%" viewBox="0 0 700 800" className="w-full h-full min-h-[500px] transform-gpu hover:scale-[1.01] transition-transform duration-1000 ease-out" preserveAspectRatio="xMidYMid meet">
        {/* Background Glow */}
        <defs>
          <radialGradient id="underwritingBackgroundGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </radialGradient>
          <linearGradient id="underwritingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
          </linearGradient>
          <linearGradient id="documentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
          </linearGradient>
          <linearGradient id="riskGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(34,197,94,0.8)" />
            <stop offset="50%" stopColor="rgba(251,146,60,0.8)" />
            <stop offset="100%" stopColor="rgba(239,68,68,0.8)" />
          </linearGradient>
        </defs>

        {/* Main Container */}
        <motion.rect
          x="15"
          y="10"
          width="670"
          height="780"
          rx="30"
          fill="url(#underwritingBackgroundGlow)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Header Section */}
        <motion.rect
          x="35"
          y="25"
          width="630"
          height="100"
          rx="20"
          fill="url(#underwritingGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Document Icon */}
        <motion.rect
          x="70"
          y="45"
          width="40"
          height="50"
          rx="8"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
        />

        {/* Document lines */}
        <motion.rect x="75" y="55" width="25" height="2" fill="white" rx="1"
          initial={{ width: 0 }}
          animate={{ width: 25 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        />
        <motion.rect x="75" y="65" width="30" height="2" fill="white" rx="1"
          initial={{ width: 0 }}
          animate={{ width: 30 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        />
        <motion.rect x="75" y="75" width="20" height="2" fill="white" rx="1"
          initial={{ width: 0 }}
          animate={{ width: 20 }}
          transition={{ duration: 0.6, delay: 1.9 }}
        />
        <motion.rect x="75" y="85" width="25" height="2" fill="white" rx="1"
          initial={{ width: 0 }}
          animate={{ width: 25 }}
          transition={{ duration: 0.6, delay: 2.1 }}
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
          AI UNDERWRITING
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
          Risk Assessment Engine
        </motion.text>

        {/* Application Document Section */}
        <motion.rect
          x="35"
          y="150"
          width="300"
          height="280"
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
          x="185"
          y="180"
          fill="white"
          fontSize="20"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.5 }}
        >
          APPLICATION REVIEW
        </motion.text>

        {/* Application Form Fields */}
        <motion.rect
          x="55"
          y="200"
          width="200"
          height="25"
          rx="8"
          fill="url(#documentGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3.0 }}
        />

        <motion.text
          x="65"
          y="215"
          fill="white"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          Applicant: John Smith, Age 35
        </motion.text>

        <motion.rect
          x="55"
          y="235"
          width="200"
          height="25"
          rx="8"
          fill="url(#documentGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3.2 }}
        />

        <motion.text
          x="65"
          y="250"
          fill="white"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.7 }}
        >
          Coverage: $500K Life Insurance
        </motion.text>

        <motion.rect
          x="55"
          y="270"
          width="200"
          height="25"
          rx="8"
          fill="url(#documentGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3.4 }}
        />

        <motion.text
          x="65"
          y="285"
          fill="white"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.9 }}
        >
          Medical History: Clean
        </motion.text>

        <motion.rect
          x="55"
          y="305"
          width="200"
          height="25"
          rx="8"
          fill="url(#documentGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3.6 }}
        />

        <motion.text
          x="65"
          y="320"
          fill="white"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4.1 }}
        >
          Credit Score: 785
        </motion.text>

        {/* AI Risk Analysis Circle */}
        <motion.circle
          cx="185"
          cy="375"
          r="40"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 4.5 }}
        />

        <motion.circle
          cx="185"
          cy="375"
          r="20"
          fill="rgba(34,197,94,0.3)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 5.0 }}
        />

        {/* Checkmark for approval */}
        <motion.path
          d="M175 375 L182 382 L195 369"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 5.5 }}
        />

        {/* Processing Panel */}
        <motion.rect
          x="365"
          y="150"
          width="300"
          height="280"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.0 }}
        />

        <motion.text
          x="515"
          y="180"
          fill="white"
          fontSize="20"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 4.0 }}
        >
          AI PROCESSING
        </motion.text>

        {/* Processing Steps */}
        <motion.rect
          x="385"
          y="200"
          width="260"
          height="35"
          rx="12"
          fill="rgba(59,130,246,0.15)"
          stroke="rgba(59,130,246,0.4)"
          strokeWidth="2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 4.5 }}
        />

        <motion.text
          x="515"
          y="222"
          fill="white"
          fontSize="16"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 5.0 }}
        >
          SCAN
        </motion.text>

        {/* Arrow */}
        <motion.path
          d="M515 235 L515 245"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 5.2 }}
        />
        <motion.path
          d="M510 240 L515 247 L520 240"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 5.4 }}
        />

        <motion.rect
          x="385"
          y="255"
          width="260"
          height="35"
          rx="12"
          fill="rgba(168,85,247,0.15)"
          stroke="rgba(168,85,247,0.4)"
          strokeWidth="2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 5.6 }}
        />

        <motion.text
          x="515"
          y="277"
          fill="white"
          fontSize="16"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 6.0 }}
        >
          ANALYZE
        </motion.text>

        {/* Arrow */}
        <motion.path
          d="M515 290 L515 300"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 6.2 }}
        />
        <motion.path
          d="M510 295 L515 302 L520 295"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 6.4 }}
        />

        <motion.rect
          x="385"
          y="310"
          width="260"
          height="35"
          rx="12"
          fill="rgba(34,197,94,0.15)"
          stroke="rgba(34,197,94,0.4)"
          strokeWidth="2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 6.6 }}
        />

        <motion.text
          x="515"
          y="332"
          fill="white"
          fontSize="16"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 7.0 }}
        >
          DECIDE
        </motion.text>

        {/* Risk Assessment Display */}
        <motion.rect
          x="385"
          y="360"
          width="260"
          height="60"
          rx="15"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 7.2 }}
        />

        <motion.text
          x="515"
          y="380"
          fill="white"
          fontSize="14"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 7.5 }}
        >
          RISK ASSESSMENT
        </motion.text>

        <motion.text
          x="415"
          y="400"
          fill="rgba(34,197,94,0.9)"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 7.8 }}
        >
          Low Risk: 92% Approval
        </motion.text>

        {/* Data Flow Lines */}
        <motion.path
          d="M335 280 Q350 280 365 280"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="3"
          strokeDasharray="6,6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            delay: 8.0,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Analytics Dashboard */}
        <motion.rect
          x="35"
          y="450"
          width="630"
          height="100"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 8.0 }}
        />

        <motion.text
          x="350"
          y="480"
          fill="white"
          fontSize="20"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 8.5 }}
        >
          UNDERWRITING METRICS
        </motion.text>

        {/* Metrics */}
        <motion.text
          x="120"
          y="505"
          fill="white"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 9.0 }}
        >
          Processing: 2.3s
        </motion.text>

        <motion.text
          x="120"
          y="520"
          fill="white"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 9.2 }}
        >
          Accuracy: 97.8%
        </motion.text>

        <motion.text
          x="350"
          y="505"
          fill="white"
          fontSize="12"
          fontWeight="500"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 9.4 }}
        >
          Risk Factors: 47
        </motion.text>

        <motion.text
          x="350"
          y="520"
          fill="white"
          fontSize="12"
          fontWeight="500"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 9.6 }}
        >
          Fraud Detection: Active
        </motion.text>

        <motion.text
          x="580"
          y="505"
          fill="white"
          fontSize="12"
          fontWeight="500"
          textAnchor="end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 9.8 }}
        >
          Compliance: 100%
        </motion.text>

        <motion.text
          x="580"
          y="520"
          fill="white"
          fontSize="12"
          fontWeight="500"
          textAnchor="end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 10.0 }}
        >
          Decisions: 1,247
        </motion.text>

        {/* System Status */}
        <motion.rect
          x="35"
          y="570"
          width="630"
          height="80"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 10.0 }}
        />

        <motion.text
          x="80"
          y="595"
          fill="white"
          fontSize="16"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 10.5 }}
        >
          SYSTEM STATUS
        </motion.text>

        <motion.text
          x="80"
          y="615"
          fill="rgba(34,197,94,0.9)"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 11.0 }}
        >
          All Systems Operational
        </motion.text>

        {/* Status Indicators */}
        {['Risk Engine', 'Data Analytics', 'Decision AI', 'Compliance'].map((system, i) => {
          return (
            <g key={i}>
              <motion.circle
                cx={250 + i * 100}
                cy={600}
                r="8"
                fill="rgba(34,197,94,0.8)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 11.5 + i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              <motion.text
                x={250 + i * 100}
                y={620}
                fill="rgba(255,255,255,0.8)"
                fontSize="10"
                fontWeight="500"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 12.0 + i * 0.2 }}
              >
                {system}
              </motion.text>
            </g>
          );
        })}

        {/* Regulatory Compliance */}
        <motion.rect
          x="35"
          y="670"
          width="630"
          height="80"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 12.0 }}
        />

        <motion.text
          x="350"
          y="700"
          fill="white"
          fontSize="18"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 12.5 }}
        >
          REGULATORY COMPLIANCE ACTIVE
        </motion.text>

        <motion.text
          x="350"
          y="725"
          fill="rgba(255,255,255,0.8)"
          fontSize="14"
          fontWeight="400"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 13.0 }}
        >
          GDPR, SOX, HIPAA compliant with real-time monitoring
        </motion.text>
      </svg>
    </div>
  );
};

export default UnderwritingIcon;