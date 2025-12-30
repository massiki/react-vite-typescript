import { Link } from "react-router"

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link to={'/'} className="home-link">Go To Home</Link>
    </div>
  )
}

export default NotFound