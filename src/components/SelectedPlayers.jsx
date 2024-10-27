import PropTypes from "prop-types";
import SelectedPlayer from "./SelectedPlayer";
import Cards from "./Cards";


const SelectedPlayers = ({selectedPlayers, handleRemove, check, handleCheck}) => {
   
   
    return (
        <div className="mt-8">
              <h3 className="font-semibold">Selected Players {`(${selectedPlayers.length}/6)`}</h3>
          
              {
                selectedPlayers.map((player,  index) => <SelectedPlayer key={index} player={player} handleRemove={handleRemove}></SelectedPlayer>)
              }
               <button className="bg-[#D4E927] p-2 rounded-lg font-semibold mt-3 text-sm" onClick={() => handleCheck("available")}>Add More Players</button>

              {
                check.cart && <Cards></Cards>
              }
              
        </div>
    );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  check : PropTypes.object.isRequired,
  handleCheck: PropTypes.func.isRequired
}

export default SelectedPlayers;