const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Batman", "Robin", "Wonder Woman"],
    [
      "QmdiJ6HCbewhmZV2MouTdTydibDEb77g2sHwwePeYKub72",
      "QmdeJyRLFmCY4WKhW6ZZQ3SuSYaUcESfKPtp8w9fvB5BGm",
      "QmaBAcLwJYYgmn7qAgoGX5q1n5stjpiZDxDyG1vgbvAWrt",
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

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait(); 
  txn = await gameContract.attackBoss();
  await txn.wait(); 

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
