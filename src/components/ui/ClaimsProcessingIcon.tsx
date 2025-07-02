import React from 'react';
import { motion } from 'framer-motion';

const ClaimsProcessingIcon: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[500px]">
      <svg width="100%" height="100%" viewBox="0 0 700 800" className="w-full h-full min-h-[500px] transform-gpu hover:scale-[1.01] transition-transform duration-1000 ease-out" preserveAspectRatio="xMidYMid meet">
        {/* Background Glow */}
        <defs>
          <radialGradient id="claimsBackgroundGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </radialGradient>
          <linearGradient id="claimsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
          </linearGradient>
          <linearGradient id="claimDocumentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
          </linearGradient>
          <linearGradient id="scannerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.3)" />
          </linearGradient>
        </defs>

        {/* Main Container */}
        <motion.rect
          x="15"
          y="10"
          width="670"
          height="780"
          rx="30"
          fill="url(#claimsBackgroundGlow)"
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
          fill="url(#claimsGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Claims Icon */}
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

        {/* Document stack effect */}
        <motion.rect
          x="75"
          y="50"
          width="30"
          height="40"
          rx="6"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        />

        {/* Checkmark for processed claim */}
        <motion.path
          d="M80 68 L87 75 L100 62"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
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
          CLAIMS PROCESSING
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
          Claim #C2024-5847
        </motion.text>

        {/* Claim Document Section */}
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
          DAMAGE ASSESSMENT
        </motion.text>

        {/* Claim Details */}
        <motion.rect
          x="55"
          y="200"
          width="200"
          height="25"
          rx="8"
          fill="url(#claimDocumentGradient)"
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
          Vehicle: 2022 Honda Accord
        </motion.text>

        <motion.rect
          x="55"
          y="235"
          width="200"
          height="25"
          rx="8"
          fill="url(#claimDocumentGradient)"
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
          Incident: Rear-end collision
        </motion.text>

        <motion.rect
          x="55"
          y="270"
          width="200"
          height="25"
          rx="8"
          fill="url(#claimDocumentGradient)"
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
          Date: March 15, 2024
        </motion.text>

        <motion.rect
          x="55"
          y="305"
          width="200"
          height="25"
          rx="8"
          fill="url(#claimDocumentGradient)"
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
          Estimated Damage: $24,850
        </motion.text>

        {/* AI Scanner Animation */}
        <motion.rect
          x="55"
          y="340"
          width="200"
          height="60"
          rx="15"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 4.5 }}
        />

        <motion.text
          x="155"
          y="360"
          fill="white"
          fontSize="14"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 5.0 }}
        >
          AI SCANNING
        </motion.text>

        {/* Scanning Line */}
        <motion.rect
          x="55"
          y="370"
          width="200"
          height="4"
          fill="url(#scannerGradient)"
          rx="2"
          initial={{ y: 370 }}
          animate={{ y: 390 }}
          transition={{ 
            duration: 2, 
            delay: 5.5, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear"
          }}
        />

        {/* Processing Pipeline */}
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
          PROCESSING PIPELINE
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
          DOCUMENT REVIEW
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
          DAMAGE ASSESSMENT
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
          fill="rgba(251,146,60,0.15)"
          stroke="rgba(251,146,60,0.4)"
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
          APPROVAL
        </motion.text>

        {/* Arrow */}
        <motion.path
          d="M515 345 L515 355"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 7.2 }}
        />
        <motion.path
          d="M510 350 L515 357 L520 350"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 7.4 }}
        />

        <motion.rect
          x="385"
          y="360"
          width="260"
          height="60"
          rx="15"
          fill="rgba(34,197,94,0.1)"
          stroke="rgba(34,197,94,0.4)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 8.2 }}
        />

        <motion.text
          x="515"
          y="385"
          fill="white"
          fontSize="18"
          fontWeight="700"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 8.5 }}
        >
          APPROVED: $24,850
        </motion.text>

        <motion.text
          x="515"
          y="405"
          fill="rgba(255,255,255,0.8)"
          fontSize="14"
          fontWeight="500"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 8.8 }}
        >
          Processing Time: 4.7 minutes
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
            delay: 9.0,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Processing Analytics */}
        <motion.rect
          x="35"
          y="480"
          width="630"
          height="100"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 9.0 }}
        />

        <motion.text
          x="350"
          y="510"
          fill="white"
          fontSize="20"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 9.5 }}
        >
          PROCESSING METRICS
        </motion.text>

        {/* Metrics */}
        <motion.text
          x="120"
          y="535"
          fill="white"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 10.0 }}
        >
          Avg Processing: 5.2 min
        </motion.text>

        <motion.text
          x="120"
          y="550"
          fill="white"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 10.2 }}
        >
          Accuracy: 99.1%
        </motion.text>

        <motion.text
          x="350"
          y="535"
          fill="white"
          fontSize="12"
          fontWeight="500"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 10.4 }}
        >
          Claims Today: 847
        </motion.text>

        <motion.text
          x="350"
          y="550"
          fill="white"
          fontSize="12"
          fontWeight="500"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 10.6 }}
        >
          Fraud Detection: 12 blocked
        </motion.text>

        <motion.text
          x="580"
          y="535"
          fill="white"
          fontSize="12"
          fontWeight="500"
          textAnchor="end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 10.8 }}
        >
          Customer Satisfaction: 96%
        </motion.text>

        <motion.text
          x="580"
          y="550"
          fill="white"
          fontSize="12"
          fontWeight="500"
          textAnchor="end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 11.0 }}
        >
          Cost Savings: $2.4M/year
        </motion.text>

        {/* System Status */}
        <motion.rect
          x="35"
          y="600"
          width="630"
          height="80"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 11.0 }}
        />

        <motion.text
          x="80"
          y="625"
          fill="white"
          fontSize="16"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 11.5 }}
        >
          SYSTEM STATUS
        </motion.text>

        <motion.text
          x="80"
          y="645"
          fill="rgba(34,197,94,0.9)"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 12.0 }}
        >
          All Systems Operational
        </motion.text>

        {/* Status Indicators */}
        {['Doc Scanner', 'AI Assessor', 'Fraud Detector', 'Payment Hub'].map((system, i) => {
          return (
            <g key={i}>
              <motion.circle
                cx={250 + i * 100}
                cy={630}
                r="8"
                fill="rgba(34,197,94,0.8)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 12.5 + i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              <motion.text
                x={250 + i * 100}
                y={650}
                fill="rgba(255,255,255,0.8)"
                fontSize="10"
                fontWeight="500"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 13.0 + i * 0.2 }}
              >
                {system}
              </motion.text>
            </g>
          );
        })}

        {/* Automation Benefits */}
        <motion.rect
          x="35"
          y="700"
          width="630"
          height="80"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 13.0 }}
        />

        <motion.text
          x="350"
          y="730"
          fill="white"
          fontSize="18"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 13.5 }}
        >
          AUTOMATED CLAIMS PROCESSING
        </motion.text>

        <motion.text
          x="350"
          y="755"
          fill="rgba(255,255,255,0.8)"
          fontSize="14"
          fontWeight="400"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 14.0 }}
        >
          Faster settlements, reduced fraud, enhanced customer experience
        </motion.text>
      </svg>
    </div>
  );
};

export default ClaimsProcessingIcon;