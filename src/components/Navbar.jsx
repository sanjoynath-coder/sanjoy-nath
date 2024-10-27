import PropTypes from "prop-types";


const Navbar = ({coin}) => {
    return (
        <div className="flex justify-between max-w-screen-xl mx-auto pt-5 sticky top-0 backdrop-blur-lg z-40">
            <div>
                <img src="/logo.png" alt="logo" />
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden md:block">
                <ul className="flex gap-6">
                    <li><a href="#" className="text-gray-600">Home</a></li>
                    <li><a href="#" className="text-gray-600">Fixture</a></li>
                    <li><a href="#" className="text-gray-600">Teams</a></li>
                    <li><a href="#" className="text-gray-600">Schedules</a></li>
                </ul>

                </div>

                <div className="flex items-center gap-2 bg-gray-50 px-2 py-2 border rounded-lg mr-2 ">
                    <span className="text-gray-600">{coin}</span>
                    <p className="text-gray-600">Coin</p>
                    <i className="fa-brands fa-bitcoin text-yellow-400"></i>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    coin: PropTypes.number.isRequired
}

export default Navbar;