const hre = require("hardhat");

async function main() {
  const Biosci = await hre.ethers.getContractFactory("Biosci");
  const biosci = await Biosci.deploy();

  await biosci.waitForDeployment();

  console.log("Biosci deployed to:", await biosci.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
