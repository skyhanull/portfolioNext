import PostsGrid from "../posts/postsGrid.js";
import classes from "./featuredPosts.js";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
export default FeaturedPosts;
