export interface IArticle {
  _id: string;
  title: string;
  authorId: string;
  slug: string;
  content: string;
  tags: string[];
  modifiedAt: string;
  isPublished: boolean;
  draft: string;
  createdAt: string;
  __v: number;
  publishedAt: string | null;
  scheduledAt: string | null;
  author: IAuthor;
}
export interface IAuthor {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
}
