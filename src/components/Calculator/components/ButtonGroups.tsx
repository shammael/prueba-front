import Button from "@/components/Button";
import BitcoinIcon from "@/icons/bitcoin.icon";
import CardanoIcon from "@/icons/Cardano.icon";
import EtheriumIcon from "@/icons/Ethereum.icon";
import { CryptoTypes } from "@/types";
import { Crypto } from "../interfaces/Crypto";

interface Props {
  handleClick: (value: Crypto) => void;
}

const ButtonGroups = ({ handleClick }: Props) => {
  return (
    <div className="flex gap-2">
      <Button
        icon={BitcoinIcon}
        label="Buy Bitcoin"
        onClick={() => handleClick(CryptoTypes.Bitcoin)}
      />
      <Button
        icon={EtheriumIcon}
        label="Buy Etherium"
        onClick={() => handleClick(CryptoTypes.Ethereum)}
      />
      <Button
        icon={CardanoIcon}
        label="Buy Cardano"
        onClick={() => handleClick(CryptoTypes.Cardano)}
      />
    </div>
  );
};

export default ButtonGroups;
