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
<<<<<<< HEAD
  
=======
  

  // Define types for Strapi API responses
export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface StrapiImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: StrapiImageFormat;
      small: StrapiImageFormat;
      medium: StrapiImageFormat;
      large: StrapiImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt:string;
  };
}

export interface StrapiDataObject<T> {
  id: number;
  attributes: T;
}

export interface StrapiCollectionResponse<T> {
  data: StrapiDataObject<T>[];
}

export interface StrapiSingleResponse<T> {
  data: StrapiDataObject<T>;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Assuming markdown/rich text
  publishedAt: string;
  coverImage: StrapiCollectionResponse<StrapiImage>;
}
>>>>>>> cb739da (update files)
