import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";


const Cards = ({handleSelectedPlayers}) => {
    const [cards, setCards] = useState([]);

    useEffect(() =>{
        fetch("/fake.json")
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-10">
           
                {
                    cards.map(card => <Card key={card.id} card={card} handleSelectedPlayers={handleSelectedPlayers}></Card>)
                }
        </div>
    );
};

Cards.propTypes = {
    handleSelectedPlayers: PropTypes.func.isRequired
}



export default Cards;