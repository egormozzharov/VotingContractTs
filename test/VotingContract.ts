import { ethers } from "hardhat";

describe("VotingContract", function () {
  it("Should deploy contract succsessfully", async function () {
    const Greeter = await ethers.getContractFactory("VotingContract");
    const greeter = await Greeter.deploy();
    await greeter.deployed();
  });
});
