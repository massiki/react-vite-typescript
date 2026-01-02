import { usePosts } from "../api/usePosts"

const PostsPage = () => {
  const { posts, getPosts, isLoading } = usePosts()

  return (
    <div>
      <h1>Posts Page</h1>
      <table border={1} cellPadding={8} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.views}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button disabled={isLoading} onClick={getPosts}>Dapatkan Postingan</button>
      {isLoading && 'Loading...'}
    </div>
  )
}

export default PostsPage