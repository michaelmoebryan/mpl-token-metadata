const path = require("path");
const {
  Kinobi,
  RenderJavaScriptVisitor,
  SetInstructionAccountDefaultValuesVisitor,
  SetLeafWrappersVisitor,
  UnwrapStructVisitor,
  UnwrapDefinedTypesVisitor,
  UpdateProgramsVisitor,
  UpdateAccountsVisitor,
  UpdateDefinedTypesVisitor,
  UpdateInstructionsVisitor,
  TypeLeafNode,
  TypeDefinedLinkNode,
} = require("@lorisleiva/kinobi");

// Paths.
const clientDir = path.join(__dirname, "..", "clients");
const idlDir = path.join(__dirname, "..", "idls");

// Instanciate Kinobi.
const kinobi = new Kinobi([
  path.join(idlDir, "mpl_token_auth_rules.json"),
  path.join(idlDir, "mpl_token_metadata.json"),
]);

// Update Programs.
kinobi.update(
  new UpdateProgramsVisitor({
    mplTokenAuthRules: { prefix: "Ta" },
    mplTokenMetadata: { prefix: "Tm" },
  })
);

// Update Accounts.
const metadataSeeds = [
  { kind: "literal", value: "metadata" },
  { kind: "programId" },
  {
    kind: "variable",
    name: "mint",
    description: "The address of the mint account",
    type: new TypeLeafNode("publicKey"),
  },
];
kinobi.update(
  new UpdateAccountsVisitor({
    metadata: {
      seeds: metadataSeeds,
    },
    masterEditionV2: {
      name: "masterEdition",
      seeds: [...metadataSeeds, { kind: "literal", value: "edition" }],
    },
    tokenRecord: {
      seeds: [
        ...metadataSeeds,
        { kind: "literal", value: "token_record" },
        {
          kind: "variable",
          name: "token",
          description: "The address of the token account (ata or not)",
          type: new TypeLeafNode("publicKey"),
        },
      ],
    },
    metadataDelegateRecord: {
      seeds: [
        ...metadataSeeds,
        {
          kind: "variable",
          name: "delegateRole",
          description: "The role of the metadata delegate",
          type: new TypeDefinedLinkNode("metadataDelegateRole"),
        },
        {
          kind: "variable",
          name: "updateAuthority",
          description: "The address of the metadata's update authority",
          type: new TypeLeafNode("publicKey"),
        },
        {
          kind: "variable",
          name: "delegate",
          description: "The address of delegate authority",
          type: new TypeLeafNode("publicKey"),
        },
      ],
    },
    collectionAuthorityRecord: {
      seeds: [
        ...metadataSeeds,
        { kind: "literal", value: "collection_authority" },
        {
          kind: "variable",
          name: "collectionAuthority",
          description: "The address of the collection authority",
          type: new TypeLeafNode("publicKey"),
        },
      ],
    },
    useAuthorityRecord: {
      seeds: [
        ...metadataSeeds,
        { kind: "literal", value: "user" },
        {
          kind: "variable",
          name: "useAuthority",
          description: "The address of the use authority",
          type: new TypeLeafNode("publicKey"),
        },
      ],
    },
    FrequencyAccount: { name: "RuleSetFrequency" },
    // Deprecated nodes.
    "mplTokenMetadata.ReservationListV1": { delete: true },
    "mplTokenMetadata.ReservationListV2": { delete: true },
    "mplTokenMetadata.MasterEditionV1": { delete: true },
  })
);

// Update Instructions.
kinobi.update(
  new UpdateInstructionsVisitor({
    "mplTokenAuthRules.CreateOrUpdate": { name: "CreateOrUpdateRuleSet" },
    "mplTokenAuthRules.Validate": { name: "ValidateRuleSet" },
    "mplTokenAuthRules.WriteToBuffer": { name: "WriteRuleSetToBuffer" },
    "mplTokenMetadata.Create": {
      accounts: {
        mint: { isOptionalSigner: true },
      },
    },
    updateMetadataAccount: {
      args: { updateAuthority: "newUpdateAuthority" },
    },
    updateMetadataAccountV2: {
      args: { updateAuthority: "newUpdateAuthority" },
    },
  })
);

// Update Types.
kinobi.update(
  new UpdateDefinedTypesVisitor({
    "mplTokenMetadata.Key": { name: "TokenMetadataKey" },
    "mplTokenAuthRules.Key": { name: "TokenAuthRulesKey" },
    "mplTokenAuthRules.CreateOrUpdateArgs": {
      name: "CreateOrUpdateRuleSetArgs",
    },
    "mplTokenAuthRules.ValidateArgs": { name: "ValidateRuleSetArgs" },
    "mplTokenAuthRules.WriteToBufferArgs": { name: "WriteRuleSetToBufferArgs" },
    // Duplicated types.
    "mplTokenMetadata.Payload": { delete: true },
    "mplTokenMetadata.PayloadType": { delete: true },
  })
);

// Wrap leaves.
kinobi.update(
  new SetLeafWrappersVisitor({
    // "splSystem.CreateAccount.lamports": { kind: "SolAmount" },
  })
);

// Set default values for instruction accounts.
kinobi.update(
  new SetInstructionAccountDefaultValuesVisitor([
    { account: "updateAuthority", kind: "identity", ignoreIfOptional: true },
    { account: "metadata", kind: "pda", ignoreIfOptional: true },
    { account: "tokenRecord", kind: "pda", ignoreIfOptional: true },
    {
      account: /^edition|masterEdition$/,
      kind: "pda",
      pdaAccount: "masterEdition",
      ignoreIfOptional: true,
    },
  ])
);

// Unwrap types and structs.
kinobi.update(new UnwrapDefinedTypesVisitor(["Data", "AssetData"]));
kinobi.update(
  new UnwrapStructVisitor({
    "mplTokenMetadata.Metadata": ["data"],
    "mplTokenMetadata.CreateMetadataAccountInstructionArgs": ["data"],
    "mplTokenMetadata.CreateArgs.V1": ["assetData"],
  })
);

// Render JavaScript.
const jsDir = path.join(clientDir, "js", "src", "generated");
const prettier = require(path.join(clientDir, "js", ".prettierrc.json"));
kinobi.accept(new RenderJavaScriptVisitor(jsDir, { prettier }));
