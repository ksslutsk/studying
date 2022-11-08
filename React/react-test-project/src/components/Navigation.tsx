import { Link } from "react-router-dom";

export function Navigation() {
    return(
        <nav className="h-[50px] flex justify-between  items-center px-5 bg-gray-500 text-white">
            <span className="font-bold">React 2022</span>
            <span>
                <Link to="/" className="mr-2">Product page</Link>
                <Link to="/about">About page</Link>
            </span>
        </nav>
    )
}