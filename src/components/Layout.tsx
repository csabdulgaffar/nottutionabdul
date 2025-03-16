import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Layout() {

    const location = useLocation();
    console.log(location.pathname)
    return (
        <div className="m-0 p-0 font-inter mx-auto text-primary">
            {/* Navbar */}
            <div className={` ${location.pathname === '/' ? 'text-white absolute z-50 top-0 left-0 w-full bg-black/50     shadow-sm' : 'bg-gray-50 text-primary shadow-sm'}`}>
                <div className="nav flex justify-between items-center px-5 max-w-3/4 mx-auto">
                    <div className="logo">
                        <Link className="px-5 hover:scale-110" to="/">
                            <div className={`${location.pathname == '/' ? 'text-[1.5em] leading-[1.2] font-bold text-white py-2' : 'heading'}`}>Not Tution</div>
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
            <div className={` min-h-screen bg-base-0 shadow-sm ${location.pathname === '/' ? 'w-full' : 'py-2 px-2 max-w-3/4 mx-auto'}`}>
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
        </div >
    );
}

export default Layout;
