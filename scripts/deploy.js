// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const spawn = require("child_process").spawn;

const fs = require('fs');
const hre = require("hardhat");



async function main() {


  let params = [
    "0x0C06C8d3720de21F0dd1D6DEF2f6f8dcB2CFE0BE"
  ];
  const jackvesting = await hre.ethers.deployContract("JackVesting", params);

  await jackvesting.waitForDeployment();

  console.log(
    `jackvesting deployed to ${jackvesting.target}`
  );
  let addr = {address:jackvesting.target}

  let fileName = fileNameLocal;


  fs.writeFile(fileName, JSON.stringify(addr), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(addr);
    console.log('writing to ' + fileName);
  });
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
