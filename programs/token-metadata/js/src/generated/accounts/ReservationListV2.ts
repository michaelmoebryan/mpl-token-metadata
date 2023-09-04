/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { Key, keyBeet } from '../types/Key'
import { Reservation, reservationBeet } from '../types/Reservation'

/**
 * Arguments used to create {@link ReservationListV2}
 * @category Accounts
 * @category generated
 */
export type ReservationListV2Args = {
  key: Key
  masterEdition: web3.PublicKey
  supplySnapshot: beet.COption<beet.bignum>
  reservations: Reservation[]
  totalReservationSpots: beet.bignum
  currentReservationSpots: beet.bignum
}
/**
 * Holds the data for the {@link ReservationListV2} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class ReservationListV2 implements ReservationListV2Args {
  private constructor(
    readonly key: Key,
    readonly masterEdition: web3.PublicKey,
    readonly supplySnapshot: beet.COption<beet.bignum>,
    readonly reservations: Reservation[],
    readonly totalReservationSpots: beet.bignum,
    readonly currentReservationSpots: beet.bignum
  ) {}

  /**
   * Creates a {@link ReservationListV2} instance from the provided args.
   */
  static fromArgs(args: ReservationListV2Args) {
    return new ReservationListV2(
      args.key,
      args.masterEdition,
      args.supplySnapshot,
      args.reservations,
      args.totalReservationSpots,
      args.currentReservationSpots
    )
  }

  /**
   * Deserializes the {@link ReservationListV2} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [ReservationListV2, number] {
    return ReservationListV2.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link ReservationListV2} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<ReservationListV2> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find ReservationListV2 account at ${address}`)
    }
    return ReservationListV2.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, reservationListV2Beet)
  }

  /**
   * Deserializes the {@link ReservationListV2} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [ReservationListV2, number] {
    return reservationListV2Beet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link ReservationListV2} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return reservationListV2Beet.serialize(this)
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link ReservationListV2} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: ReservationListV2Args) {
    const instance = ReservationListV2.fromArgs(args)
    return reservationListV2Beet.toFixedFromValue(instance).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link ReservationListV2} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: ReservationListV2Args,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      ReservationListV2.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link ReservationListV2} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      key: 'Key.' + Key[this.key],
      masterEdition: this.masterEdition.toBase58(),
      supplySnapshot: this.supplySnapshot,
      reservations: this.reservations,
      totalReservationSpots: (() => {
        const x = <{ toNumber: () => number }>this.totalReservationSpots
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      currentReservationSpots: (() => {
        const x = <{ toNumber: () => number }>this.currentReservationSpots
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const reservationListV2Beet = new beet.FixableBeetStruct<
  ReservationListV2,
  ReservationListV2Args
>(
  [
    ['key', keyBeet],
    ['masterEdition', beetSolana.publicKey],
    ['supplySnapshot', beet.coption(beet.u64)],
    ['reservations', beet.array(reservationBeet)],
    ['totalReservationSpots', beet.u64],
    ['currentReservationSpots', beet.u64],
  ],
  ReservationListV2.fromArgs,
  'ReservationListV2'
)
