export interface NewsHighLightContent extends Pick<NewsProps, 'title' | 'coverImage' | 'theme' | 'themeColor' | 'contentHighlight'> {}

export interface NewsProps {
  id: string;
  theme: string;
  themeColor: string;
  title: string;
  coverImage: string;
  resume: string;
  content: Paragraph[];
  contentHighlight: string;
  createdAt: Date;
  updatedAt: Date;
  author: string;
}

export interface Paragraph {
  content: string;
}