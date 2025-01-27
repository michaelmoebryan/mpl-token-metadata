//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct ThawDelegatedAccount {
    /// Delegate
    pub delegate: solana_program::pubkey::Pubkey,
    /// Token account to thaw
    pub token_account: solana_program::pubkey::Pubkey,
    /// Edition
    pub edition: solana_program::pubkey::Pubkey,
    /// Token mint
    pub mint: solana_program::pubkey::Pubkey,
    /// Token Program
    pub token_program: solana_program::pubkey::Pubkey,
}

impl ThawDelegatedAccount {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(5);
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.delegate,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.token_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.edition,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_program,
            false,
        ));
        let data = ThawDelegatedAccountInstructionData::new()
            .try_to_vec()
            .unwrap();

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct ThawDelegatedAccountInstructionData {
    discriminator: u8,
}

impl ThawDelegatedAccountInstructionData {
    fn new() -> Self {
        Self { discriminator: 27 }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct ThawDelegatedAccountBuilder {
    delegate: Option<solana_program::pubkey::Pubkey>,
    token_account: Option<solana_program::pubkey::Pubkey>,
    edition: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
}

impl ThawDelegatedAccountBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Delegate
    #[inline(always)]
    pub fn delegate(&mut self, delegate: solana_program::pubkey::Pubkey) -> &mut Self {
        self.delegate = Some(delegate);
        self
    }
    /// Token account to thaw
    #[inline(always)]
    pub fn token_account(&mut self, token_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_account = Some(token_account);
        self
    }
    /// Edition
    #[inline(always)]
    pub fn edition(&mut self, edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.edition = Some(edition);
        self
    }
    /// Token mint
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    /// Token Program
    #[inline(always)]
    pub fn token_program(&mut self, token_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_program = Some(token_program);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = ThawDelegatedAccount {
            delegate: self.delegate.expect("delegate is not set"),
            token_account: self.token_account.expect("token_account is not set"),
            edition: self.edition.expect("edition is not set"),
            mint: self.mint.expect("mint is not set"),
            token_program: self.token_program.unwrap_or(solana_program::pubkey!(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            )),
        };

        accounts.instruction()
    }
}

/// `thaw_delegated_account` CPI instruction.
pub struct ThawDelegatedAccountCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Delegate
    pub delegate: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token account to thaw
    pub token_account: &'a solana_program::account_info::AccountInfo<'a>,
    /// Edition
    pub edition: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token mint
    pub mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token Program
    pub token_program: &'a solana_program::account_info::AccountInfo<'a>,
}

impl<'a> ThawDelegatedAccountCpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(5);
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.delegate.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.token_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.edition.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_program.key,
            false,
        ));
        let data = ThawDelegatedAccountInstructionData::new()
            .try_to_vec()
            .unwrap();

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(5 + 1);
        account_infos.push(self.__program.clone());
        account_infos.push(self.delegate.clone());
        account_infos.push(self.token_account.clone());
        account_infos.push(self.edition.clone());
        account_infos.push(self.mint.clone());
        account_infos.push(self.token_program.clone());

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `thaw_delegated_account` CPI instruction builder.
pub struct ThawDelegatedAccountCpiBuilder<'a> {
    instruction: Box<ThawDelegatedAccountCpiBuilderInstruction<'a>>,
}

impl<'a> ThawDelegatedAccountCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(ThawDelegatedAccountCpiBuilderInstruction {
            __program: program,
            delegate: None,
            token_account: None,
            edition: None,
            mint: None,
            token_program: None,
        });
        Self { instruction }
    }
    /// Delegate
    #[inline(always)]
    pub fn delegate(
        &mut self,
        delegate: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.delegate = Some(delegate);
        self
    }
    /// Token account to thaw
    #[inline(always)]
    pub fn token_account(
        &mut self,
        token_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_account = Some(token_account);
        self
    }
    /// Edition
    #[inline(always)]
    pub fn edition(
        &mut self,
        edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.edition = Some(edition);
        self
    }
    /// Token mint
    #[inline(always)]
    pub fn mint(&mut self, mint: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    /// Token Program
    #[inline(always)]
    pub fn token_program(
        &mut self,
        token_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_program = Some(token_program);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> ThawDelegatedAccountCpi<'a> {
        ThawDelegatedAccountCpi {
            __program: self.instruction.__program,

            delegate: self.instruction.delegate.expect("delegate is not set"),

            token_account: self
                .instruction
                .token_account
                .expect("token_account is not set"),

            edition: self.instruction.edition.expect("edition is not set"),

            mint: self.instruction.mint.expect("mint is not set"),

            token_program: self
                .instruction
                .token_program
                .expect("token_program is not set"),
        }
    }
}

struct ThawDelegatedAccountCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    delegate: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}
