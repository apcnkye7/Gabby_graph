// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

event GameCreated(uint gameId, address[] players, uint totalPlayers, uint entryFee, uint timestamp);
event Joined(uint gameId, address playerAddress, uint entryFee, uint timestamp);
event GuessAttempted(uint gameId, address playerAddress, uint guessNumber, uint attemptsLeft, bool isCorrect, uint timestamp);
event PlayerEliminated(uint gameId, address playerAddress, uint timestamp);
event GameWon(uint gameId, address playerAddress, uint timestamp);
event PayoutIssued(uint gameId, address winnerAddress, uint prizeAmount, uint timestamp);
event FundsWithdrawn(address owner, uint amount, uint timestamp);

contract Game {
    uint public participationFee = 0.5 ether; // Example participation fee
    address public owner;
    uint private secretNumber = 64;
    uint public deductionPerAttempt = 0.1 ether;

    struct Player {
        uint attempts;
        uint ethBalance;
        bool hasJoined;
        bool winner_stat;
        address player_address;
    }

    mapping(address => Player) public players;
    address[] public playerAddresses;

    constructor() {
        owner = msg.sender;
        emit GameCreated(1, playerAddresses, 0, participationFee, block.timestamp); // Example gameId = 1
    }

    receive() external payable {
        require(msg.value == participationFee, "Incorrect participation fee in receive function: please send exactly 0.5 ether");
        require(msg.sender != owner, "Contract owner can't participate");
        
        players[msg.sender] = Player({
            attempts: 3,
            ethBalance: msg.value,
            hasJoined: true,
            winner_stat: false,
            player_address: msg.sender
        });
        
        playerAddresses.push(msg.sender);
        emit Joined(1, msg.sender, participationFee, block.timestamp); // Example gameId = 1
    }

    function getBalance() public view returns (uint) {
        require(msg.sender == owner, "Only the owner can call this function");
        return address(this).balance;
    }

    function getAllPlayers() public view returns (address[] memory) {
        return playerAddresses;
    }

    function guess(uint _guessNumber) public payable {
        Player storage player = players[msg.sender];
        require(player.attempts > 0, "No attempts left");

        bool isCorrect = _guessNumber == secretNumber;
        if (isCorrect) {
            player.attempts = 0;
            player.ethBalance = 0;
            player.hasJoined = false;
            player.winner_stat = true;
            emit GameWon(1, msg.sender, block.timestamp); // Example gameId = 1
        } else {
            player.attempts -= 1;
            player.ethBalance -= deductionPerAttempt;

            if (player.attempts == 0) {
                player.ethBalance = 0;
                player.hasJoined = false;
                player.winner_stat = false;
                emit PlayerEliminated(1, msg.sender, block.timestamp); // Example gameId = 1
            }
        }
        emit GuessAttempted(1, msg.sender, _guessNumber, player.attempts, isCorrect, block.timestamp); // Example gameId = 1
    }

    function payout(address _player_address) public {
        Player storage player = players[_player_address];
        require(player.winner_stat == true, "You must be a winner of the game");
        require(msg.sender == owner, "Only the owner can transact");

        uint prizeInEther = address(this).balance;
        payable(_player_address).transfer(prizeInEther);

        player.winner_stat = false;
        emit PayoutIssued(1, _player_address, prizeInEther, block.timestamp); // Example gameId = 1
    }

    function withdrawFunds() public {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        uint balance = address(this).balance;
        payable(owner).transfer(balance);
        emit FundsWithdrawn(owner, balance, block.timestamp);
    }
}
