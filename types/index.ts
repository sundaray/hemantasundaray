export type Frontmatter = {
  title: string
  description: string
  author: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  published: boolean
}

export type Post = Frontmatter & {
  slug: string
}

export type KodeKloudPost = {
  id: number
  image: string
  date: string
  href: string
}

export type KodeKloudPostsHook = {
  posts: KodeKloudPost[]
  categories: string[]
  currentPage: number
  totalPages: number
  totalCategoryPosts: number
  selectedCategory: string | null
  onSelectCategory: (category: string) => void
  onClearCategory: () => void
  onNextPage: () => void
  onPrevPage: () => void
}

export type PostHeading = {
  id: string
  text: string | null
  level: number
}

export type SearchParams = {
  tag?: string
  page?: string
  query?: string
  token?: string
  email?: string
}

export type NavItem = {
  title: string
  href: string
}

export type HomeConfig = {
  mainNav: NavItem[]
}
