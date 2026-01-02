import { usePosts } from "../api/usePosts"
import { useCreatePost } from "../api/useCreatePost"
import { useDeletePost } from "../api/useDetelePost"

const PostsPage = () => {
  const { posts, getPosts, isLoading } = usePosts()
  const { inputTitle, createIsLoading, setInputTitle, createPost } = useCreatePost()
  const { deletePost, deleteIsLoading } = useDeletePost()

  const handleCreatePost = async () => {
    await createPost()
    getPosts()
  }

  const handleDeletePost = async (postId: string) => {
    await deletePost(postId)
    getPosts()
  }

  return (
    <div>
      <h1>Posts Page</h1>
      <table border={1} cellPadding={8} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Views</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.views}</td>
                <td>
                  <button disabled={deleteIsLoading} onClick={() => handleDeletePost(post.id)}>DELETE</button> <br />
                  {deleteIsLoading && 'Loading...'}
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}><input type="text" onChange={(e) => setInputTitle(e.target.value)} value={inputTitle} /></td>
          </tr>
        </tfoot>
      </table>
      <button disabled={isLoading} onClick={getPosts}>Dapatkan Postingan</button>
      {isLoading && 'Loading...'}<br />
      <button disabled={createIsLoading} onClick={handleCreatePost}>Buat Postingan</button>
      {createIsLoading && 'Loading...'}
    </div>
  )
}

export default PostsPage