import {
  FundsWithdrawn as FundsWithdrawnEvent,
  GameCreated as GameCreatedEvent,
  GameWon as GameWonEvent,
  GuessAttempted as GuessAttemptedEvent,
  Joined as JoinedEvent,
  PayoutIssued as PayoutIssuedEvent,
  PlayerEliminated as PlayerEliminatedEvent
} from "../generated/Game/Game"
import {
  FundsWithdrawn,
  GameCreated,
  GameWon,
  GuessAttempted,
  Joined,
  PayoutIssued,
  PlayerEliminated
} from "../generated/schema"

export function handleFundsWithdrawn(event: FundsWithdrawnEvent): void {
  let entity = new FundsWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGameCreated(event: GameCreatedEvent): void {
  let entity = new GameCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.players = event.params.players
  entity.totalPlayers = event.params.totalPlayers
  entity.entryFee = event.params.entryFee
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGameWon(event: GameWonEvent): void {
  let entity = new GameWon(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.playerAddress = event.params.playerAddress
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGuessAttempted(event: GuessAttemptedEvent): void {
  let entity = new GuessAttempted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.playerAddress = event.params.playerAddress
  entity.guessNumber = event.params.guessNumber
  entity.attemptsLeft = event.params.attemptsLeft
  entity.isCorrect = event.params.isCorrect
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleJoined(event: JoinedEvent): void {
  let entity = new Joined(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.playerAddress = event.params.playerAddress
  entity.entryFee = event.params.entryFee
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayoutIssued(event: PayoutIssuedEvent): void {
  let entity = new PayoutIssued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.winnerAddress = event.params.winnerAddress
  entity.prizeAmount = event.params.prizeAmount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePlayerEliminated(event: PlayerEliminatedEvent): void {
  let entity = new PlayerEliminated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.playerAddress = event.params.playerAddress
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
