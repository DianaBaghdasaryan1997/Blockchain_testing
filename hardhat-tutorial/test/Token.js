const { expect } = require("chai");
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

//Fixture setup
describe("Token contract", function () {
  async function deployTokenFixture() {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("Token");

    await hardhatToken.waitForDeployment();
    //Fixtures return all the information we need for future tests
    return { hardhatToken, owner, addr1, addr2, addr3 }
  }

//Test suite 1 
  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { hardhatToken, owner } = await loadFixture(deployTokenFixture);
      /* This test expects the owner variable stored in the contract to be
      equal to our Signer's owner*/
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const { hardhatToken, owner } = await loadFixture(deployTokenFixture);
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });

    it("Should set rigth initial balances", async function () {
      const { hardhatToken, owner, addr1, addr2, addr3 } = await loadFixture(deployTokenFixture);
      //Check initial balances of accounts
      expect(await hardhatToken.balanceOf(addr1.address)).to.equal(0);
      expect(await hardhatToken.balanceOf(addr2.address)).to.equal(0);
      expect(await hardhatToken.balanceOf(addr3.address)).to.equal(0);
    });

  });

// Test suite 2
describe("Transactions", function () {
  it("Should transfer tokens between accounts", async function () {
    const { hardhatToken, owner, addr1, addr2, addr3 } = await loadFixture(
      deployTokenFixture
    );

    // Transfer 50 tokens from owner to addr1
    await expect(
      hardhatToken.transfer(addr1.address, 50)
    ).to.changeTokenBalances(hardhatToken, [owner, addr1], [-50, 50]);

    // Transfer 50 tokens from addr1 to addr2
    await expect(
      hardhatToken.connect(addr1).transfer(addr2.address, 50)
    ).to.changeTokenBalances(hardhatToken, [addr1, addr2], [-50, 50]);

    // Transfer 20 tokens from addr2 to addr3
    await expect(
      hardhatToken.connect(addr2).transfer(addr3.address, 20)
    ).to.changeTokenBalances(hardhatToken, [addr2, addr3], [-20, 20]);
  });

  it("Should emit Transfer events", async function () {
    const { hardhatToken, owner, addr1, addr2 } = await loadFixture(
      deployTokenFixture
    );

    // Transfer 50 tokens from owner to addr1
    await expect(hardhatToken.transfer(addr1.address, 50))
      .to.emit(hardhatToken, "Transfer")
      .withArgs(owner.address, addr1.address, 50);

    // Transfer 50 tokens from addr1 to addr2
    await expect(hardhatToken.connect(addr1).transfer(addr2.address, 50))
      .to.emit(hardhatToken, "Transfer")
      .withArgs(addr1.address, addr2.address, 50);
  });

  it("Should fail if sender doesn't have enough tokens", async function () {
    const { hardhatToken, owner, addr1 } = await loadFixture(
      deployTokenFixture
    );
    const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

    // Try to send 1 token from addr1 (0 tokens) to owner.
    await expect(
      hardhatToken.connect(addr1).transfer(owner.address, 1)
    ).to.be.revertedWith("Not enough tokens");

    // Owner balance shouldn't have changed.
    expect(await hardhatToken.balanceOf(owner.address)).to.equal(
      initialOwnerBalance
    );
  });

  it("Should prevent non-owner from transferring tokens from owner's account", async function () {
    const { hardhatToken, addr1, addr2 } = await loadFixture(
      deployTokenFixture
    );

    // Try to transfer 50 tokens from owner to addr1 using addr2 (non-owner)
    await expect(
      hardhatToken.connect(addr2).transfer(addr1.address, 50)
    ).to.be.revertedWith("Not enough tokens");
  });
 });
});