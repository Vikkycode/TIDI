// src/lib/types.ts
export interface ReportSectionDataPoint {
    label: string;
    value: string | number;
  }
  export interface ReportSectionListItem {
    item: string;
    count: number;
  }
  export interface ReportSection {
    title: string;
    data?: ReportSectionDataPoint[];
    listData?: ReportSectionListItem[];
    description?: string;
  }
  export interface BaselineReport {
    overview: string;
    sections: ReportSection[];
    summaryOfFindings: string[];
    keyRecommendations: Array<{ title: string; points: string[] }>;
    futureGoals: string[];
  }
  export interface ProgramItem {
    id: string;
    type: 'past' | 'upcoming';
    title: string;
    date?: string;
    expectedDate?: string;
    location?: string;
    imageUrl?: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
    report?: BaselineReport;
  }
  