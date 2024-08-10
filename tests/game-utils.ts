import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  FundsWithdrawn,
  GameCreated,
  GameWon,
  GuessAttempted,
  Joined,
  PayoutIssued,
  PlayerEliminated
} from "../generated/Game/Game"

export function createFundsWithdrawnEvent(
  owner: Address,
  amount: BigInt,
  timestamp: BigInt
): FundsWithdrawn {
  let fundsWithdrawnEvent = changetype<FundsWithdrawn>(newMockEvent())

  fundsWithdrawnEvent.parameters = new Array()

  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return fundsWithdrawnEvent
}

export function createGameCreatedEvent(
  gameId: BigInt,
  players: Array<Address>,
  totalPlayers: BigInt,
  entryFee: BigInt,
  timestamp: BigInt
): GameCreated {
  let gameCreatedEvent = changetype<GameCreated>(newMockEvent())

  gameCreatedEvent.parameters = new Array()

  gameCreatedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  gameCreatedEvent.parameters.push(
    new ethereum.EventParam("players", ethereum.Value.fromAddressArray(players))
  )
  gameCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "totalPlayers",
      ethereum.Value.fromUnsignedBigInt(totalPlayers)
    )
  )
  gameCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "entryFee",
      ethereum.Value.fromUnsignedBigInt(entryFee)
    )
  )
  gameCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return gameCreatedEvent
}

export function createGameWonEvent(
  gameId: BigInt,
  playerAddress: Address,
  timestamp: BigInt
): GameWon {
  let gameWonEvent = changetype<GameWon>(newMockEvent())

  gameWonEvent.parameters = new Array()

  gameWonEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  gameWonEvent.parameters.push(
    new ethereum.EventParam(
      "playerAddress",
      ethereum.Value.fromAddress(playerAddress)
    )
  )
  gameWonEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return gameWonEvent
}

export function createGuessAttemptedEvent(
  gameId: BigInt,
  playerAddress: Address,
  guessNumber: BigInt,
  attemptsLeft: BigInt,
  isCorrect: boolean,
  timestamp: BigInt
): GuessAttempted {
  let guessAttemptedEvent = changetype<GuessAttempted>(newMockEvent())

  guessAttemptedEvent.parameters = new Array()

  guessAttemptedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  guessAttemptedEvent.parameters.push(
    new ethereum.EventParam(
      "playerAddress",
      ethereum.Value.fromAddress(playerAddress)
    )
  )
  guessAttemptedEvent.parameters.push(
    new ethereum.EventParam(
      "guessNumber",
      ethereum.Value.fromUnsignedBigInt(guessNumber)
    )
  )
  guessAttemptedEvent.parameters.push(
    new ethereum.EventParam(
      "attemptsLeft",
      ethereum.Value.fromUnsignedBigInt(attemptsLeft)
    )
  )
  guessAttemptedEvent.parameters.push(
    new ethereum.EventParam("isCorrect", ethereum.Value.fromBoolean(isCorrect))
  )
  guessAttemptedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return guessAttemptedEvent
}

export function createJoinedEvent(
  gameId: BigInt,
  playerAddress: Address,
  entryFee: BigInt,
  timestamp: BigInt
): Joined {
  let joinedEvent = changetype<Joined>(newMockEvent())

  joinedEvent.parameters = new Array()

  joinedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  joinedEvent.parameters.push(
    new ethereum.EventParam(
      "playerAddress",
      ethereum.Value.fromAddress(playerAddress)
    )
  )
  joinedEvent.parameters.push(
    new ethereum.EventParam(
      "entryFee",
      ethereum.Value.fromUnsignedBigInt(entryFee)
    )
  )
  joinedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return joinedEvent
}

export function createPayoutIssuedEvent(
  gameId: BigInt,
  winnerAddress: Address,
  prizeAmount: BigInt,
  timestamp: BigInt
): PayoutIssued {
  let payoutIssuedEvent = changetype<PayoutIssued>(newMockEvent())

  payoutIssuedEvent.parameters = new Array()

  payoutIssuedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  payoutIssuedEvent.parameters.push(
    new ethereum.EventParam(
      "winnerAddress",
      ethereum.Value.fromAddress(winnerAddress)
    )
  )
  payoutIssuedEvent.parameters.push(
    new ethereum.EventParam(
      "prizeAmount",
      ethereum.Value.fromUnsignedBigInt(prizeAmount)
    )
  )
  payoutIssuedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return payoutIssuedEvent
}

export function createPlayerEliminatedEvent(
  gameId: BigInt,
  playerAddress: Address,
  timestamp: BigInt
): PlayerEliminated {
  let playerEliminatedEvent = changetype<PlayerEliminated>(newMockEvent())

  playerEliminatedEvent.parameters = new Array()

  playerEliminatedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  playerEliminatedEvent.parameters.push(
    new ethereum.EventParam(
      "playerAddress",
      ethereum.Value.fromAddress(playerAddress)
    )
  )
  playerEliminatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return playerEliminatedEvent
}
