import ChannelList from 'src/app/components/Functions/All';
import categories from 'src/app/API/All.json';
import webdev from 'src/app/API/WebDev.json';

export default function CategoryPage({ channels, category }) {
  return (
    <div>
      <h1>{category} Channels</h1>
      <ChannelList channels={channels} category={category} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(categories).map((category) => ({
    params: { category },
  }));
  console.log(paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { category } = params;

  // Check if the category exists in the categories object
  if (!categories[category.toLowerCase()]) {
    return {
      notFound: true,
    };
  }

  const channels = categories[category.toLowerCase()];
  return { props: { channels, category } };
}

