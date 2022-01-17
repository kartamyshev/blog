import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const normalizeFileName = (fileName) => fileName.replace(/\.md$/, "");
const fileNames: string[] = fs.readdirSync(postsDirectory);

interface IPosts {}

interface Post {
  name: string;
  id: number;
  title: string;
  published?: boolean;
  date: Date;
}

class Posts implements IPosts {
  public filesMetaInfo = fileNames.map((name) => {
    const fullPath: string = path.join(postsDirectory, name);
    const fileContents: string = fs.readFileSync(fullPath, "utf8");
    const {data} = matter(fileContents);

    return {
      id: String(data.id), // must be string when used as static page param
      name, // used to map id to actual file to load
    };
  });

  public getAll() {
    return fileNames
      .map<any>((name) => {
        const fullPath: string = path.join(postsDirectory, name);
        const fileContents: string = fs.readFileSync(fullPath, "utf8");
        const {data} = matter(fileContents);

        return {
          name: normalizeFileName(name),
          ...data,
        };
      })
      .sort(({ date: a }, { date: b }) => {
        return a < b ? 1 : a > b ? -1 : 0;
      });
  }

  public getAllPublished() {
    return this.getAll().filter(file => file.published !== false);
  }

  public getPostIds() {
    return this.filesMetaInfo.map((post) => ({ params: { ...post } }));
  }

  public getSinglePostById = async (id) => {
    const file = this.filesMetaInfo.find((post) => post.id === id);

    const fullPath = path.join(postsDirectory, file.name);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    const proecssedContent = await remark()
      .use(html)
      .process(matterResult.content);

    const contentHTML = proecssedContent.toString();

    return {
      id,
      contentHTML,
      ...matterResult.data,
    };
  };
}

export default new Posts();
