import { Link } from "react-router-dom"
import notFound from "../assets/404.png"
const NotFound = () => {
    return <div className="flex flex-col items-center justify-center min-h-screen m-20">
        <img src={notFound} alt="Page not found" className="w-auto max-w-xs" />
        <p className="text-center mt-4">
            Page not found, please visit <Link to="/" className="text-blue-500">here</Link>.
        </p>
    </div>
}

export default NotFound