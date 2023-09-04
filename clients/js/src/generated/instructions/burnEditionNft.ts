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
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type BurnEditionNftInstructionAccounts = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey | Pda;
  /** NFT owner */
  owner: Signer;
  /** Mint of the print edition NFT */
  printEditionMint: PublicKey | Pda;
  /** Mint of the original/master NFT */
  masterEditionMint: PublicKey | Pda;
  /** Token account the print edition NFT is in */
  printEditionTokenAccount: PublicKey | Pda;
  /** Token account the Master Edition NFT is in */
  masterEditionTokenAccount: PublicKey | Pda;
  /** MasterEdition2 of the original NFT */
  masterEditionAccount: PublicKey | Pda;
  /** Print Edition account of the NFT */
  printEditionAccount: PublicKey | Pda;
  /** Edition Marker PDA of the NFT */
  editionMarkerAccount: PublicKey | Pda;
  /** SPL Token Program */
  splTokenProgram?: PublicKey | Pda;
};

// Data.
export type BurnEditionNftInstructionData = { discriminator: number };

export type BurnEditionNftInstructionDataArgs = {};

export function getBurnEditionNftInstructionDataSerializer(): Serializer<
  BurnEditionNftInstructionDataArgs,
  BurnEditionNftInstructionData
> {
  return mapSerializer<
    BurnEditionNftInstructionDataArgs,
    any,
    BurnEditionNftInstructionData
  >(
    struct<BurnEditionNftInstructionData>([['discriminator', u8()]], {
      description: 'BurnEditionNftInstructionData',
    }),
    (value) => ({ ...value, discriminator: 37 })
  ) as Serializer<
    BurnEditionNftInstructionDataArgs,
    BurnEditionNftInstructionData
  >;
}

// Instruction.
export function burnEditionNft(
  context: Pick<Context, 'programs'>,
  input: BurnEditionNftInstructionAccounts
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
    printEditionMint: {
      index: 2,
      isWritable: true,
      value: input.printEditionMint ?? null,
    },
    masterEditionMint: {
      index: 3,
      isWritable: false,
      value: input.masterEditionMint ?? null,
    },
    printEditionTokenAccount: {
      index: 4,
      isWritable: true,
      value: input.printEditionTokenAccount ?? null,
    },
    masterEditionTokenAccount: {
      index: 5,
      isWritable: false,
      value: input.masterEditionTokenAccount ?? null,
    },
    masterEditionAccount: {
      index: 6,
      isWritable: true,
      value: input.masterEditionAccount ?? null,
    },
    printEditionAccount: {
      index: 7,
      isWritable: true,
      value: input.printEditionAccount ?? null,
    },
    editionMarkerAccount: {
      index: 8,
      isWritable: true,
      value: input.editionMarkerAccount ?? null,
    },
    splTokenProgram: {
      index: 9,
      isWritable: false,
      value: input.splTokenProgram ?? null,
    },
  };

  // Default values.
  if (!resolvedAccounts.splTokenProgram.value) {
    resolvedAccounts.splTokenProgram.value = context.programs.getPublicKey(
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
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
    'programId',
    programId
  );

  // Data.
  const data = getBurnEditionNftInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
