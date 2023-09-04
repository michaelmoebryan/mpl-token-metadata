/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import * as beet from '@metaplex-foundation/beet'
import { Key, keyBeet } from '../types/Key'
import { EscrowAuthority, escrowAuthorityBeet } from '../types/EscrowAuthority'

/**
 * Arguments used to create {@link TokenOwnedEscrow}
 * @category Accounts
 * @category generated
 */
export type TokenOwnedEscrowArgs = {
  key: Key
  baseToken: web3.PublicKey
  authority: EscrowAuthority
  bump: number
}
/**
 * Holds the data for the {@link TokenOwnedEscrow} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class TokenOwnedEscrow implements TokenOwnedEscrowArgs {
  private constructor(
    readonly key: Key,
    readonly baseToken: web3.PublicKey,
    readonly authority: EscrowAuthority,
    readonly bump: number
  ) {}

  /**
   * Creates a {@link TokenOwnedEscrow} instance from the provided args.
   */
  static fromArgs(args: TokenOwnedEscrowArgs) {
    return new TokenOwnedEscrow(
      args.key,
      args.baseToken,
      args.authority,
      args.bump
    )
  }

  /**
   * Deserializes the {@link TokenOwnedEscrow} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [TokenOwnedEscrow, number] {
    return TokenOwnedEscrow.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link TokenOwnedEscrow} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<TokenOwnedEscrow> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find TokenOwnedEscrow account at ${address}`)
    }
    return TokenOwnedEscrow.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, tokenOwnedEscrowBeet)
  }

  /**
   * Deserializes the {@link TokenOwnedEscrow} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [TokenOwnedEscrow, number] {
    return tokenOwnedEscrowBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link TokenOwnedEscrow} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return tokenOwnedEscrowBeet.serialize(this)
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link TokenOwnedEscrow} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: TokenOwnedEscrowArgs) {
    const instance = TokenOwnedEscrow.fromArgs(args)
    return tokenOwnedEscrowBeet.toFixedFromValue(instance).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link TokenOwnedEscrow} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: TokenOwnedEscrowArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      TokenOwnedEscrow.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link TokenOwnedEscrow} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      key: 'Key.' + Key[this.key],
      baseToken: this.baseToken.toBase58(),
      authority: this.authority.__kind,
      bump: this.bump,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const tokenOwnedEscrowBeet = new beet.FixableBeetStruct<
  TokenOwnedEscrow,
  TokenOwnedEscrowArgs
>(
  [
    ['key', keyBeet],
    ['baseToken', beetSolana.publicKey],
    ['authority', escrowAuthorityBeet],
    ['bump', beet.u8],
  ],
  TokenOwnedEscrow.fromArgs,
  'TokenOwnedEscrow'
)
