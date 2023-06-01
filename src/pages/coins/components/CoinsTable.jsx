import CoinItem from "./CoinItem";
import { v4 as uuidv4 } from "uuid";

const Coins = ({ filteredCoins, setMessage, setShow }) => {
  return (
    <>
      <div className="w-full bg-[#f7f7f5] pb-[50px] min-h-screen">
        <div className="m-auto container flex justify-center">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#525252] text-left text-xl font-normal">
                <th className="text-lg pl-2 font-normal">#</th>
                <th className="text-lg font-semibold">Name</th>
                <th className="text-lg hidden sm:table-cell font-semibold">
                  Ticker
                </th>
                <th className="text-lg text-right hidden md:table-cell font-semibold">
                  Price CAD
                </th>
                <th className="text-lg text-right hidden 2xl:table-cell font-semibold">
                  Volume
                </th>
                <th className="text-lg text-right hidden lg:table-cell font-semibold">
                  24H %
                </th>
                <th className="text-lg text-right hidden xl:table-cell font-semibold">
                  Market cap
                </th>
                <th className="text-lg text-right pr-2 font-semibold">Watch</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((coin, index) => (
                <CoinItem
                  key={uuidv4()}
                  coin={coin}
                  index={index}
                  setShow={setShow}
                  setMessage={setMessage}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Coins;
