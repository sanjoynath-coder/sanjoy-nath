

const Footer = () => {
    return (
        <div className="relative">
                <div className="h-[50vh] text-center pt-32 mt-10 max-w-screen-xl mx-auto relative top-56 hidden lg:block bg-white bg-[url('/bg-shadow.png')] border-2 rounded-2xl">
                    <h3 className="text-3xl font-bold">Subscribe to our Newsletter</h3>
                    <p className="text-xl mt-3 text-gray-500">Get the latest updates and news right in your inbox!</p>
                    <div className="mt-3">
                        <input type="text" placeholder="Enter Your Email" className="w-96 py-3 px-1 outline-none rounded-md border border-gray-400 placeholder:text-sm" />
                        <button className="ml-3 bg-gradient-to-r from-pink-400 to-yellow-400 py-3 px-4 rounded-lg">Subscribe</button>
                    </div>
                </div>

           


                <div className="bg-[#060919] lg:h-screen pt-0 md:pt-5 pb-5 lg:pb-0 lg:pt-72 z-20 ">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="">
                            <img src="/logo-footer.png" alt="ogo-footer-image" className="mx-auto mb-8" />
                        </div>

                        <div className="flex flex-col lg:flex-row text-center lg:text-left space-y-7 justify-between text-white">
                            <div>
                                <h5 className="mb-3">About Us</h5>
                                <p className=" text-gray-400 text-sm">We are a passionate team dedicated to <br /> providing the best services to our customers.</p>
                            </div>
                            <div>
                                <h5 className="mb-3">Quick Links</h5>
                                <ul className="space-y-4 text-gray-400 text-sm">
                                    <li><a href="#" className="">Home</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className="mb-3 ">Subscribe to our newsletter for the latest updates.</p>
                                <div>
                                    <input type="text" placeholder="Enter Your Email" className="py-3 px-2 rounded-md placeholder:text-sm" />
                                    <button className="ml-3 bg-gradient-to-r from-pink-400 to-yellow-400 text-black py-3 px-4 rounded-lg">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-5"/>
                    <p className="text-center mt-5 text-gray-400 text-sm">@2024 Your Company All Rights Reserved.</p>
                </div>
                
        </div>
    );
};

export default Footer;