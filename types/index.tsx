export interface Post {
  body: object[];
  _id: string;
  title: string;
  publishedAt: string;
  slug: {
    current: string;
  };
  category: {
    title: string;
    description: string;
    slug: {
      current: string;
    };
  };
  author: {
    image(image: any): unknown;
    name: string;
    bio: string;
    slug: {
      current: string;
    };
  };
  image: {
    asset: {
      url: string;
    };
  };
}

export interface Post {
  _id: string;
  title: string;
  // body: object[];
  poster: string;
  // publishedAt: string;
  // slug: {
  //   current: string;
  // }; 
  // author: {
  //   image: string;
  //   name: string;
  //   bio: string;
  //   slug: {
  //     current: string;
  //   };
  // };
  // category: {
  //   title: string;
  //   description: string;
  //   slug: {
  //     current: string;
  //   };
  // };

}
export interface SanityBlock {
  _key: string;
  _type: 'block' | 'image' | 'code';
  style?: 'normal' | 'h1' | 'h2' | 'h3' | 'blockquote';
  children: {
    _key: string;
    _type: 'span';
    text: string;
    marks?: ('strong' | 'em')[];
  }[];
  // add additional properties for other block types if needed
}












// blog => written => poster 
export interface ImageT {
  poster:string,
  title:string
}
// blog card 
export interface BlogCardWrite {
  title: string
  authorLink: string
  author: string
  cat: string
  catlink: string
  date: string
}
export interface BlogCard {
  link: string
  title: string
  authorLink: string
  authorname: string
  date: string
  overview: string
  taglink: string
  tag: string 
  authorlink: string
  author: string
  cat: string
  catlink: string
}
// cat card 
export interface  CatCard {
  title: string
  description: string
  poster: string
  slug: string
}