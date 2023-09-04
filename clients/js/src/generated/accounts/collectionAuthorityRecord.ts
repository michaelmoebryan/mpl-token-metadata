/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Option,
  OptionOrNullable,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  publicKey as toPublicKey,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  option,
  publicKey as publicKeySerializer,
  string,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { Key, KeyArgs, getKeySerializer } from '../types';

export type CollectionAuthorityRecord =
  Account<CollectionAuthorityRecordAccountData>;

export type CollectionAuthorityRecordAccountData = {
  key: Key;
  bump: number;
  updateAuthority: Option<PublicKey>;
};

export type CollectionAuthorityRecordAccountDataArgs = {
  bump: number;
  updateAuthority: OptionOrNullable<PublicKey>;
};

export function getCollectionAuthorityRecordAccountDataSerializer(): Serializer<
  CollectionAuthorityRecordAccountDataArgs,
  CollectionAuthorityRecordAccountData
> {
  return mapSerializer<
    CollectionAuthorityRecordAccountDataArgs,
    any,
    CollectionAuthorityRecordAccountData
  >(
    struct<CollectionAuthorityRecordAccountData>(
      [
        ['key', getKeySerializer()],
        ['bump', u8()],
        ['updateAuthority', option(publicKeySerializer())],
      ],
      { description: 'CollectionAuthorityRecordAccountData' }
    ),
    (value) => ({ ...value, key: Key.CollectionAuthorityRecord })
  ) as Serializer<
    CollectionAuthorityRecordAccountDataArgs,
    CollectionAuthorityRecordAccountData
  >;
}

export function deserializeCollectionAuthorityRecord(
  rawAccount: RpcAccount
): CollectionAuthorityRecord {
  return deserializeAccount(
    rawAccount,
    getCollectionAuthorityRecordAccountDataSerializer()
  );
}

export async function fetchCollectionAuthorityRecord(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<CollectionAuthorityRecord> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'CollectionAuthorityRecord');
  return deserializeCollectionAuthorityRecord(maybeAccount);
}

export async function safeFetchCollectionAuthorityRecord(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<CollectionAuthorityRecord | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists
    ? deserializeCollectionAuthorityRecord(maybeAccount)
    : null;
}

export async function fetchAllCollectionAuthorityRecord(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<CollectionAuthorityRecord[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'CollectionAuthorityRecord');
    return deserializeCollectionAuthorityRecord(maybeAccount);
  });
}

export async function safeFetchAllCollectionAuthorityRecord(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<CollectionAuthorityRecord[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeCollectionAuthorityRecord(maybeAccount as RpcAccount)
    );
}

export function getCollectionAuthorityRecordGpaBuilder(
  context: Pick<Context, 'rpc' | 'programs'>
) {
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'Do6Z4U9XdZwCGBUUwhWZSCUC6bh96bmgzhqi9zmz8dQL'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      key: KeyArgs;
      bump: number;
      updateAuthority: OptionOrNullable<PublicKey>;
    }>({
      key: [0, getKeySerializer()],
      bump: [1, u8()],
      updateAuthority: [2, option(publicKeySerializer())],
    })
    .deserializeUsing<CollectionAuthorityRecord>((account) =>
      deserializeCollectionAuthorityRecord(account)
    )
    .whereField('key', Key.CollectionAuthorityRecord);
}

export function findCollectionAuthorityRecordPda(
  context: Pick<Context, 'eddsa' | 'programs'>,
  seeds: {
    /** The address of the mint account */
    mint: PublicKey;
    /** The address of the collection authority */
    collectionAuthority: PublicKey;
  }
): Pda {
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'Do6Z4U9XdZwCGBUUwhWZSCUC6bh96bmgzhqi9zmz8dQL'
  );
  return context.eddsa.findPda(programId, [
    string({ size: 'variable' }).serialize('metadata'),
    publicKeySerializer().serialize(programId),
    publicKeySerializer().serialize(seeds.mint),
    string({ size: 'variable' }).serialize('collection_authority'),
    publicKeySerializer().serialize(seeds.collectionAuthority),
  ]);
}

export async function fetchCollectionAuthorityRecordFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findCollectionAuthorityRecordPda>[1],
  options?: RpcGetAccountOptions
): Promise<CollectionAuthorityRecord> {
  return fetchCollectionAuthorityRecord(
    context,
    findCollectionAuthorityRecordPda(context, seeds),
    options
  );
}

export async function safeFetchCollectionAuthorityRecordFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findCollectionAuthorityRecordPda>[1],
  options?: RpcGetAccountOptions
): Promise<CollectionAuthorityRecord | null> {
  return safeFetchCollectionAuthorityRecord(
    context,
    findCollectionAuthorityRecordPda(context, seeds),
    options
  );
}
