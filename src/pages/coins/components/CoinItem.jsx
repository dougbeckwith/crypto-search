import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CoinItem = ({ coin, index, setShow, setMessage }) => {
  const navigate = useNavigate();

  // State for displaying table row hover styles
  const [hover, setHover] = useState(false);

  // Gets all coins in local storage
  // Checks if coin is already in local storage
  // If it's not add coin to local storage
  function saveDataToLocalStorage(coinId) {
    let coins = [];
    coins = JSON.parse(localStorage.getItem("watchListCoins")) || [];
    const isIn = coins.some((item) => {
      return item === coinId;
    });
    if (isIn === true) {
      localStorage.setItem("watchListCoins", JSON.stringify(coins));
    } else {
      coins.push(coinId);
      localStorage.setItem("watchListCoins", JSON.stringify(coins));
    }
  }

  function sentenceCase(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  // Check if user clicked on Add to watchlist button
  // If true add coin to watchlist
  // Else navigate to the coin page
  const handleClick = (e, id) => {
    if (e.target.textContent === "Add" && e.target.tagName === "BUTTON") {
      console.log(id);
      const coinSentenceCase = sentenceCase(id);
      setMessage(`${coinSentenceCase} Added To Watchlist`);
      setShow(true);
      saveDataToLocalStorage(coin.id);
    } else {
      navigate(id);
    }
  };

  // Handles mouse over table row event to apply styles
  const handleMouseOver = (e) => {
    if (e.target.textContent === "Add" && e.target.tagName === "BUTTON") {
      setHover(false);
    } else if (e.target.className === "text-right pr-2 button") {
      setHover(false);
    } else {
      setHover(true);
    }
  };
  // Handles mouse leaving table row  event
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <tr
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => handleClick(e, coin.id)}
      key={uuidv4()}
      className={
        hover
          ? "border-b border-[#525252] h-[65px] text-lg  cursor-pointer hover:bg-[#ebebe9]"
          : "border-b border-[#525252] h-[65px] text-lg"
      }>
      <td className="pl-2">{index + 1}</td>
      <td>
        <div className="flex items-center">
          <img className="w-[45px]" src={coin.image} alt="" />
          <p className="pl-3">{coin.name}</p>
        </div>
      </td>
      <td className="hidden sm:table-cell">{coin.symbol.toUpperCase()}</td>
      <td className="hidden md:table-cell text-right pr-2 md:pr-0">
        ${coin.current_price.toLocaleString("en-US")}
      </td>
      <td className="text-right hidden 2xl:table-cell">
        ${coin.total_volume.toLocaleString("en-US")}
      </td>
      <td
        className={
          coin.price_change_percentage_24h >= 0
            ? "text-right hidden lg:table-cell text-[green] "
            : "text-right hidden lg:table-cell text-[red]"
        }>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td className="text-right hidden xl:table-cell">
        ${coin.market_cap.toLocaleString("en-US")}
      </td>
      <td className="text-right pr-2 button">
        <button className="bg-[#595cfd] px-4 py-1.5 rounded-md border border-[#595cfd] text-white text-[18px] hover:shadow-xl hover:text-white hover:bg-[#595cfd]">
          Add
        </button>
      </td>
    </tr>
  );
};

export default CoinItem;
