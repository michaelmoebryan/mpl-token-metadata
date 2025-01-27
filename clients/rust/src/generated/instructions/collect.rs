//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct Collect {
    /// Authority to collect fees
    pub authority: solana_program::pubkey::Pubkey,
    /// PDA to retrieve fees from
    pub pda_account: solana_program::pubkey::Pubkey,
}

impl Collect {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(2);
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.pda_account,
            false,
        ));
        let data = CollectInstructionData::new().try_to_vec().unwrap();

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct CollectInstructionData {
    discriminator: u8,
}

impl CollectInstructionData {
    fn new() -> Self {
        Self { discriminator: 54 }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct CollectBuilder {
    authority: Option<solana_program::pubkey::Pubkey>,
    pda_account: Option<solana_program::pubkey::Pubkey>,
}

impl CollectBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Authority to collect fees
    #[inline(always)]
    pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.authority = Some(authority);
        self
    }
    /// PDA to retrieve fees from
    #[inline(always)]
    pub fn pda_account(&mut self, pda_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.pda_account = Some(pda_account);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = Collect {
            authority: self.authority.expect("authority is not set"),
            pda_account: self.pda_account.expect("pda_account is not set"),
        };

        accounts.instruction()
    }
}

/// `collect` CPI instruction.
pub struct CollectCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Authority to collect fees
    pub authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// PDA to retrieve fees from
    pub pda_account: &'a solana_program::account_info::AccountInfo<'a>,
}

impl<'a> CollectCpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(2);
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.pda_account.key,
            false,
        ));
        let data = CollectInstructionData::new().try_to_vec().unwrap();

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(2 + 1);
        account_infos.push(self.__program.clone());
        account_infos.push(self.authority.clone());
        account_infos.push(self.pda_account.clone());

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `collect` CPI instruction builder.
pub struct CollectCpiBuilder<'a> {
    instruction: Box<CollectCpiBuilderInstruction<'a>>,
}

impl<'a> CollectCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(CollectCpiBuilderInstruction {
            __program: program,
            authority: None,
            pda_account: None,
        });
        Self { instruction }
    }
    /// Authority to collect fees
    #[inline(always)]
    pub fn authority(
        &mut self,
        authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authority = Some(authority);
        self
    }
    /// PDA to retrieve fees from
    #[inline(always)]
    pub fn pda_account(
        &mut self,
        pda_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.pda_account = Some(pda_account);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> CollectCpi<'a> {
        CollectCpi {
            __program: self.instruction.__program,

            authority: self.instruction.authority.expect("authority is not set"),

            pda_account: self
                .instruction
                .pda_account
                .expect("pda_account is not set"),
        }
    }
}

struct CollectCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    pda_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}
