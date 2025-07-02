import React from 'react';
import { motion } from 'framer-motion';

const LeadReactivationIcon: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[500px]">
      <svg width="100%" height="100%" viewBox="0 0 700 800" className="w-full h-full min-h-[500px] transform-gpu hover:scale-[1.01] transition-transform duration-1000 ease-out" preserveAspectRatio="xMidYMid meet">
        {/* Background Glow */}
        <defs>
          <radialGradient id="leadBackgroundGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </radialGradient>
          <linearGradient id="leadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
          </linearGradient>
          <linearGradient id="leadCardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
          </linearGradient>
          <linearGradient id="campaignGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(147,51,234,0.3)" />
            <stop offset="100%" stopColor="rgba(147,51,234,0.1)" />
          </linearGradient>
        </defs>

        {/* Main Container */}
        <motion.rect
          x="15"
          y="10"
          width="670"
          height="780"
          rx="30"
          fill="url(#leadBackgroundGlow)"
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
          fill="url(#leadGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Lead Icon */}
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

        {/* Lead icons - people symbols */}
        <motion.circle cx="85" cy="65" r="6" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 1.5 }} />
        <motion.path d="M75 75 Q85 70 95 75 L95 85 L75 85 Z" fill="white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.7 }} />

        {/* Refresh/reactivation symbol */}
        <motion.path
          d="M95 55 Q105 50 105 60 Q105 70 95 75"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.9 }}
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
          LEAD RE-ACTIVATION
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
          AI-Powered Lead Nurturing
        </motion.text>

        {/* Lead Database Section */}
        <motion.rect
          x="35"
          y="150"
          width="630"
          height="120"
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
          fontSize="20"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.5 }}
        >
          LEAD DATABASE
        </motion.text>

        {/* Lead Cards */}
        {[
          { name: "Sarah Johnson", status: "cold", x: 80, color: "rgba(239,68,68,0.8)" },
          { name: "Mike Chen", status: "warm", x: 220, color: "rgba(251,146,60,0.8)" },
          { name: "Lisa Williams", status: "hot", x: 360, color: "rgba(34,197,94,0.8)" },
          { name: "David Kim", status: "cold", x: 500, color: "rgba(239,68,68,0.8)" }
        ].map((lead, i) => (
          <g key={i}>
            <motion.rect
              x={lead.x}
              y="200"
              width="110"
              height="50"
              rx="8"
              fill="url(#leadCardGradient)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.0 + i * 0.2 }}
            />
            <motion.text
              x={lead.x + 55}
              y="220"
              fill="white"
              fontSize="11"
              fontWeight="600"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.5 + i * 0.2 }}
            >
              {lead.name}
            </motion.text>
            <motion.circle
              cx={lead.x + 20}
              cy={235}
              r="6"
              fill={lead.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 4.0 + i * 0.2 }}
            />
            <motion.text
              x={lead.x + 35}
              y="240"
              fill="white"
              fontSize="10"
              fontWeight="500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 4.0 + i * 0.2 }}
            >
              {lead.status}
            </motion.text>
          </g>
        ))}

        {/* AI Analysis Engine */}
        <motion.rect
          x="35"
          y="290"
          width="630"
          height="100"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 4.0 }}
        />

        <motion.text
          x="350"
          y="320"
          fill="white"
          fontSize="20"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 4.5 }}
        >
          AI BEHAVIORAL ANALYSIS
        </motion.text>

        {/* AI Brain Core */}
        <motion.circle
          cx="350"
          cy="350"
          r="25"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 5.0 }}
        />

        <motion.circle
          cx="350"
          cy="350"
          r="12"
          fill="rgba(147,51,234,0.3)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 5.5 }}
        />

        {/* Neural connections */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * 60) * (Math.PI / 180);
          const x1 = 350 + Math.cos(angle) * 15;
          const y1 = 350 + Math.sin(angle) * 15;
          const x2 = 350 + Math.cos(angle) * 25;
          const y2 = 350 + Math.sin(angle) * 25;
          
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{
                duration: 2,
                delay: 5.5 + i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Analysis metrics */}
        <motion.text
          x="150"
          y="340"
          fill="white"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 6.0 }}
        >
          Engagement Score
        </motion.text>

        <motion.text
          x="150"
          y="360"
          fill="white"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 6.2 }}
        >
          Last Interaction
        </motion.text>

        <motion.text
          x="550"
          y="340"
          fill="white"
          fontSize="12"
          fontWeight="500"
          textAnchor="end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 6.4 }}
        >
          Conversion Probability
        </motion.text>

        <motion.text
          x="550"
          y="360"
          fill="white"
          fontSize="12"
          fontWeight="500"
          textAnchor="end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 6.6 }}
        >
          Optimal Contact Time
        </motion.text>

        {/* Campaign Strategies Section */}
        <motion.rect
          x="35"
          y="410"
          width="630"
          height="160"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 6.0 }}
        />

        <motion.text
          x="350"
          y="440"
          fill="white"
          fontSize="20"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 6.5 }}
        >
          TARGETED CAMPAIGNS
        </motion.text>

        {/* Campaign Types */}
        {[
          { type: "EMAIL SEQUENCE", desc: "Personalized drip campaigns", x: 45, color: "rgba(59,130,246,0.3)" },
          { type: "PHONE OUTREACH", desc: "High-value prospect calls", x: 260, color: "rgba(34,197,94,0.3)" },
          { type: "SOCIAL ENGAGEMENT", desc: "LinkedIn & Facebook ads", x: 475, color: "rgba(147,51,234,0.3)" }
        ].map((campaign, i) => (
          <g key={i}>
            <motion.rect
              x={campaign.x}
              y="460"
              width="180"
              height="80"
              rx="12"
              fill={campaign.color}
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 7.0 + i * 0.3 }}
            />
            <motion.text
              x={campaign.x + 90}
              y="485"
              fill="white"
              fontSize="12"
              fontWeight="600"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 7.5 + i * 0.3 }}
            >
              {campaign.type}
            </motion.text>
            <motion.text
              x={campaign.x + 90}
              y="505"
              fill="rgba(255,255,255,0.8)"
              fontSize="10"
              fontWeight="400"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 8.0 + i * 0.3 }}
            >
              {campaign.desc}
            </motion.text>
            <motion.text
              x={campaign.x + 90}
              y="525"
              fill="rgba(255,255,255,0.6)"
              fontSize="10"
              fontWeight="400"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 8.5 + i * 0.3 }}
            >
              {i === 0 ? "87% open rate" : i === 1 ? "23% conversion" : "156% CTR boost"}
            </motion.text>
          </g>
        ))}

        {/* Results Dashboard */}
        <motion.rect
          x="35"
          y="590"
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
          y="620"
          fill="white"
          fontSize="20"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 8.5 }}
        >
          REACTIVATION RESULTS
        </motion.text>

        {/* Results Metrics */}
        <motion.text
          x="150"
          y="645"
          fill="white"
          fontSize="14"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 9.0 }}
        >
          Reactivation Rate: 67%
        </motion.text>

        <motion.text
          x="150"
          y="665"
          fill="white"
          fontSize="14"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 9.2 }}
        >
          Avg Response Time: 2.3 days
        </motion.text>

        <motion.text
          x="550"
          y="645"
          fill="white"
          fontSize="14"
          fontWeight="500"
          textAnchor="end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 9.4 }}
        >
          Conversion Improvement: +342%
        </motion.text>

        <motion.text
          x="550"
          y="665"
          fill="white"
          fontSize="14"
          fontWeight="500"
          textAnchor="end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 9.6 }}
        >
          ROI: 4.8x investment
        </motion.text>

        {/* System Status */}
        <motion.rect
          x="35"
          y="710"
          width="630"
          height="60"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 10.0 }}
        />

        <motion.text
          x="100"
          y="735"
          fill="white"
          fontSize="16"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 10.5 }}
        >
          CAMPAIGN STATUS
        </motion.text>

        <motion.text
          x="100"
          y="755"
          fill="rgba(34,197,94,0.9)"
          fontSize="14"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 11.0 }}
        >
          Active: 12 campaigns running
        </motion.text>

        {/* Status Indicators */}
        {['Email Engine', 'Call Center', 'Social Bot', 'Analytics'].map((system, i) => {
          return (
            <g key={i}>
              <motion.circle
                cx={400 + i * 70}
                cy={740}
                r="6"
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
                x={400 + i * 70}
                y={760}
                fill="rgba(255,255,255,0.8)"
                fontSize="9"
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

        {/* Data Flow Lines */}
        <motion.path
          d="M350 270 Q350 280 350 290"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="3"
          strokeDasharray="6,6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            delay: 12.0,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.path
          d="M350 390 Q350 400 350 410"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="3"
          strokeDasharray="6,6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            delay: 12.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.path
          d="M350 570 Q350 580 350 590"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="3"
          strokeDasharray="6,6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            delay: 13.0,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Flow arrows */}
        <motion.path
          d="M345 285 L350 292 L355 285"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 12.2 }}
        />

        <motion.path
          d="M345 405 L350 412 L355 405"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 12.7 }}
        />

        <motion.path
          d="M345 585 L350 592 L355 585"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 13.2 }}
        />
      </svg>
    </div>
  );
};

export default LeadReactivationIcon;