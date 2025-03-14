
const Login = () => {

    return (

        <div className='grid grid-cols-2 '>

            <div>
                <div className="flex mt-10 justify-center min-h-screen ">
                    <div className="w-full max-w-md textc ">
                        <form className="bg-white shadow-md rounded px-8  pb-8 mb-4">
                            <div className='heading text-center'>
                                Login/Signup
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"


                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"

                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className='button-dark'
                                >
                                    Sign In
                                </div>
                                {/* <a
                            className="inline-block align-baseline font-bold text-sm text-gray-900 hover:scale-105"
                            href="#"
                        >
                            Forgot Password?
                        </a> */}
                            </div>

                        </form>


                        <p className="text-center text-gray-500 text-xs">
                            &copy;2025 Not Tution  All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
            <div>
                <div className='w-3/4 mx-auto h-1/3 shadow sm'>
                    <div className='heading text-center mt-10'>OR</div>
                    <div className='para-primary text-center'>
                        Login/Sigup with Google
                    </div>
                    <div className='p-15 text-center'>GOOGLE</div>
                </div>
            </div>

        </div>

    );
};

export default Login;