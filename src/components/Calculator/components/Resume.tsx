import numberFormatter from "@/helpers/numberFormatter";
import BitcoinIcon from "@/icons/bitcoin.icon";
import CardanoIcon from "@/icons/Cardano.icon";
import ConvertIcon from "@/icons/Convert.icon";
import EthereumIcon from "@/icons/Ethereum.icon";
import { CryptoTypes } from "@/types";

interface Props {
  startingAmount: number;
  anualAmount: number;
  percentages: number;
  cryptoPrice: number;
  label: CryptoTypes.Bitcoin | CryptoTypes.Cardano | CryptoTypes.Ethereum;
}

const Resume = ({
  anualAmount,
  startingAmount,
  percentages,
  cryptoPrice,
  label,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-end justify-end">
        <p className="text-gray-500 text-sm font-semibold">Starting amount:</p>
        <span className="text-white">
          {numberFormatter(startingAmount, "USD")}
        </span>
      </div>
      <div className="flex flex-col items-end justify-end">
        <p className="text-gray-500 text-sm font-semibold">Anual amount:</p>
        <div className="flex gap-2 items-center ">
          <span className="text-green-500 font-semibold">{percentages}%</span>
          <span className="text-white text-xl">
            {numberFormatter(anualAmount, "USD")}
          </span>
        </div>
      </div>
      <div className="flex text-lg items-center gap-2 justify-center">
        <p className="text-white text-2xl">
          {numberFormatter(startingAmount + anualAmount, "USD")}
        </p>
        <ConvertIcon />
        <p className="text-white text-2xl flex items-center">
          <span>
            {label === CryptoTypes.Bitcoin ? (
              <BitcoinIcon className="h-6 w-6" />
            ) : label === CryptoTypes.Ethereum ? (
              <EthereumIcon />
            ) : label === CryptoTypes.Cardano ? (
              <CardanoIcon />
            ) : null}
          </span>
          {((startingAmount + anualAmount) / cryptoPrice).toFixed(5)}
        </p>
      </div>
    </div>
  );
};

export default Resume;
