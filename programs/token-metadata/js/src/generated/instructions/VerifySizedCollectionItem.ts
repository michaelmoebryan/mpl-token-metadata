/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category VerifySizedCollectionItem
 * @category generated
 */
export const VerifySizedCollectionItemStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>(
  [['instructionDiscriminator', beet.u8]],
  'VerifySizedCollectionItemInstructionArgs'
)
/**
 * Accounts required by the _VerifySizedCollectionItem_ instruction
 *
 * @property [_writable_] metadata
 * @property [**signer**] collectionAuthority
 * @property [_writable_, **signer**] payer
 * @property [] collectionMint
 * @property [_writable_] collection
 * @property [] collectionMasterEditionAccount
 * @property [] collectionAuthorityRecord (optional)
 * @category Instructions
 * @category VerifySizedCollectionItem
 * @category generated
 */
export type VerifySizedCollectionItemInstructionAccounts = {
  metadata: web3.PublicKey
  collectionAuthority: web3.PublicKey
  payer: web3.PublicKey
  collectionMint: web3.PublicKey
  collection: web3.PublicKey
  collectionMasterEditionAccount: web3.PublicKey
  collectionAuthorityRecord?: web3.PublicKey
}

export const verifySizedCollectionItemInstructionDiscriminator = 30

/**
 * Creates a _VerifySizedCollectionItem_ instruction.
 *
 * Optional accounts that are not provided will be omitted from the accounts
 * array passed with the instruction.
 * An optional account that is set cannot follow an optional account that is unset.
 * Otherwise an Error is raised.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category VerifySizedCollectionItem
 * @category generated
 */
export function createVerifySizedCollectionItemInstruction(
  accounts: VerifySizedCollectionItemInstructionAccounts,
  programId = new web3.PublicKey('Do6Z4U9XdZwCGBUUwhWZSCUC6bh96bmgzhqi9zmz8dQL')
) {
  const [data] = VerifySizedCollectionItemStruct.serialize({
    instructionDiscriminator: verifySizedCollectionItemInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.collectionMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.collection,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionMasterEditionAccount,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.collectionAuthorityRecord != null) {
    keys.push({
      pubkey: accounts.collectionAuthorityRecord,
      isWritable: false,
      isSigner: false,
    })
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
