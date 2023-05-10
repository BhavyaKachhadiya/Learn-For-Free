export async function generateStaticParams() {
    const posts = await fetch('').then((res) => res.json());
   
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }