import React from 'react';
import { motion } from 'framer-motion';

const ChatAgentIcon: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[500px]">
      <svg width="100%" height="100%" viewBox="0 0 700 800" className="w-full h-full min-h-[500px] transform-gpu hover:scale-[1.01] transition-transform duration-1000 ease-out" preserveAspectRatio="xMidYMid meet">
        {/* Background Glow */}
        <defs>
          <radialGradient id="chatBackgroundGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </radialGradient>
          <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
          </linearGradient>
          <linearGradient id="messageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
          </linearGradient>
          <filter id="chatGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main Container */}
        <motion.rect
          x="15"
          y="10"
          width="670"
          height="780"
          rx="30"
          fill="url(#chatBackgroundGlow)"
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
          fill="url(#chatGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Chat Icon */}
        <motion.rect
          x="70"
          y="45"
          width="50"
          height="50"
          rx="12"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
        />

        <motion.circle cx="90" cy="65" r="4" fill="white" />
        <motion.circle cx="105" cy="65" r="4" fill="white" />
        <motion.circle cx="90" cy="80" r="4" fill="white" />
        <motion.circle cx="105" cy="80" r="4" fill="white" />

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
          INSURX AI CHAT
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
          Active Sessions: 1,247
        </motion.text>

        {/* Chat Interface Section */}
        <motion.rect
          x="35"
          y="150"
          width="420"
          height="300"
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
          x="245"
          y="180"
          fill="white"
          fontSize="24"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.5 }}
        >
          LIVE CONVERSATION
        </motion.text>

        {/* Customer Message */}
        <motion.rect
          x="50"
          y="200"
          width="350"
          height="50"
          rx="10"
          fill="url(#messageGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3.0 }}
        />

        <motion.text
          x="60"
          y="220"
          fill="white"
          fontSize="14"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          Customer
        </motion.text>

        <motion.text
          x="60"
          y="235"
          fill="rgba(255,255,255,0.9)"
          fontSize="12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4.0 }}
        >
          "I need help with my claim status"
        </motion.text>

        {/* AI Response */}
        <motion.rect
          x="50"
          y="260"
          width="350"
          height="70"
          rx="10"
          fill="rgba(59,130,246,0.15)"
          stroke="rgba(59,130,246,0.4)"
          strokeWidth="2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 4.5 }}
        />

        <motion.text
          x="60"
          y="280"
          fill="white"
          fontSize="14"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 5.0 }}
        >
          AI Agent
        </motion.text>

        <motion.text
          x="60"
          y="295"
          fill="rgba(255,255,255,0.9)"
          fontSize="12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 5.5 }}
        >
          "I'll help you check your claim status."
        </motion.text>

        <motion.text
          x="60"
          y="310"
          fill="rgba(255,255,255,0.9)"
          fontSize="12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 6.0 }}
        >
          "Policy #C2024 is currently under review"
        </motion.text>

        <motion.text
          x="60"
          y="325"
          fill="rgba(255,255,255,0.9)"
          fontSize="12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 6.5 }}
        >
          "Should be completed within 3-5 business days."
        </motion.text>

        {/* Typing Indicator */}
        <motion.rect
          x="50"
          y="340"
          width="150"
          height="30"
          rx="10"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          strokeDasharray="3,3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 7.0 }}
        />

        <motion.text
          x="60"
          y="360"
          fill="rgba(255,255,255,0.7)"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 7.5 }}
        >
          AI is typing
        </motion.text>

        {/* Animated Typing Dots */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={140 + i * 12}
            cy={355}
            r="3"
            fill="white"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 8.0 + i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* AI Processor Section */}
        <motion.rect
          x="480"
          y="150"
          width="185"
          height="300"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.0 }}
        />

        <motion.text
          x="572"
          y="180"
          fill="white"
          fontSize="18"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 4.0 }}
        >
          AI PROCESSOR
        </motion.text>

        {/* Central AI Core */}
        <motion.circle
          cx="572"
          cy="250"
          r="50"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />

        <motion.circle
          cx="572"
          cy="250"
          r="20"
          fill="rgba(255,255,255,0.15)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
        />

        {/* Brain Icon */}
        <motion.path
          d="M562 240 Q572 230 582 240 Q582 250 582 260 Q572 270 562 260 Q562 250 562 240"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 3.0 }}
        />

        {/* Neural Network Connections */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const x1 = 572 + Math.cos(angle) * 25;
          const y1 = 250 + Math.sin(angle) * 25;
          const x2 = 572 + Math.cos(angle) * 45;
          const y2 = 250 + Math.sin(angle) * 45;
          
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
                duration: 2.5,
                delay: 3.5 + i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Connection Nodes */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const x = 572 + Math.cos(angle) * 45;
          const y = 250 + Math.sin(angle) * 45;
          
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill="white"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 4.0 + i * 0.15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Processing Status */}
        <motion.text
          x="572"
          y="330"
          fill="white"
          fontSize="14"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 4.0 }}
        >
          Understanding context
        </motion.text>

        {/* Performance Metrics */}
        <motion.rect
          x="490"
          y="350"
          width="164"
          height="90"
          rx="15"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 5.0 }}
        />

        <motion.text
          x="572"
          y="370"
          fill="white"
          fontSize="12"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 5.5 }}
        >
          REAL-TIME ANALYTICS
        </motion.text>

        <motion.text
          x="500"
          y="385"
          fill="rgba(255,255,255,0.8)"
          fontSize="10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 6.0 }}
        >
          Response Time: &lt;2s
        </motion.text>

        <motion.text
          x="500"
          y="400"
          fill="rgba(255,255,255,0.8)"
          fontSize="10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 6.5 }}
        >
          Accuracy: 98.4%
        </motion.text>

        <motion.text
          x="500"
          y="415"
          fill="rgba(255,255,255,0.8)"
          fontSize="10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 7.0 }}
        >
          Satisfaction: 94.7%
        </motion.text>

        <motion.text
          x="500"
          y="430"
          fill="rgba(255,255,255,0.8)"
          fontSize="10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 7.5 }}
        >
          Context Retention: 100%
        </motion.text>

        {/* System Status */}
        <motion.rect
          x="35"
          y="470"
          width="630"
          height="80"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 8.0 }}
        />

        <motion.text
          x="100"
          y="495"
          fill="white"
          fontSize="18"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 8.5 }}
        >
          SYSTEM STATUS
        </motion.text>

        <motion.text
          x="100"
          y="515"
          fill="rgba(34,197,94,0.9)"
          fontSize="14"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 9.0 }}
        >
          All Systems Operational
        </motion.text>

        {/* Status Indicators */}
        {['NLP Engine', 'Context DB', 'Response Gen', 'Analytics'].map((system, i) => {
          return (
            <g key={i}>
              <motion.circle
                cx={350 + i * 80}
                cy={500}
                r="8"
                fill="rgba(34,197,94,0.8)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 9.5 + i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              <motion.text
                x={350 + i * 80}
                y={520}
                fill="rgba(255,255,255,0.8)"
                fontSize="10"
                fontWeight="500"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 10.0 + i * 0.2 }}
              >
                {system}
              </motion.text>
            </g>
          );
        })}

        {/* Data Flow Lines */}
        <motion.path
          d="M455 250 Q465 250 480 250"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="3"
          strokeDasharray="6,6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            delay: 10.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.path
          d="M350 450 Q350 460 350 470"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="3"
          strokeDasharray="6,6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            delay: 11.0,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Multi-language Support */}
        <motion.rect
          x="35"
          y="570"
          width="630"
          height="100"
          rx="20"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 11.0 }}
        />

        <motion.text
          x="350"
          y="600"
          fill="white"
          fontSize="20"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 11.5 }}
        >
          MULTI-LANGUAGE SUPPORT ACTIVE
        </motion.text>

        <motion.text
          x="350"
          y="625"
          fill="rgba(255,255,255,0.8)"
          fontSize="14"
          fontWeight="400"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 12.0 }}
        >
          Supporting 47 languages with context-aware responses
        </motion.text>

        <motion.text
          x="350"
          y="645"
          fill="rgba(255,255,255,0.7)"
          fontSize="12"
          fontWeight="400"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 12.5 }}
        >
          Real-time translation and cultural adaptation capabilities
        </motion.text>
      </svg>
    </div>
  );
};

export default ChatAgentIcon;