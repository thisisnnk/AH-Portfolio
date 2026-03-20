
import React from 'react';
import CountUp from './CountUp';
import { MetricData } from '../types';
import * as LucideIcons from 'lucide-react';

interface MetricCardProps {
  metric: MetricData & { iconName?: string };
  index?: number;
  visible?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, index = 0, visible = false }) => {
  const IconComponent = metric.iconName ? (LucideIcons as any)[metric.iconName] : null;
  
  // Calculate stagger delay: 150ms per card
  const staggerDelay = `${index * 150}ms`;

  return (
    <div 
      style={{ transitionDelay: visible ? staggerDelay : '0ms' }}
      className={`glass-card rounded-[24px] p-8 group relative overflow-hidden h-full transform transition-all duration-700 ease-out bg-white ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Animated Glare Sweep — very subtle */}
      <div className="glare-line opacity-30 group-hover:opacity-60 group-hover:duration-1000"></div>

      {/* Static diagonal accent lines — blurred and barely visible */}
      <div className="absolute top-[-20%] left-[20%] w-[3px] h-[140%] bg-gradient-to-b from-transparent via-[#FECC00]/06 to-transparent rotate-[35deg] pointer-events-none blur-[2px] group-hover:via-[#FECC00]/12 transition-all duration-700"></div>
      <div className="absolute bottom-[-20%] right-[15%] w-[3px] h-[140%] bg-gradient-to-b from-transparent via-[#FECC00]/04 to-transparent rotate-[45deg] pointer-events-none blur-[2px] group-hover:via-[#FECC00]/08 transition-all duration-700"></div>

      {/* Soft accent glow on hover */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FECC00]/08 blur-[100px] opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

      <div className="flex justify-between items-start mb-10 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-[#FECC00]/10 flex items-center justify-center border border-[#FECC00]/20 group-hover:bg-[#FECC00]/30 group-hover:border-[#FECC00]/60 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700 shadow-sm">
          {IconComponent ? (
            <IconComponent className="text-[#FECC00] group-hover:drop-shadow-[0_0_12px_#FECC00]" size={24} />
          ) : (
            <LucideIcons.BarChart2 className="text-[#FECC00]" size={24} />
          )}
        </div>
      </div>

      <div className="space-y-1 relative z-10">
        <CountUp
          end={metric.value}
          suffix={metric.suffix}
          prefix={metric.prefix}
          className="text-[54px] font-bold tracking-tighter text-gray-900 block leading-none font-display mb-4 group-hover:text-[#FECC00] transition-colors duration-500"
        />
        <h4 className="text-gray-900 font-bold text-[20px] tracking-tight font-display mb-2 group-hover:translate-x-2 transition-transform duration-500">{metric.label}</h4>
        <p className="text-gray-500 text-[16px] font-normal leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
          {metric.description}
        </p>
      </div>
    </div>
  );
};

export default MetricCard;
