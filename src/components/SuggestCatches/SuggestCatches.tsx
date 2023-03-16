const SuggestCatches = () => {
  const randomPokemonNumber = randomInt.bind(null, 0, 150);
  const [random1, random2, random3] = [
    randomPokemonNumber(),
    randomPokemonNumber(),
    randomPokemonNumber(),
  ];

  return (
    <>
      <p>{random1}</p>
      <p>{random2}</p>
      <p>{random3}</p>
    </>
  );
};

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

export default SuggestCatches;
