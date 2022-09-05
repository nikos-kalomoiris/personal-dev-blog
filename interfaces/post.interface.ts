interface Data {
  date: string;
  description: string;
  tags: string;
  title: string;
}

export interface Post {
  content: string;
  data: Data;
  filePath: string;
}
