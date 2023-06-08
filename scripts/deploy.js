const hre = require("hardhat");

const ourCandidates = ["Bahador", "TokenKhan"];

async function main() {
  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(await candidateNames(ourCandidates));

  await voting.deployed();

  console.log(`Voting contract deployed to ${voting.address}`);
}

async function candidateNames(candidates) {
  const candidatesToBytes = candidates.map((candidate) =>
    hre.ethers.utils.formatBytes32String(candidate)
  );
  return candidatesToBytes;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
