import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary mb-5">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    TV Shows
                </NavLink>
            </div>
        </nav>
    );
};

export default Toolbar;