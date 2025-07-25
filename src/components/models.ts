export interface ElementCoords {
  pageY: number;
  pageX: number;
}

export interface Options {
  label: string;
  value: string | number;
}

export interface Tag {
  label: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  link: string[];
  linkToGit?: string;
  linkToFigma?: string;
  linkToSite?: string;
  badges: string[];
}

export interface ResumeItem {
  fio: string;
  position: string;
  city: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  birthday: string;
  about: string;
  experience: ResumeExperienceItem[];
  tags: string[];
  education: {
    type: string;
    qualification: string;
    organization: string;
  };
  title: string;
  company: string;
  description: string;
  period: string;
}

export interface ResumeExperienceItem {
  period: string;
  totalPeriod: string | null;
  company: {
    name: string;
    city: string;
    website: string;
  };
  position: string;
  description: string;
}

export interface ContactItem {
  icon: string;
  text: string;
  link: string;
}

export interface PreviewItem {
  currentIndex: number;
  total: number;
  image: string;
}
