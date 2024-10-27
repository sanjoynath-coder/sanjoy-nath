
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Toggle from './components/Toggle'
import AvailablePlayer from './components/AvailablePlayer'
import { toast } from 'react-toastify';

function App() {
  const [coin, setCoin] = useState(0);
  const [check, isCheck] = useState({
    cart: true,
  });
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handlePrice = (freeCoin) => {
    toast.success("Credid Added to your Account")
    setCoin(coin + freeCoin)
  }

  const handleCheck = (status) => {
    if(status === "available"){
      isCheck({
        cart: true
      })
    }else{
      isCheck({
        cart: false
      })
    }
  }

console.log(check);

  const decreasePrice = (price, name, player) => {
    if(coin >= price){
      setCoin(coin - price);
      if(selectedPlayers.length > 5){
        toast.error("Queue Full");
        return
      }else{
        setSelectedPlayers([...selectedPlayers, player]);
      }
      toast.success(`congratulation! ${name} now is in your squad`)
    }else{
      toast.error("buy some coin");
      return false;
    }
  }

 const handleSelectedPlayers = (player) =>{
   const targetPlayer = selectedPlayers.find(selectedPlayer => selectedPlayer.id === player.id);
   if(targetPlayer){
     toast.error("player already in queue");
     return;
    }
     decreasePrice(player.price, player.name, player)
 }

 const handleRemove = (id, name, price) => {
  const remainingPlayer = selectedPlayers.filter(player => player.id !== id);
  setSelectedPlayers(remainingPlayer);
  toast.warn(`Opps! ${name} removed`);
  setCoin(coin + price);
  toast.success("You received your coin back")
 }



  return (
    <>
    <div className='px-5 md:px-0'>
        <Navbar coin={coin}></Navbar>
        <Banner handlePrice={handlePrice}></Banner>
        <AvailablePlayer></AvailablePlayer>
          <Toggle handleCheck={handleCheck} check={check} handleSelectedPlayers={handleSelectedPlayers} selectedPlayers={selectedPlayers} handleRemove={handleRemove}></Toggle>
        <Footer></Footer>
    </div>
    </>
  )
}

export default App