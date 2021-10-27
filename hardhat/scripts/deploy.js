const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Batman", "Robin", "Wonder Woman"],
    [
      "https://www.denofgeek.com/wp-content/uploads/2021/08/batman-89-1.jpg?resize=768%2C432",
      "https://variety.com/wp-content/uploads/2021/08/Robin.jpg?w=681&h=383&crop=1",
      "https://i.insider.com/57ee848e11c8e79c0b8b46aa?width=800&format=jpeg",
    ],
    [1000, 2000, 3000],
    [100, 500, 1000],
    "Lex Luthor",
    "https://www.looper.com/img/gallery/the-untold-truth-of-lex-luthor/intro-1577203159.jpg",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to: ", gameContract.address);
  console.log("Done!")
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
