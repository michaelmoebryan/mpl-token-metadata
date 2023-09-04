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
export type BurnNftInstructionAccounts = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata?: PublicKey | Pda;
  /** NFT owner */
  owner: Signer;
  /** Mint of the NFT */
  mint: PublicKey | Pda;
  /** Token account to close */
  tokenAccount: PublicKey | Pda;
  /** MasterEdition2 of the NFT */
  masterEditionAccount: PublicKey | Pda;
  /** SPL Token Program */
  splTokenProgram?: PublicKey | Pda;
  /** Metadata of the Collection */
  collectionMetadata?: PublicKey | Pda;
};

// Data.
export type BurnNftInstructionData = { discriminator: number };

export type BurnNftInstructionDataArgs = {};

export function getBurnNftInstructionDataSerializer(): Serializer<
  BurnNftInstructionDataArgs,
  BurnNftInstructionData
> {
  return mapSerializer<BurnNftInstructionDataArgs, any, BurnNftInstructionData>(
    struct<BurnNftInstructionData>([['discriminator', u8()]], {
      description: 'BurnNftInstructionData',
    }),
    (value) => ({ ...value, discriminator: 29 })
  ) as Serializer<BurnNftInstructionDataArgs, BurnNftInstructionData>;
}

// Instruction.
export function burnNft(
  context: Pick<Context, 'eddsa' | 'programs'>,
  input: BurnNftInstructionAccounts
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'Do6Z4U9XdZwCGBUUwhWZSCUC6bh96bmgzhqi9zmz8dQL'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    metadata: { index: 0, isWritable: true, value: input.metadata ?? null },
    owner: { index: 1, isWritable: true, value: input.owner ?? null },
    mint: { index: 2, isWritable: true, value: input.mint ?? null },
    tokenAccount: {
      index: 3,
      isWritable: true,
      value: input.tokenAccount ?? null,
    },
    masterEditionAccount: {
      index: 4,
      isWritable: true,
      value: input.masterEditionAccount ?? null,
    },
    splTokenProgram: {
      index: 5,
      isWritable: false,
      value: input.splTokenProgram ?? null,
    },
    collectionMetadata: {
      index: 6,
      isWritable: true,
      value: input.collectionMetadata ?? null,
    },
  };

  // Default values.
  if (!resolvedAccounts.metadata.value) {
    resolvedAccounts.metadata.value = findMetadataPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
    });
  }
  if (!resolvedAccounts.splTokenProgram.value) {
    resolvedAccounts.splTokenProgram.value = context.programs.getPublicKey(
      'splToken',
      'TTTXzBCbNAJ7sJZErBkpdsgLWgwgR9gx6tud8m34YXb'
    );
    resolvedAccounts.splTokenProgram.isWritable = false;
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
  const data = getBurnNftInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
