export type Frontmatter = {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  published: boolean;
};

export type Post = Frontmatter & {
  slug: string;
};

export type PostHeading = {
  id: string;
  text: string | null;
  level: number;
};

export type SearchParams = {
  tag?: string;
  page?: string;
  query?: string;
};

export type MainNavItem = {
  title: string;
  href: string;
};

export type HomeConfig = {
  mainNav: MainNavItem[];
};
