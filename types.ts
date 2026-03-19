
import React from 'react';

export interface MetricData {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface MetricGroup {
  title: string;
  icon: React.ReactNode;
  metrics: MetricData[];
}
