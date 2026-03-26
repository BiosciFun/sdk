// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Biosci {
    struct Research {
        address author;
        string title;
        string ipfsHash;
        uint256 timestamp;
    }

    Research[] public researches;

    event ResearchPublished(address indexed author, string title, string ipfsHash);

    function publishResearch(string memory _title, string memory _ipfsHash) public {
        researches.push(Research(msg.sender, _title, _ipfsHash, block.timestamp));
        emit ResearchPublished(msg.sender, _title, _ipfsHash);
    }

    function getResearchCount() public view returns (uint256) {
        return researches.length;
    }

    function getResearch(uint256 index) public view returns (
        address, string memory, string memory, uint256
    ) {
        Research memory r = researches[index];
        return (r.author, r.title, r.ipfsHash, r.timestamp);
    }
}
