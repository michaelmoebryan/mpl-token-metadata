/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category CreateMasterEdition
 * @category generated
 */
export const CreateMasterEditionStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>(
  [['instructionDiscriminator', beet.u8]],
  'CreateMasterEditionInstructionArgs'
)
/**
 * Accounts required by the _CreateMasterEdition_ instruction
 *
 * @property [_writable_] edition
 * @property [_writable_] mint
 * @property [**signer**] updateAuthority
 * @property [**signer**] mintAuthority
 * @property [_writable_, **signer**] payer
 * @property [] metadata
 * @category Instructions
 * @category CreateMasterEdition
 * @category generated
 */
export type CreateMasterEditionInstructionAccounts = {
  edition: web3.PublicKey
  mint: web3.PublicKey
  updateAuthority: web3.PublicKey
  mintAuthority: web3.PublicKey
  payer: web3.PublicKey
  metadata: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
}

export const createMasterEditionInstructionDiscriminator = 10

/**
 * Creates a _CreateMasterEdition_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CreateMasterEdition
 * @category generated
 */
export function createCreateMasterEditionInstruction(
  accounts: CreateMasterEditionInstructionAccounts,
  programId = new web3.PublicKey('Do6Z4U9XdZwCGBUUwhWZSCUC6bh96bmgzhqi9zmz8dQL')
) {
  const [data] = CreateMasterEditionStruct.serialize({
    instructionDiscriminator: createMasterEditionInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.edition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.updateAuthority,
      isWritable: false,
      isSigner: true,
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
      pubkey: accounts.metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
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
