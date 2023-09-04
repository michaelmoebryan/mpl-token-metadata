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
 * @category CreateMetadataAccount
 * @category generated
 */
export const CreateMetadataAccountStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>(
  [['instructionDiscriminator', beet.u8]],
  'CreateMetadataAccountInstructionArgs'
)
/**
 * Accounts required by the _CreateMetadataAccount_ instruction
 *
 * @property [_writable_] metadata
 * @property [] mint
 * @property [**signer**] mintAuthority
 * @property [_writable_, **signer**] payer
 * @property [] updateAuthority
 * @category Instructions
 * @category CreateMetadataAccount
 * @category generated
 */
export type CreateMetadataAccountInstructionAccounts = {
  metadata: web3.PublicKey
  mint: web3.PublicKey
  mintAuthority: web3.PublicKey
  payer: web3.PublicKey
  updateAuthority: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
}

export const createMetadataAccountInstructionDiscriminator = 0

/**
 * Creates a _CreateMetadataAccount_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CreateMetadataAccount
 * @category generated
 */
export function createCreateMetadataAccountInstruction(
  accounts: CreateMetadataAccountInstructionAccounts,
  programId = new web3.PublicKey('Do6Z4U9XdZwCGBUUwhWZSCUC6bh96bmgzhqi9zmz8dQL')
) {
  const [data] = CreateMetadataAccountStruct.serialize({
    instructionDiscriminator: createMetadataAccountInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mintAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.updateAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
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
