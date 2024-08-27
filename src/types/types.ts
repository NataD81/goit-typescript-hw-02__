export interface Image {
  id: string;
  urls: { 
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
  user: {
    id: string;
    username: string;
    name: string;
  };
  likes: number;
  description?: string;
  tags?: { title: string }[];
}


export interface FetchImagesResponse {
  total: number;
  total_pages: number;
  results: Image[];
}
