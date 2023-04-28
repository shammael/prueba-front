import Box from "../Box";
import Input from "../Input";
import ButtonGroups from "./components/ButtonGroups";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Resume from "./components/Resume";
import useCalculator from "./hooks/useCalculator";

const Calculator = () => {
  const {
    error,
    getAmount,
    isLoading,
    result,
    setError,
    input: { setValue, value },
  } = useCalculator();

  return (
    <Box className="max-w-[450px]">
      <Header />
      <Input
        onChange={(e) => {
          setValue(e);
          setError("");
        }}
        value={value}
        error={error}
      />

      <ButtonGroups handleClick={getAmount} />

      {isLoading && <Loading />}
      {result && !isLoading && !error && (
        <Resume
          anualAmount={result.anualAmount}
          startingAmount={result.startingAmount}
          percentages={result.percentage}
          cryptoPrice={result.cryptoPrice}
          label={result.label}
        />
      )}
    </Box>
  );
};

export default Calculator;
