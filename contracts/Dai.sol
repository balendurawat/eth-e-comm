// SPDX-License-Identifier: MIT

pragma solidity^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20";

contract Dai is ERC20 {
    constructor() ERC20('Dai Stablecoin','DAI') public {}

    function faucet(address to, uint amount) external {
        _mint(to, amount);
    }
}