pragma solidity >=0.4.22 <0.8.0;

contract Election {
    //model a candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Fetch candidates
    mapping(uint => Candidate) public candidates;

    // Store candidate count
    uint public candidatesCount;

    // constructor
    constructor() public {
        addCandidates("Pizza");
        addCandidates("Hamburger");
    }

    // add candidates
    function addCandidates(string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

} 