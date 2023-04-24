import { Link } from "react-router-dom"

export const NavBar = ()=> {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Tango Fitness</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to={'/'}>Sign Up</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={'/login/'}>Log In</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={'/home/'}>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={'/search/'}>Search</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={'/log/'}>Log</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={'/history/'}>History</Link>
                    </li>
                </ul>
            </div>
            </nav>  
        </>
    )
}