export interface HeroImage {
  id: string;
  image_path: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface HeroFormData {
  order_index: number;
  is_active: boolean;
}

export interface HeroImagePreview {
  id?: string;
  image_path: string;
  preview: string;
  file?: File;
}
