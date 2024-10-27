import PropTypes from "prop-types";


const SelectedPlayer = ({player, handleRemove}) => {
    const {image, name, price,type, id} = player;
    return (
        <div> 
              <div className="flex justify-between items-center mt-4 border-2 rounded p-4">
                <div className="flex items-start gap-3">
                    <img className="w-12 h-12 object-cover rounded-full" src={image}/>
                    <div className="space-y-1">
                        <h4 className="font-semibold text-xs">{name}</h4>
                        <p className="font-semibold text-xs">{type}</p>
                        <p className="text-xs">price : ${price}</p>
                    </div>
                </div>
                <div>
                    <button className="text-2xl" onClick={() => handleRemove(id, name, price)}><i className="fa-solid fa-trash"></i></button>
                </div>
              </div>
        </div>
    );
};

SelectedPlayer.propTypes = {
    player: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default SelectedPlayer;