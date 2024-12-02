import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { date: '2024-01', revenue: 45000, orders: 120 },
  { date: '2024-02', revenue: 52000, orders: 145 },
  { date: '2024-03', revenue: 49000, orders: 132 },
  { date: '2024-04', revenue: 58000, orders: 158 },
  { date: '2024-05', revenue: 63000, orders: 172 },
  { date: '2024-06', revenue: 59000, orders: 160 },
];

interface AnalyticsChartProps {
  type: 'revenue' | 'orders';
}

export default function AnalyticsChart({ type }: AnalyticsChartProps) {
  const formatYAxis = (value: number) => {
    if (type === 'revenue') {
      return `$${value / 1000}k`;
    }
    return value;
  };

  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#000000" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="date"
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString('default', { month: 'short' });
            }}
          />
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip
            formatter={(value: number) =>
              type === 'revenue' ? `$${value.toLocaleString()}` : value
            }
          />
          <Area
            type="monotone"
            dataKey={type}
            stroke="#000000"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}