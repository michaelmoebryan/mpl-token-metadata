//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::AuthorizationData;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct MintV1 {
    /// Token or Associated Token account
    pub token: solana_program::pubkey::Pubkey,
    /// Owner of the token account
    pub token_owner: Option<solana_program::pubkey::Pubkey>,
    /// Metadata account (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// Master Edition account
    pub master_edition: Option<solana_program::pubkey::Pubkey>,
    /// Token record account
    pub token_record: Option<solana_program::pubkey::Pubkey>,
    /// Mint of token asset
    pub mint: solana_program::pubkey::Pubkey,
    /// (Mint or Update) authority
    pub authority: solana_program::pubkey::Pubkey,
    /// Metadata delegate record
    pub delegate_record: Option<solana_program::pubkey::Pubkey>,
    /// Payer
    pub payer: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Instructions sysvar account
    pub sysvar_instructions: solana_program::pubkey::Pubkey,
    /// SPL Token program
    pub spl_token_program: solana_program::pubkey::Pubkey,
    /// SPL Associated Token Account program
    pub spl_ata_program: solana_program::pubkey::Pubkey,
    /// Token Authorization Rules program
    pub authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<solana_program::pubkey::Pubkey>,
}

impl MintV1 {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(
        &self,
        args: MintV1InstructionArgs,
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(15);
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.token, false,
        ));
        if let Some(token_owner) = self.token_owner {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                token_owner,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.metadata,
            false,
        ));
        if let Some(master_edition) = self.master_edition {
            accounts.push(solana_program::instruction::AccountMeta::new(
                master_edition,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(token_record) = self.token_record {
            accounts.push(solana_program::instruction::AccountMeta::new(
                token_record,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.mint, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.authority,
            true,
        ));
        if let Some(delegate_record) = self.delegate_record {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                delegate_record,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.sysvar_instructions,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.spl_token_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.spl_ata_program,
            false,
        ));
        if let Some(authorization_rules_program) = self.authorization_rules_program {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                authorization_rules_program,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(authorization_rules) = self.authorization_rules {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                authorization_rules,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        let mut data = MintV1InstructionData::new().try_to_vec().unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct MintV1InstructionData {
    discriminator: u8,
    mint_v1_discriminator: u8,
}

impl MintV1InstructionData {
    fn new() -> Self {
        Self {
            discriminator: 43,
            mint_v1_discriminator: 0,
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct MintV1InstructionArgs {
    pub amount: u64,
    pub authorization_data: Option<AuthorizationData>,
}

/// Instruction builder.
#[derive(Default)]
pub struct MintV1Builder {
    token: Option<solana_program::pubkey::Pubkey>,
    token_owner: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    master_edition: Option<solana_program::pubkey::Pubkey>,
    token_record: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    authority: Option<solana_program::pubkey::Pubkey>,
    delegate_record: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    sysvar_instructions: Option<solana_program::pubkey::Pubkey>,
    spl_token_program: Option<solana_program::pubkey::Pubkey>,
    spl_ata_program: Option<solana_program::pubkey::Pubkey>,
    authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    authorization_rules: Option<solana_program::pubkey::Pubkey>,
    amount: Option<u64>,
    authorization_data: Option<AuthorizationData>,
}

impl MintV1Builder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Token or Associated Token account
    #[inline(always)]
    pub fn token(&mut self, token: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token = Some(token);
        self
    }
    /// `[optional account]`
    /// Owner of the token account
    #[inline(always)]
    pub fn token_owner(&mut self, token_owner: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_owner = Some(token_owner);
        self
    }
    /// Metadata account (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// `[optional account]`
    /// Master Edition account
    #[inline(always)]
    pub fn master_edition(&mut self, master_edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.master_edition = Some(master_edition);
        self
    }
    /// `[optional account]`
    /// Token record account
    #[inline(always)]
    pub fn token_record(&mut self, token_record: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_record = Some(token_record);
        self
    }
    /// Mint of token asset
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    /// (Mint or Update) authority
    #[inline(always)]
    pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.authority = Some(authority);
        self
    }
    /// `[optional account]`
    /// Metadata delegate record
    #[inline(always)]
    pub fn delegate_record(
        &mut self,
        delegate_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.delegate_record = Some(delegate_record);
        self
    }
    /// Payer
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// System program
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    /// Instructions sysvar account
    #[inline(always)]
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.sysvar_instructions = Some(sysvar_instructions);
        self
    }
    /// SPL Token program
    #[inline(always)]
    pub fn spl_token_program(
        &mut self,
        spl_token_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.spl_token_program = Some(spl_token_program);
        self
    }
    /// SPL Associated Token Account program
    #[inline(always)]
    pub fn spl_ata_program(
        &mut self,
        spl_ata_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.spl_ata_program = Some(spl_ata_program);
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules program
    #[inline(always)]
    pub fn authorization_rules_program(
        &mut self,
        authorization_rules_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.authorization_rules_program = Some(authorization_rules_program);
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules account
    #[inline(always)]
    pub fn authorization_rules(
        &mut self,
        authorization_rules: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.authorization_rules = Some(authorization_rules);
        self
    }
    /// `[optional argument, defaults to '1']`
    #[inline(always)]
    pub fn amount(&mut self, amount: u64) -> &mut Self {
        self.amount = Some(amount);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn authorization_data(&mut self, authorization_data: AuthorizationData) -> &mut Self {
        self.authorization_data = Some(authorization_data);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = MintV1 {
            token: self.token.expect("token is not set"),
            token_owner: self.token_owner,
            metadata: self.metadata.expect("metadata is not set"),
            master_edition: self.master_edition,
            token_record: self.token_record,
            mint: self.mint.expect("mint is not set"),
            authority: self.authority.expect("authority is not set"),
            delegate_record: self.delegate_record,
            payer: self.payer.expect("payer is not set"),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            sysvar_instructions: self.sysvar_instructions.unwrap_or(solana_program::pubkey!(
                "Sysvar1nstructions1111111111111111111111111"
            )),
            spl_token_program: self.spl_token_program.unwrap_or(solana_program::pubkey!(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            )),
            spl_ata_program: self.spl_ata_program.unwrap_or(solana_program::pubkey!(
                "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            )),
            authorization_rules_program: self.authorization_rules_program,
            authorization_rules: self.authorization_rules,
        };
        let args = MintV1InstructionArgs {
            amount: self.amount.clone().unwrap_or(1),
            authorization_data: self.authorization_data.clone(),
        };

        accounts.instruction(args)
    }
}

/// `mint_v1` CPI instruction.
pub struct MintV1Cpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token or Associated Token account
    pub token: &'a solana_program::account_info::AccountInfo<'a>,
    /// Owner of the token account
    pub token_owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Metadata account (pda of ['metadata', program id, mint id])
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Master Edition account
    pub master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token record account
    pub token_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Mint of token asset
    pub mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// (Mint or Update) authority
    pub authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata delegate record
    pub delegate_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Payer
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Instructions sysvar account
    pub sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    /// SPL Token program
    pub spl_token_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// SPL Associated Token Account program
    pub spl_ata_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token Authorization Rules program
    pub authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// The arguments for the instruction.
    pub __args: MintV1InstructionArgs,
}

impl<'a> MintV1Cpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(15);
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.token.key,
            false,
        ));
        if let Some(token_owner) = self.token_owner {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *token_owner.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.metadata.key,
            false,
        ));
        if let Some(master_edition) = self.master_edition {
            accounts.push(solana_program::instruction::AccountMeta::new(
                *master_edition.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(token_record) = self.token_record {
            accounts.push(solana_program::instruction::AccountMeta::new(
                *token_record.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.authority.key,
            true,
        ));
        if let Some(delegate_record) = self.delegate_record {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *delegate_record.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.sysvar_instructions.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.spl_token_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.spl_ata_program.key,
            false,
        ));
        if let Some(authorization_rules_program) = self.authorization_rules_program {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *authorization_rules_program.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(authorization_rules) = self.authorization_rules {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *authorization_rules.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        let mut data = MintV1InstructionData::new().try_to_vec().unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(15 + 1);
        account_infos.push(self.__program.clone());
        account_infos.push(self.token.clone());
        if let Some(token_owner) = self.token_owner {
            account_infos.push(token_owner.clone());
        }
        account_infos.push(self.metadata.clone());
        if let Some(master_edition) = self.master_edition {
            account_infos.push(master_edition.clone());
        }
        if let Some(token_record) = self.token_record {
            account_infos.push(token_record.clone());
        }
        account_infos.push(self.mint.clone());
        account_infos.push(self.authority.clone());
        if let Some(delegate_record) = self.delegate_record {
            account_infos.push(delegate_record.clone());
        }
        account_infos.push(self.payer.clone());
        account_infos.push(self.system_program.clone());
        account_infos.push(self.sysvar_instructions.clone());
        account_infos.push(self.spl_token_program.clone());
        account_infos.push(self.spl_ata_program.clone());
        if let Some(authorization_rules_program) = self.authorization_rules_program {
            account_infos.push(authorization_rules_program.clone());
        }
        if let Some(authorization_rules) = self.authorization_rules {
            account_infos.push(authorization_rules.clone());
        }

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `mint_v1` CPI instruction builder.
pub struct MintV1CpiBuilder<'a> {
    instruction: Box<MintV1CpiBuilderInstruction<'a>>,
}

impl<'a> MintV1CpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(MintV1CpiBuilderInstruction {
            __program: program,
            token: None,
            token_owner: None,
            metadata: None,
            master_edition: None,
            token_record: None,
            mint: None,
            authority: None,
            delegate_record: None,
            payer: None,
            system_program: None,
            sysvar_instructions: None,
            spl_token_program: None,
            spl_ata_program: None,
            authorization_rules_program: None,
            authorization_rules: None,
            amount: None,
            authorization_data: None,
        });
        Self { instruction }
    }
    /// Token or Associated Token account
    #[inline(always)]
    pub fn token(&mut self, token: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.token = Some(token);
        self
    }
    /// `[optional account]`
    /// Owner of the token account
    #[inline(always)]
    pub fn token_owner(
        &mut self,
        token_owner: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_owner = Some(token_owner);
        self
    }
    /// Metadata account (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// `[optional account]`
    /// Master Edition account
    #[inline(always)]
    pub fn master_edition(
        &mut self,
        master_edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_edition = Some(master_edition);
        self
    }
    /// `[optional account]`
    /// Token record account
    #[inline(always)]
    pub fn token_record(
        &mut self,
        token_record: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_record = Some(token_record);
        self
    }
    /// Mint of token asset
    #[inline(always)]
    pub fn mint(&mut self, mint: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    /// (Mint or Update) authority
    #[inline(always)]
    pub fn authority(
        &mut self,
        authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authority = Some(authority);
        self
    }
    /// `[optional account]`
    /// Metadata delegate record
    #[inline(always)]
    pub fn delegate_record(
        &mut self,
        delegate_record: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.delegate_record = Some(delegate_record);
        self
    }
    /// Payer
    #[inline(always)]
    pub fn payer(&mut self, payer: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    /// System program
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    /// Instructions sysvar account
    #[inline(always)]
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.sysvar_instructions = Some(sysvar_instructions);
        self
    }
    /// SPL Token program
    #[inline(always)]
    pub fn spl_token_program(
        &mut self,
        spl_token_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.spl_token_program = Some(spl_token_program);
        self
    }
    /// SPL Associated Token Account program
    #[inline(always)]
    pub fn spl_ata_program(
        &mut self,
        spl_ata_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.spl_ata_program = Some(spl_ata_program);
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules program
    #[inline(always)]
    pub fn authorization_rules_program(
        &mut self,
        authorization_rules_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authorization_rules_program = Some(authorization_rules_program);
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules account
    #[inline(always)]
    pub fn authorization_rules(
        &mut self,
        authorization_rules: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authorization_rules = Some(authorization_rules);
        self
    }
    /// `[optional argument, defaults to '1']`
    #[inline(always)]
    pub fn amount(&mut self, amount: u64) -> &mut Self {
        self.instruction.amount = Some(amount);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn authorization_data(&mut self, authorization_data: AuthorizationData) -> &mut Self {
        self.instruction.authorization_data = Some(authorization_data);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> MintV1Cpi<'a> {
        let args = MintV1InstructionArgs {
            amount: self.instruction.amount.clone().unwrap_or(1),
            authorization_data: self.instruction.authorization_data.clone(),
        };

        MintV1Cpi {
            __program: self.instruction.__program,

            token: self.instruction.token.expect("token is not set"),

            token_owner: self.instruction.token_owner,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            master_edition: self.instruction.master_edition,

            token_record: self.instruction.token_record,

            mint: self.instruction.mint.expect("mint is not set"),

            authority: self.instruction.authority.expect("authority is not set"),

            delegate_record: self.instruction.delegate_record,

            payer: self.instruction.payer.expect("payer is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            sysvar_instructions: self
                .instruction
                .sysvar_instructions
                .expect("sysvar_instructions is not set"),

            spl_token_program: self
                .instruction
                .spl_token_program
                .expect("spl_token_program is not set"),

            spl_ata_program: self
                .instruction
                .spl_ata_program
                .expect("spl_ata_program is not set"),

            authorization_rules_program: self.instruction.authorization_rules_program,

            authorization_rules: self.instruction.authorization_rules,
            __args: args,
        }
    }
}

struct MintV1CpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    token: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    delegate_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    sysvar_instructions: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    spl_token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    spl_ata_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    amount: Option<u64>,
    authorization_data: Option<AuthorizationData>,
}
