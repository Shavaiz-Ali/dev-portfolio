export interface HeaderItem {
  id: number;
  title: string;
  path: string;
}

// Define the structure for the props object, which includes the headerData array
export interface HeaderMobileProps {
  headerData: HeaderItem[];
}


export interface experienceCardData {
  id: number;
  title: string;
  company: string;
  duration: string;
  endDate?: string;
  description: string;

}
export interface experienceCardDataProps {
  experienceData : experienceCardData[]
}
