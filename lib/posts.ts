import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory: string = path.join(process.cwd(), "posts");
const normalizeFileName = (name: string): string => name.replace(/\.md$/, "");
const fileNames: string[] = fs.readdirSync(postsDirectory);

interface IPosts {}

interface PostDto {
  name: string;
  id: string;
  title: string;
  published?: boolean;
  date: Date;
}

class Posts implements IPosts {
  public filesMetaInfo = fileNames.map((name) => {
    const fullPath: string = path.join(postsDirectory, name);
    const fileContents: string = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id: String(matterResult.data.id), // must be string when used as static page param
      name, // used to map id to actual file to load
    };
  });

  public getAll(): PostDto[] {
    return fileNames
      .map<any>((name) => {
        const fullPath: string = path.join(postsDirectory, name);
        const fileContents: string = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        return {
          name: normalizeFileName(name),
          ...matterResult.data,
        };
      })
      .sort(({ date: a }, { date: b }) => {
        return a < b ? 1 : a > b ? -1 : 0;
      });
  }

  public getAllPublished(): PostDto[] {
    return this.getAll().filter(file => file.published !== false);
  }

  public getPostIds() {
    return this.filesMetaInfo.map((post) => ({ params: { ...post } }));
  }

  public getSinglePostById = (id) => {
    const file = this.filesMetaInfo.find((post) => post.id === id);

    const fullPath = path.join(postsDirectory, file.name);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const {content, data} = matter(fileContents);

    return {
      id,
      contentHTML: content,
      ...data,
    };
  };
}

export default new Posts();
