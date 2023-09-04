/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

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
  u8,
} from '@metaplex-foundation/umi/serializers';
import { findMetadataPda } from '../accounts';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPublicKey,
  getAccountMetasAndSigners,
} from '../shared';
import {
  AuthorizationData,
  AuthorizationDataArgs,
  getAuthorizationDataSerializer,
} from '../types';

// Accounts.
export type UseV1InstructionAccounts = {
  /** Token owner or delegate */
  authority?: Signer;
  /** Delegate record PDA */
  delegateRecord?: PublicKey | Pda;
  /** Token account */
  token?: PublicKey | Pda;
  /** Mint account */
  mint: PublicKey | Pda;
  /** Metadata account */
  metadata?: PublicKey | Pda;
  /** Edition account */
  edition?: PublicKey | Pda;
  /** Payer */
  payer?: Signer;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** System program */
  sysvarInstructions?: PublicKey | Pda;
  /** SPL Token Program */
  splTokenProgram?: PublicKey | Pda;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey | Pda;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey | Pda;
};

// Data.
export type UseV1InstructionData = {
  discriminator: number;
  useV1Discriminator: number;
  authorizationData: Option<AuthorizationData>;
};

export type UseV1InstructionDataArgs = {
  authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};

export function getUseV1InstructionDataSerializer(): Serializer<
  UseV1InstructionDataArgs,
  UseV1InstructionData
> {
  return mapSerializer<UseV1InstructionDataArgs, any, UseV1InstructionData>(
    struct<UseV1InstructionData>(
      [
        ['discriminator', u8()],
        ['useV1Discriminator', u8()],
        ['authorizationData', option(getAuthorizationDataSerializer())],
      ],
      { description: 'UseV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 51,
      useV1Discriminator: 0,
      authorizationData: value.authorizationData ?? none(),
    })
  ) as Serializer<UseV1InstructionDataArgs, UseV1InstructionData>;
}

// Args.
export type UseV1InstructionArgs = UseV1InstructionDataArgs;

// Instruction.
export function useV1(
  context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>,
  input: UseV1InstructionAccounts & UseV1InstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'Do6Z4U9XdZwCGBUUwhWZSCUC6bh96bmgzhqi9zmz8dQL'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    authority: { index: 0, isWritable: false, value: input.authority ?? null },
    delegateRecord: {
      index: 1,
      isWritable: true,
      value: input.delegateRecord ?? null,
    },
    token: { index: 2, isWritable: true, value: input.token ?? null },
    mint: { index: 3, isWritable: false, value: input.mint ?? null },
    metadata: { index: 4, isWritable: true, value: input.metadata ?? null },
    edition: { index: 5, isWritable: true, value: input.edition ?? null },
    payer: { index: 6, isWritable: false, value: input.payer ?? null },
    systemProgram: {
      index: 7,
      isWritable: false,
      value: input.systemProgram ?? null,
    },
    sysvarInstructions: {
      index: 8,
      isWritable: false,
      value: input.sysvarInstructions ?? null,
    },
    splTokenProgram: {
      index: 9,
      isWritable: false,
      value: input.splTokenProgram ?? null,
    },
    authorizationRulesProgram: {
      index: 10,
      isWritable: false,
      value: input.authorizationRulesProgram ?? null,
    },
    authorizationRules: {
      index: 11,
      isWritable: false,
      value: input.authorizationRules ?? null,
    },
  };

  // Arguments.
  const resolvedArgs: UseV1InstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.authority.value) {
    resolvedAccounts.authority.value = context.identity;
  }
  if (!resolvedAccounts.metadata.value) {
    resolvedAccounts.metadata.value = findMetadataPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
    });
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
  const data = getUseV1InstructionDataSerializer().serialize(
    resolvedArgs as UseV1InstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
