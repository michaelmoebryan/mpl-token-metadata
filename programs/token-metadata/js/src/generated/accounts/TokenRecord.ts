/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { Key, keyBeet } from '../types/Key'
import { TokenState, tokenStateBeet } from '../types/TokenState'
import {
  TokenDelegateRole,
  tokenDelegateRoleBeet,
} from '../types/TokenDelegateRole'
import * as customSerializer from '../../custom/token-record-deserializer'

/**
 * Arguments used to create {@link TokenRecord}
 * @category Accounts
 * @category generated
 */
export type TokenRecordArgs = {
  key: Key
  bump: number
  state: TokenState
  ruleSetRevision: beet.COption<beet.bignum>
  delegate: beet.COption<web3.PublicKey>
  delegateRole: beet.COption<TokenDelegateRole>
  lockedTransfer: beet.COption<web3.PublicKey>
}
/**
 * Holds the data for the {@link TokenRecord} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class TokenRecord implements TokenRecordArgs {
  private constructor(
    readonly key: Key,
    readonly bump: number,
    readonly state: TokenState,
    readonly ruleSetRevision: beet.COption<beet.bignum>,
    readonly delegate: beet.COption<web3.PublicKey>,
    readonly delegateRole: beet.COption<TokenDelegateRole>,
    readonly lockedTransfer: beet.COption<web3.PublicKey>
  ) {}

  /**
   * Creates a {@link TokenRecord} instance from the provided args.
   */
  static fromArgs(args: TokenRecordArgs) {
    return new TokenRecord(
      args.key,
      args.bump,
      args.state,
      args.ruleSetRevision,
      args.delegate,
      args.delegateRole,
      args.lockedTransfer
    )
  }

  /**
   * Deserializes the {@link TokenRecord} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [TokenRecord, number] {
    return TokenRecord.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link TokenRecord} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<TokenRecord> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find TokenRecord account at ${address}`)
    }
    return TokenRecord.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'Do6Z4U9XdZwCGBUUwhWZSCUC6bh96bmgzhqi9zmz8dQL'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, tokenRecordBeet)
  }

  /**
   * Deserializes the {@link TokenRecord} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [TokenRecord, number] {
    return resolvedDeserialize(buf, offset)
  }

  /**
   * Serializes the {@link TokenRecord} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return resolvedSerialize(this)
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link TokenRecord} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: TokenRecordArgs) {
    const instance = TokenRecord.fromArgs(args)
    return tokenRecordBeet.toFixedFromValue(instance).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link TokenRecord} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: TokenRecordArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      TokenRecord.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link TokenRecord} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      key: 'Key.' + Key[this.key],
      bump: this.bump,
      state: 'TokenState.' + TokenState[this.state],
      ruleSetRevision: this.ruleSetRevision,
      delegate: this.delegate,
      delegateRole: this.delegateRole,
      lockedTransfer: this.lockedTransfer,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const tokenRecordBeet = new beet.FixableBeetStruct<
  TokenRecord,
  TokenRecordArgs
>(
  [
    ['key', keyBeet],
    ['bump', beet.u8],
    ['state', tokenStateBeet],
    ['ruleSetRevision', beet.coption(beet.u64)],
    ['delegate', beet.coption(beetSolana.publicKey)],
    ['delegateRole', beet.coption(tokenDelegateRoleBeet)],
    ['lockedTransfer', beet.coption(beetSolana.publicKey)],
  ],
  TokenRecord.fromArgs,
  'TokenRecord'
)

const serializer = customSerializer as unknown as {
  serialize: typeof tokenRecordBeet.serialize
  deserialize: typeof tokenRecordBeet.deserialize
}

const resolvedSerialize =
  typeof serializer.serialize === 'function'
    ? serializer.serialize.bind(serializer)
    : tokenRecordBeet.serialize.bind(tokenRecordBeet)
const resolvedDeserialize =
  typeof serializer.deserialize === 'function'
    ? serializer.deserialize.bind(serializer)
    : tokenRecordBeet.deserialize.bind(tokenRecordBeet)
