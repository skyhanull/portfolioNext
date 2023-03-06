import PostContent from "../../components/posts/postsDetail/postContent";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";
import { Fragment } from "react";
import Head from "next/head";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

// export function getStaticPaths() {
//   const postFilenames = getPostsFiles();

//   const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));
//   return {
//     paths: slugs.map((slug) => ({ params: { slug: slug } })),
//     fallback: "false",
//   };
// }

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
export default PostDetailPage;
