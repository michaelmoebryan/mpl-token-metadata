/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { findMetadataPda } from '../accounts';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPublicKey,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type ApproveUseAuthorityInstructionAccounts = {
  /** Use Authority Record PDA */
  useAuthorityRecord: PublicKey | Pda;
  /** Owner */
  owner: Signer;
  /** Payer */
  payer?: Signer;
  /** A Use Authority */
  user: PublicKey | Pda;
  /** Owned Token Account Of Mint */
  ownerTokenAccount: PublicKey | Pda;
  /** Metadata account */
  metadata?: PublicKey | Pda;
  /** Mint of Metadata */
  mint: PublicKey | Pda;
  /** Program As Signer (Burner) */
  burner: PublicKey | Pda;
  /** Token program */
  tokenProgram?: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Rent info */
  rent?: PublicKey | Pda;
};

// Data.
export type ApproveUseAuthorityInstructionData = {
  discriminator: number;
  numberOfUses: bigint;
};

export type ApproveUseAuthorityInstructionDataArgs = {
  numberOfUses: number | bigint;
};

export function getApproveUseAuthorityInstructionDataSerializer(): Serializer<
  ApproveUseAuthorityInstructionDataArgs,
  ApproveUseAuthorityInstructionData
> {
  return mapSerializer<
    ApproveUseAuthorityInstructionDataArgs,
    any,
    ApproveUseAuthorityInstructionData
  >(
    struct<ApproveUseAuthorityInstructionData>(
      [
        ['discriminator', u8()],
        ['numberOfUses', u64()],
      ],
      { description: 'ApproveUseAuthorityInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 20 })
  ) as Serializer<
    ApproveUseAuthorityInstructionDataArgs,
    ApproveUseAuthorityInstructionData
  >;
}

// Args.
export type ApproveUseAuthorityInstructionArgs =
  ApproveUseAuthorityInstructionDataArgs;

// Instruction.
export function approveUseAuthority(
  context: Pick<Context, 'eddsa' | 'payer' | 'programs'>,
  input: ApproveUseAuthorityInstructionAccounts &
    ApproveUseAuthorityInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'Do6Z4U9XdZwCGBUUwhWZSCUC6bh96bmgzhqi9zmz8dQL'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    useAuthorityRecord: {
      index: 0,
      isWritable: true,
      value: input.useAuthorityRecord ?? null,
    },
    owner: { index: 1, isWritable: true, value: input.owner ?? null },
    payer: { index: 2, isWritable: true, value: input.payer ?? null },
    user: { index: 3, isWritable: false, value: input.user ?? null },
    ownerTokenAccount: {
      index: 4,
      isWritable: true,
      value: input.ownerTokenAccount ?? null,
    },
    metadata: { index: 5, isWritable: false, value: input.metadata ?? null },
    mint: { index: 6, isWritable: false, value: input.mint ?? null },
    burner: { index: 7, isWritable: false, value: input.burner ?? null },
    tokenProgram: {
      index: 8,
      isWritable: false,
      value: input.tokenProgram ?? null,
    },
    systemProgram: {
      index: 9,
      isWritable: false,
      value: input.systemProgram ?? null,
    },
    rent: { index: 10, isWritable: false, value: input.rent ?? null },
  };

  // Arguments.
  const resolvedArgs: ApproveUseAuthorityInstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }
  if (!resolvedAccounts.metadata.value) {
    resolvedAccounts.metadata.value = findMetadataPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
    });
  }
  if (!resolvedAccounts.tokenProgram.value) {
    resolvedAccounts.tokenProgram.value = context.programs.getPublicKey(
      'splToken',
      'TTTXzBCbNAJ7sJZErBkpdsgLWgwgR9gx6tud8m34YXb'
    );
    resolvedAccounts.tokenProgram.isWritable = false;
  }
  if (!resolvedAccounts.systemProgram.value) {
    resolvedAccounts.systemProgram.value = context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    );
    resolvedAccounts.systemProgram.isWritable = false;
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'omitted',
    programId
  );

  // Data.
  const data = getApproveUseAuthorityInstructionDataSerializer().serialize(
    resolvedArgs as ApproveUseAuthorityInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
