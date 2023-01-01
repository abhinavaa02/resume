function Navbar() {
    return (
        <div className="fixed-top">
            {/* Bootstrap Navbar Starts Here */}
            <nav className="navbar navbar-expand-lg bg-light navbar-specs">
                <div className="container-fluid ms-lg-5 ms-md-4 ms-3 bg-light">
                    <a className="navbar-brand fw-bold color-text" href="/">Abhinav Agrawal</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-3">
                            <li className="nav-item mx-3">
                                <a className="nav-link fw-bold color-text" aria-current="page" href="/">About</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link fw-bold color-text" href="/">Experience</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link fw-bold color-text" href="/">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
