import PropTypes from "prop-types";


const Card = ({card, handleSelectedPlayers}) => {
   const {image,player_icon, name, flag, country, rating, position, price, type, Ball_Type } = card;
    return (
        <div>
             <div className="card bg-base-100 border-2 p-4">
                <figure className="">
                    <img className="w-96 h-52 object-cover rounded-xl"
                    src={image}
                    alt="player image" />
                </figure>
                <div className="card-body">
                    <div className="flex gap-2 items-center">
                        <img className="w-10 h-10 rounded-full object-cover" src={player_icon} alt="player-icon" />
                        <h2 className="card-title text-sm font-semibold">{name}</h2>
                    </div>
                    <div className="flex items-center gap-4 mt-4 ml-2">
                       <i className="fa-solid fa-flag opacity-40"></i>
                       <img className="w-10" src={flag} alt="country-flag" />
                       <p className="text-sm">{country}</p>
                       <div className="bg-gray-100 p-1 rounded-md">
                          <p className="text-xs">{type}</p>
                       </div>
                    </div>
                    <hr className="mt-4 mb-4" />
                      <div className="flex justify-between">
                        <p className="font-semibold text-sm">Rating</p>
                        <span className="text-sm">{rating}</span>
                      </div>
                      <div className="flex gap-16 ">
                          <p className="font-semibold text-sm">{position}</p>
                          <div className="bg-gray-100 p-1 rounded-md">
                            <p className="text-xs">{Ball_Type ? Ball_Type : ""}</p>
                          </div>
                      </div>
                       <div className="flex items-center">
                           <p className="text-sm font-semibold">Price: ${price}</p>
                           <div className="bg-gray-100 p-1 rounded-md hover:bg-[#D4E927] transition-all duration-200">
                              <button className="text-xs " onClick={() => handleSelectedPlayers(card)}>Choose Player</button>
                           </div>
                       </div>
                </div>
                </div>
        </div>
    );
};

Card.propTypes = {
    handleSelectedPlayers: PropTypes.func.isRequired,
    card: PropTypes.object.isRequired
}

export default Card;