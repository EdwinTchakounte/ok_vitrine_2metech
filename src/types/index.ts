export interface Award {
  id: string;
  icon: string;
  title: string;
  date: string;
  description: string;
  fullDescription: string;
  image?: string;
  lien?:string;
  color?:string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  location: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  description: string;
}

export interface InstallationStats {
  homes: number;
  reduction: number;
  installTime: number;
  warranty: number;
}
export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website?: string;
  category: 'energy' | 'tech' | 'education' | 'corporate';
}

export interface InstallerApplication {
  name: string;
  email: string;
  phone: string;
  profession: string;
  type: 'company' | 'individual';
  company?: string;
  zone: string;
  experience: string;
  motivation: string;
  cni?: File;
  cv?: File;
}