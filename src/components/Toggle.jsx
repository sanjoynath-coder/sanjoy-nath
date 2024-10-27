
import PropTypes from "prop-types";
import Cards from "./Cards";
import SelectedPlayers from "./SelectedPlayers";



const Toggle = ({handleCheck, check, handleSelectedPlayers, selectedPlayers, handleRemove}) => {
    return (
        <div>
            <div className="mt-10 max-w-screen-xl mx-auto p-4">   
                <span className={`borde-2 p-2 ${check.cart ? 'bg-[#D4E927]' : ''} rounded-md`} onClick={() => handleCheck("available")}>Available</span>
                <span className={`borde-2 p-2 ${check.cart ? '' : 'bg-[#D4E927]'} rounded-md`} onClick={() => handleCheck("about")}>Selected({selectedPlayers.length})</span>
            {
                check.cart ? <Cards handleSelectedPlayers={handleSelectedPlayers}></Cards> : <SelectedPlayers selectedPlayers={selectedPlayers} handleRemove={handleRemove} check={check} handleCheck={handleCheck}></SelectedPlayers>
            }
        
            </div>
        </div>
    );
};

Toggle.propTypes = {
    handleCheck: PropTypes.func.isRequired,
    check: PropTypes.object.isRequired,
    handleSelectedPlayers: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default Toggle;