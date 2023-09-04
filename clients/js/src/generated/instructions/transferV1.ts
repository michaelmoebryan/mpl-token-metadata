/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { findAssociatedTokenPda } from '@metaplex-foundation/mpl-toolbox';
import {
  Context,
  Option,
  OptionOrNullable,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  none,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  option,
  struct,
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  findMasterEditionPda,
  findMetadataPda,
  findTokenRecordPda,
} from '../accounts';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPublicKey,
  getAccountMetasAndSigners,
} from '../shared';
import {
  AuthorizationData,
  AuthorizationDataArgs,
  TokenStandard,
  TokenStandardArgs,
  getAuthorizationDataSerializer,
} from '../types';

// Accounts.
export type TransferV1InstructionAccounts = {
  /** Token account */
  token?: PublicKey | Pda;
  /** Token account owner */
  tokenOwner?: PublicKey | Pda;
  /** Destination token account */
  destinationToken?: PublicKey | Pda;
  /** Destination token account owner */
  destinationOwner: PublicKey | Pda;
  /** Mint of token asset */
  mint: PublicKey | Pda;
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata?: PublicKey | Pda;
  /** Edition of token asset */
  edition?: PublicKey | Pda;
  /** Owner token record account */
  tokenRecord?: PublicKey | Pda;
  /** Destination token record account */
  destinationTokenRecord?: PublicKey | Pda;
  /** Transfer authority (token owner or delegate) */
  authority?: Signer;
  /** Payer */
  payer?: Signer;
  /** System Program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
  /** SPL Token Program */
  splTokenProgram?: PublicKey | Pda;
  /** SPL Associated Token Account program */
  splAtaProgram?: PublicKey | Pda;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey | Pda;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey | Pda;
};

// Data.
export type TransferV1InstructionData = {
  discriminator: number;
  transferV1Discriminator: number;
  amount: bigint;
  authorizationData: Option<AuthorizationData>;
};

export type TransferV1InstructionDataArgs = {
  amount?: number | bigint;
  authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};

export function getTransferV1InstructionDataSerializer(): Serializer<
  TransferV1InstructionDataArgs,
  TransferV1InstructionData
> {
  return mapSerializer<
    TransferV1InstructionDataArgs,
    any,
    TransferV1InstructionData
  >(
    struct<TransferV1InstructionData>(
      [
        ['discriminator', u8()],
        ['transferV1Discriminator', u8()],
        ['amount', u64()],
        ['authorizationData', option(getAuthorizationDataSerializer())],
      ],
      { description: 'TransferV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 49,
      transferV1Discriminator: 0,
      amount: value.amount ?? 1,
      authorizationData: value.authorizationData ?? none(),
    })
  ) as Serializer<TransferV1InstructionDataArgs, TransferV1InstructionData>;
}

// Extra Args.
export type TransferV1InstructionExtraArgs = {
  tokenStandard: TokenStandardArgs;
};

// Args.
export type TransferV1InstructionArgs = TransferV1InstructionDataArgs &
  TransferV1InstructionExtraArgs;

// Instruction.
export function transferV1(
  context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>,
  input: TransferV1InstructionAccounts & TransferV1InstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'Do6Z4U9XdZwCGBUUwhWZSCUC6bh96bmgzhqi9zmz8dQL'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    token: { index: 0, isWritable: true, value: input.token ?? null },
    tokenOwner: {
      index: 1,
      isWritable: false,
      value: input.tokenOwner ?? null,
    },
    destinationToken: {
      index: 2,
      isWritable: true,
      value: input.destinationToken ?? null,
    },
    destinationOwner: {
      index: 3,
      isWritable: false,
      value: input.destinationOwner ?? null,
    },
    mint: { index: 4, isWritable: false, value: input.mint ?? null },
    metadata: { index: 5, isWritable: true, value: input.metadata ?? null },
    edition: { index: 6, isWritable: false, value: input.edition ?? null },
    tokenRecord: {
      index: 7,
      isWritable: true,
      value: input.tokenRecord ?? null,
    },
    destinationTokenRecord: {
      index: 8,
      isWritable: true,
      value: input.destinationTokenRecord ?? null,
    },
    authority: { index: 9, isWritable: false, value: input.authority ?? null },
    payer: { index: 10, isWritable: true, value: input.payer ?? null },
    systemProgram: {
      index: 11,
      isWritable: false,
      value: input.systemProgram ?? null,
    },
    sysvarInstructions: {
      index: 12,
      isWritable: false,
      value: input.sysvarInstructions ?? null,
    },
    splTokenProgram: {
      index: 13,
      isWritable: false,
      value: input.splTokenProgram ?? null,
    },
    splAtaProgram: {
      index: 14,
      isWritable: false,
      value: input.splAtaProgram ?? null,
    },
    authorizationRulesProgram: {
      index: 15,
      isWritable: false,
      value: input.authorizationRulesProgram ?? null,
    },
    authorizationRules: {
      index: 16,
      isWritable: false,
      value: input.authorizationRules ?? null,
    },
  };

  // Arguments.
  const resolvedArgs: TransferV1InstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.tokenOwner.value) {
    resolvedAccounts.tokenOwner.value = context.identity.publicKey;
  }
  if (!resolvedAccounts.token.value) {
    resolvedAccounts.token.value = findAssociatedTokenPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
      owner: expectPublicKey(resolvedAccounts.tokenOwner.value),
    });
  }
  if (!resolvedAccounts.destinationToken.value) {
    resolvedAccounts.destinationToken.value = findAssociatedTokenPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
      owner: expectPublicKey(resolvedAccounts.destinationOwner.value),
    });
  }
  if (!resolvedAccounts.metadata.value) {
    resolvedAccounts.metadata.value = findMetadataPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
    });
  }
  if (!resolvedAccounts.edition.value) {
    if (resolvedArgs.tokenStandard === TokenStandard.ProgrammableNonFungible) {
      resolvedAccounts.edition.value = findMasterEditionPda(context, {
        mint: expectPublicKey(resolvedAccounts.mint.value),
      });
    }
  }
  if (!resolvedAccounts.tokenRecord.value) {
    if (resolvedArgs.tokenStandard === TokenStandard.ProgrammableNonFungible) {
      resolvedAccounts.tokenRecord.value = findTokenRecordPda(context, {
        mint: expectPublicKey(resolvedAccounts.mint.value),
        token: expectPublicKey(resolvedAccounts.token.value),
      });
    }
  }
  if (!resolvedAccounts.destinationTokenRecord.value) {
    if (resolvedArgs.tokenStandard === TokenStandard.ProgrammableNonFungible) {
      resolvedAccounts.destinationTokenRecord.value = findTokenRecordPda(
        context,
        {
          mint: expectPublicKey(resolvedAccounts.mint.value),
          token: expectPublicKey(resolvedAccounts.destinationToken.value),
        }
      );
    }
  }
  if (!resolvedAccounts.authority.value) {
    resolvedAccounts.authority.value = context.identity;
  }
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }
  if (!resolvedAccounts.systemProgram.value) {
    resolvedAccounts.systemProgram.value = context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    );
    resolvedAccounts.systemProgram.isWritable = false;
  }
  if (!resolvedAccounts.sysvarInstructions.value) {
    resolvedAccounts.sysvarInstructions.value = publicKey(
      'Sysvar1nstructions1111111111111111111111111'
    );
  }
  if (!resolvedAccounts.splTokenProgram.value) {
    resolvedAccounts.splTokenProgram.value = context.programs.getPublicKey(
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    resolvedAccounts.splTokenProgram.isWritable = false;
  }
  if (!resolvedAccounts.splAtaProgram.value) {
    resolvedAccounts.splAtaProgram.value = context.programs.getPublicKey(
      'splAssociatedToken',
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
    );
    resolvedAccounts.splAtaProgram.isWritable = false;
  }
  if (!resolvedAccounts.authorizationRulesProgram.value) {
    if (resolvedAccounts.authorizationRules.value) {
      resolvedAccounts.authorizationRulesProgram.value =
        context.programs.getPublicKey(
          'mplTokenAuthRules',
          'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
        );
      resolvedAccounts.authorizationRulesProgram.isWritable = false;
    }
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
  const data = getTransferV1InstructionDataSerializer().serialize(
    resolvedArgs as TransferV1InstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
