// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./TheBlockchainCoders.sol";

contract TokenSale {
    address admin;
    TheBlockchainCoders public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;

    event Sell(address _buyer, uint256 _amount);

    constructor(TheBlockchainCoders _tokenContract, uint256 _tokenPrice) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    function multiply(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require(y == 0 || (z = x * y) / y == x, "Multiplication overflow");
    }

    function buyTokens(uint256 _numberOfTokens) public payable {
        require(msg.value == multiply(_numberOfTokens, tokenPrice), "Incorrect Ether value");
        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens, "Insufficient tokens");
        require(tokenContract.transfer(msg.sender, _numberOfTokens), "Token transfer failed");

        tokensSold += _numberOfTokens;

        emit Sell(msg.sender, _numberOfTokens);
    }

    function endSale() public {
        require(msg.sender == admin, "Only admin can end the sale");
        require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this))), "Token transfer failed");

        payable(admin).transfer(address(this).balance);
    }
}
