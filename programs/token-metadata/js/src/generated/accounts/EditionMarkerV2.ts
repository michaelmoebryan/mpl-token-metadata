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

/**
 * Arguments used to create {@link EditionMarkerV2}
 * @category Accounts
 * @category generated
 */
export type EditionMarkerV2Args = {
  key: Key
  ledger: Uint8Array
}
/**
 * Holds the data for the {@link EditionMarkerV2} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class EditionMarkerV2 implements EditionMarkerV2Args {
  private constructor(readonly key: Key, readonly ledger: Uint8Array) {}

  /**
   * Creates a {@link EditionMarkerV2} instance from the provided args.
   */
  static fromArgs(args: EditionMarkerV2Args) {
    return new EditionMarkerV2(args.key, args.ledger)
  }

  /**
   * Deserializes the {@link EditionMarkerV2} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [EditionMarkerV2, number] {
    return EditionMarkerV2.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link EditionMarkerV2} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<EditionMarkerV2> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find EditionMarkerV2 account at ${address}`)
    }
    return EditionMarkerV2.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, editionMarkerV2Beet)
  }

  /**
   * Deserializes the {@link EditionMarkerV2} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [EditionMarkerV2, number] {
    return editionMarkerV2Beet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link EditionMarkerV2} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return editionMarkerV2Beet.serialize(this)
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link EditionMarkerV2} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: EditionMarkerV2Args) {
    const instance = EditionMarkerV2.fromArgs(args)
    return editionMarkerV2Beet.toFixedFromValue(instance).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link EditionMarkerV2} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: EditionMarkerV2Args,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      EditionMarkerV2.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link EditionMarkerV2} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      key: 'Key.' + Key[this.key],
      ledger: this.ledger,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const editionMarkerV2Beet = new beet.FixableBeetStruct<
  EditionMarkerV2,
  EditionMarkerV2Args
>(
  [
    ['key', keyBeet],
    ['ledger', beet.bytes],
  ],
  EditionMarkerV2.fromArgs,
  'EditionMarkerV2'
)
