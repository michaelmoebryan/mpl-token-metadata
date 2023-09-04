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
 * @category BurnEditionNft
 * @category generated
 */
export const BurnEditionNftStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>([['instructionDiscriminator', beet.u8]], 'BurnEditionNftInstructionArgs')
/**
 * Accounts required by the _BurnEditionNft_ instruction
 *
 * @property [_writable_] metadata
 * @property [_writable_, **signer**] owner
 * @property [_writable_] printEditionMint
 * @property [] masterEditionMint
 * @property [_writable_] printEditionTokenAccount
 * @property [] masterEditionTokenAccount
 * @property [_writable_] masterEditionAccount
 * @property [_writable_] printEditionAccount
 * @property [_writable_] editionMarkerAccount
 * @property [] splTokenProgram
 * @category Instructions
 * @category BurnEditionNft
 * @category generated
 */
export type BurnEditionNftInstructionAccounts = {
  metadata: web3.PublicKey
  owner: web3.PublicKey
  printEditionMint: web3.PublicKey
  masterEditionMint: web3.PublicKey
  printEditionTokenAccount: web3.PublicKey
  masterEditionTokenAccount: web3.PublicKey
  masterEditionAccount: web3.PublicKey
  printEditionAccount: web3.PublicKey
  editionMarkerAccount: web3.PublicKey
  splTokenProgram: web3.PublicKey
}

export const burnEditionNftInstructionDiscriminator = 37

/**
 * Creates a _BurnEditionNft_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category BurnEditionNft
 * @category generated
 */
export function createBurnEditionNftInstruction(
  accounts: BurnEditionNftInstructionAccounts,
  programId = new web3.PublicKey('Do6Z4U9XdZwCGBUUwhWZSCUC6bh96bmgzhqi9zmz8dQL')
) {
  const [data] = BurnEditionNftStruct.serialize({
    instructionDiscriminator: burnEditionNftInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.owner,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.printEditionMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.masterEditionMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.printEditionTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.masterEditionTokenAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.masterEditionAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.printEditionAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.editionMarkerAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.splTokenProgram,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
