import PostsGrid from "./postsGrid";
import classes from "./allPost.module.css";

function AllPost(props) {
  return (
    <section className={classes.posts}>
      <h1>ALl posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPost;
