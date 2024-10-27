import PropTypes from "prop-types";


const Banner = ({handlePrice}) => {
    return (
        <div className="bg-black bg-[url('/bg-shadow.png')] bg-no-repeat bg-center bg-cover rounded-xl h-[545px] max-w-screen-xl mx-auto mt-6 text-center pt-10 space-y-4">
                <img className="mx-auto" src="/banner-main.png" alt="banner image" />
                <h1 className="text-3xl md:text-4xl text-white font-semibold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-xl md:text-2xl text-gray-300">Beyond Boundaries Beyond Limits</p>
                <div className="py-2 px-0 border-2 border-[#D4E927] w-[180px] rounded-xl mx-auto">
                     <button className="bg-[#D4E927] p-2 rounded-lg font-semibold" onClick={() => handlePrice(600000)}>Claim Free credit</button>
                </div>
        </div>
    );
};

Banner.propTypes = {
    handlePrice: PropTypes.func.isRequired
}

export default Banner;