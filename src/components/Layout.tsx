import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Layout() {
    return (
        <div className="m-0 p-0 font-inter mx-auto text-primary">
            {/* Navbar */}
            <div className="bg-base-1 text-primary shadow-sm my-1">
                <div className="nav flex justify-between items-center px-5 max-w-3/4 mx-auto">
                    <div className="logo">
                        <Link className="px-5 hover:scale-110" to="/">
                            <div className="heading">Not Tution</div>
                        </Link>
                    </div>

                    <div>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "active-class px-5 hover:font-bold"
                                    : "px-5 hover:font-bold inactive-class"
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "active-class px-5 hover:font-bold"
                                    : "px-5 hover:font-bold inactive-class"
                            }
                            to="/contact-us"
                        >
                            Contact Us
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "active-class px-5 hover:font-bold"
                                    : "px-5 hover:font-bold inactive-class"
                            }
                            to="/about-us"
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "active-class px-5 hover:font-bold"
                                    : "px-5 hover:font-bold inactive-class"
                            }
                            to="/login"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "active-class px-5 hover:font-bold"
                                    : "px-5 hover:font-bold inactive-class"
                            }
                            to="/our-features"
                        >
                            Our Features
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "active-class px-5 hover:font-bold"
                                    : "px-5 hover:font-bold inactive-class"
                            }
                            to="/pricing"
                        >
                            Pricing
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Main */}
            <div className="px-5 min-h-screen bg-base-0 max-w-3/4 mx-auto shadow-sm py-2">
                <Outlet />
            </div>

            {/* Footer */}
            <div className="footer py-20 bg-black mt-5">
                <div className="max-w-screen-xl mx-auto">
                    <div className="offwhite text-center">
                        Copyright © Not Tution 2025
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
