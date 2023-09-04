/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { SeedsVec, seedsVecBeet } from './SeedsVec'
import { LeafInfo, leafInfoBeet } from './LeafInfo'
/**
 * This type is used to derive the {@link PayloadType} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link PayloadType} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type PayloadTypeRecord = {
  Pubkey: { fields: [web3.PublicKey] }
  Seeds: { fields: [SeedsVec] }
  MerkleProof: { fields: [LeafInfo] }
  Number: { fields: [beet.bignum] }
}

/**
 * Union type respresenting the PayloadType data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isPayloadType*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type PayloadType = beet.DataEnumKeyAsKind<PayloadTypeRecord>

export const isPayloadTypePubkey = (
  x: PayloadType
): x is PayloadType & { __kind: 'Pubkey' } => x.__kind === 'Pubkey'
export const isPayloadTypeSeeds = (
  x: PayloadType
): x is PayloadType & { __kind: 'Seeds' } => x.__kind === 'Seeds'
export const isPayloadTypeMerkleProof = (
  x: PayloadType
): x is PayloadType & { __kind: 'MerkleProof' } => x.__kind === 'MerkleProof'
export const isPayloadTypeNumber = (
  x: PayloadType
): x is PayloadType & { __kind: 'Number' } => x.__kind === 'Number'

/**
 * @category userTypes
 * @category generated
 */
export const payloadTypeBeet = beet.dataEnum<PayloadTypeRecord>([
  [
    'Pubkey',
    new beet.BeetArgsStruct<PayloadTypeRecord['Pubkey']>(
      [['fields', beet.fixedSizeTuple([beetSolana.publicKey])]],
      'PayloadTypeRecord["Pubkey"]'
    ),
  ],
  [
    'Seeds',
    new beet.FixableBeetArgsStruct<PayloadTypeRecord['Seeds']>(
      [['fields', beet.tuple([seedsVecBeet])]],
      'PayloadTypeRecord["Seeds"]'
    ),
  ],
  [
    'MerkleProof',
    new beet.FixableBeetArgsStruct<PayloadTypeRecord['MerkleProof']>(
      [['fields', beet.tuple([leafInfoBeet])]],
      'PayloadTypeRecord["MerkleProof"]'
    ),
  ],
  [
    'Number',
    new beet.BeetArgsStruct<PayloadTypeRecord['Number']>(
      [['fields', beet.fixedSizeTuple([beet.u64])]],
      'PayloadTypeRecord["Number"]'
    ),
  ],
]) as beet.FixableBeet<PayloadType, PayloadType>
