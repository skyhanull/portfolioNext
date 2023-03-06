import PostItem from "./postsItem";
import classes from "./postsGrid.module.css";

function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts && posts.map((post, idx) => <PostItem key={idx} post={post} />)}
    </ul>
  );
}

export default PostsGrid;
