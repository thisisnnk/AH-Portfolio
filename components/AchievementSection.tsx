
import React, { useEffect, useRef, useState } from 'react';
import { Bus, Users, Clock, Navigation, GraduationCap, Briefcase, Compass, Heart, RotateCcw, Star, History, Users2, FileText } from 'lucide-react';
import MetricCard from './MetricCard';

interface EnhancedMetricData {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  iconName: string;
}

interface EnhancedMetricGroup {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bgImage: string;
  metrics: EnhancedMetricData[];
}

const ACHIEVEMENT_GROUPS: EnhancedMetricGroup[] = [
  {
    title: "Tours Organized",
    subtitle: "A legacy of movement and discovery across the Indian subcontinent.",
    icon: <Bus className="text-[#FECC00]" size={20} />,
    bgImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2069",
    metrics: [
      { value: 1500, suffix: "+", label: "Successful Trips", description: "Seamless coordination across South India.", iconName: "Navigation" },
      { value: 1000, suffix: "+", label: "College IV Tours", description: "Educational journeys with full safety.", iconName: "GraduationCap" },
      { value: 350, suffix: "+", label: "Corporate Retreats", description: "Managed with executive precision.", iconName: "Briefcase" },
      { value: 100, suffix: "+", label: "FIT Packages", description: "Tailored independent adventures.", iconName: "Compass" }
    ]
  },
  {
    title: "Customer Reach",
    subtitle: "Trust is the currency we value most in every mile traveled.",
    icon: <Users className="text-[#FECC00]" size={20} />,
    bgImage: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=2070",
    metrics: [
      { value: 25000, suffix: "+", label: "Happy Travelers", description: "A massive community of explorers.", iconName: "Heart" },
      { value: 92, suffix: "%", label: "Repeat Clients", description: "Industry-leading retention rate.", iconName: "RotateCcw" },
      { value: 98, suffix: "%", label: "Positive Feedback", description: "Our commitment to excellence.", iconName: "Star" }
    ]
  },
  {
    title: "Scale & Reliability",
    subtitle: "Handling complexities at the highest level for over a decade.",
    icon: <Clock className="text-[#FECC00]" size={20} />,
    bgImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1974",
    metrics: [
      { value: 10, suffix: "+ Years", label: "Market Presence", description: "A decade of mastering travel.", iconName: "History" },
      { value: 700, suffix: "+", label: "Largest Group", description: "Handling mass scale with ease.", iconName: "Users2" },
      { value: 60000, suffix: "+", label: "Custom Itineraries", description: "Unique plans for every traveler.", iconName: "FileText" }
    ]
  }
];

const AchievementSection: React.FC = () => {
  return (
    <section className="py-24 md:py-48 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-32 md:space-y-64">
        {ACHIEVEMENT_GROUPS.map((group, idx) => (
          <GroupRow key={idx} group={group} index={idx} />
        ))}
        
        {/* Cinematic Summary Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-24 glass-card rounded-[2.5rem] items-center relative overflow-hidden group">
            <div className="glare-line opacity-20"></div>
            
            <div className="text-center group-summary cursor-default group/item1 transition-all duration-700 hover:scale-110">
              <div className="text-[72px] font-bold text-[#FECC00] tracking-tighter mb-2 font-display transition-all duration-700">100%</div>
              <div className="text-gray-500 text-[14px] font-bold uppercase tracking-[0.25em] font-montserrat group-hover/item1:text-gray-900 transition-colors duration-500">On-Time Departures</div>
            </div>
            
            <div className="text-center group-summary border-y md:border-y-0 md:border-x border-white/5 py-12 md:py-0 cursor-default group/item2 transition-all duration-700 hover:scale-110">
              <div className="text-[72px] font-bold text-gray-900 tracking-tighter mb-2 font-display group-hover/item2:text-[#FECC00] transition-all duration-700">24/7</div>
              <div className="text-gray-500 text-[14px] font-bold uppercase tracking-[0.25em] font-montserrat group-hover/item2:text-gray-900 transition-colors duration-500">Expert Support</div>
            </div>
            
            <div className="text-center group-summary cursor-default group/item3 transition-all duration-700 hover:scale-110">
              <div className="text-[72px] font-bold text-gray-900 tracking-tighter mb-2 font-display group-hover/item3:text-[#FECC00] transition-all duration-700">&lt; 2%</div>
              <div className="text-gray-500 text-[14px] font-bold uppercase tracking-[0.25em] font-montserrat group-hover/item3:text-gray-900 transition-colors duration-500">Cancellation Rate</div>
            </div>
        </div>
      </div>
    </section>
  );
};

const GroupRow: React.FC<{ group: EnhancedMetricGroup, index: number }> = ({ group, index }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={rowRef}
      className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
    >
      <div className={`lg:col-span-4 sticky top-32 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-white/5 border border-[#FECC00]/20 shadow-[0_0_20px_rgba(254,204,0,0.1)]">
            {group.icon}
          </div>
          <span className="text-[#FECC00] text-[13px] font-bold tracking-[0.2em] uppercase font-montserrat">Impact</span>
        </div>
        <h3 className="text-headline text-gray-900 mb-6 font-display">{group.title}</h3>
        <p className="text-gray-500 text-body font-medium leading-relaxed">
          {group.subtitle}
        </p>
      </div>
      
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {group.metrics.map((metric, mIdx) => (
          <MetricCard key={mIdx} metric={metric} index={mIdx} visible={isVisible} />
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
