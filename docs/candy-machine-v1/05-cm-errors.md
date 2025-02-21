---
sidebar_label: "4. Candy Machine Errors"
---
# Candy Machine Errors

:::warning

Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use [Candy Machine v2](../candy-machine-v2/introduction) instead.

:::

*Below is a list of potential errors you may encounter while operating an instance of a Candy Machine.*

| Error      | Description |Solution|
| ----------- | ----------- | ------ |
| Enetunreach      | Conection Error       | Check internet connection       |
| Upload Loop Error   | Error keeps looping        |Check your metadata for errors        |
|Unexpected token or end of JSON input|Error in the JSON file|Use the CLI method: `verify_token_metadata`|
|The term 'git' is not recognized as the name of a cmdlet|Git is not installed |[Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|
|The arweave-sol storage option only works on mainnet. For devnet, please use either arweave, aws or ipfs||Add the ```--storage arweave``` flag at the end of the command|
|Error: Non-base58 character|Error in your JSON file|Use a valid address in your JSON file|
| 429      | Rate Limited by your RPC end-point       | Use a different RPC       |
|Brackets `[]` when uploading assets    | Mulitple brackets with no content |Re-run your upload   |
|||

| Token Metadata      | Description |
| ----------- | ----------- | 
| 0      | `InstructionUnpackError`: Failed to unpack instruction data      | 
| 1      | `InstructionPackError`: Failed to pack instruction data      | 
|  2  | `NotRentExempt`: Lamport balance below rent-exempt threshold        | 
|3|`AlreadyInitialized`: Already initialized|
|4|`Uninitialized`: Uninitialized|
|5|`InvalidMetadataKey`: Metadata's key must match seed of `['metadata', program id, mint]` provided|
|6|`InvalidEditionKey`: Edition's key must match seed of `['metadata', program id, name, 'edition']` provided|
|7|`UpdateAuthorityIncorrect`: Update Authority given does not match|
|8|`UpdateAuthorityIsNotSigner`: Update Authority needs to be signer to update metadata|
|9|`NotMintAuthority`: You must be the mint authority and signer on this transaction|
|A|`InvalidMintAuthority`: Mint authority provided does not match the authority on the mint|
|B|`NameTooLong`: Name too long|
|C|`SymbolTooLong`: Symbol too long|
|D|`UriTooLong`: URI too long|
|E|`UpdateAuthorityMustBeEqualToMetadataAuthorityAndSigner`: Update authority must be equivalent to the metadata's authority and also signer of this transaction|
|F|`MintMismatch`: Mint given does not match mint on Metadata|
|10|`EditionsMustHaveExactlyOneToken`: Editions must have exactly one token|
|11|`MaxEditionsMintedAlready`: Maximum editions printed already|
|12|`TokenMintToFailed`: Token mint to failed|
|13|`MasterRecordMismatch`: The master edition record passed must match the master record on the edition given|
|14|`DestinationMintMismatch`: The destination account does not have the right mint|
|15|`EditionAlreadyMinted`: An edition can only mint one of its kind!|
|16|`PrintingMintDecimalsShouldBeZero`: Printing mint decimals should be zero|
|17|`OneTimePrintingAuthorizationMintDecimalsShouldBeZero`: OneTimePrintingAuthorization mint decimals should be zero|
|18|`EditionMintDecimalsShouldBeZero`: The decimal value on your Edition should be `0`|
|19|`TokenBurnFailed`: Token burn failed|
|1A|`TokenAccountOneTimeAuthMintMismatch`: The One Time authorization mint does not match that on the token account!|
|1B|`DerivedKeyInvalid`: Derived key invalid|
|1C|`PrintingMintMismatch`: The Printing mint does not match that on the master edition!|
|1D|`OneTimePrintingAuthMintMismatch`: The One Time Printing Auth mint does not match that on the master edition!|
|1E|`TokenAccountMintMismatch`: The mint of the token account does not match the Printing mint!|
|1F|`TokenAccountMintMismatchV2`: The mint of the token account does not match the master metadata mint!|
|20|`NotEnoughTokens`: Not enough tokens to mint a limited edition|
|21|`PrintingMintAuthorizationAccountMismatch`: The mint on your authorization token holding account does not match your printing mint!|
|22|`AuthorizationTokenAccountOwnerMismatch`: The authorization token account has a different owner than the update authority for the master edition!|
|23|`Disabled`: This feature is currently disabled.|
|24|`CreatorsTooLong`: Creators list too long|
|25|`CreatorsMustBeAtleastOne`: Creators must be at least one if set|
|26|`MustBeOneOfCreators`: If using a creators array, you must be one of the creators listed|
|27|`NoCreatorsPresentOnMetadata`: This metadata does not have creators|
|28|`CreatorNotFound`: This creator address was not found|
|29|`InvalidBasisPoints`: Basis points cannot be more than 10000|
|2A|`PrimarySaleCanOnlyBeFlippedToTrue`: Primary sale can only be flipped to true and is immutable|
|2B|`OwnerMismatch`: Owner does not match that on the account given|
|2C|`NoBalanceInAccountForAuthorization`: This account has no tokens to be used for authorization"|
|2D|`ShareTotalMustBe100`: Share total must equal 100 for creator array|
|2E|`ReservationExists`: This reservation list already exists!|
|2F|`ReservationDoesNotExist`: This reservation list does not exist!|
|30|`ReservationNotSet`: This reservation list exists but was never set with reservations|
|31|`ReservationAlreadyMade`: This reservation list has already been set!|
|32|`BeyondMaxAddressSize`: Provided more addresses than max allowed in single reservation"|
|33|`NumericalOverflowError`: NumericalOverflowError|
|34|`ReservationBreachesMaximumSupply`: This reservation would go beyond the maximum supply of the master edition|
|35|`AddressNotInReservation`: Address not in reservation!|
|36|`CannotVerifyAnotherCreator`: You cannot unilaterally verify another creator, they must sign"|
|37|`CannotUnverifyAnotherCreator`: You cannot unilaterally unverify another creator|
|38|`SpotMismatch`: In initial reservation setting, spots remaining should equal total spots|
|39|`IncorrectOwner`: Incorrect account owner|
|3A|`PrintingWouldBreachMaximumSupply`: printing these tokens would breach the maximum supply limit of the master edition|
|3B|`DataIsImmutable`: Data is immutable|
|3C|`DuplicateCreatorAddress`: No duplicate creator addresses|
|3D|`ReservationSpotsRemainingShouldMatchTotalSpotsAtStart`: Reservation spots remaining should match total spots when first being created|
|3E|`InvalidTokenProgram`: Invalid token program|
|3F|`DataTypeMismatch`: Data type mismatch|
|40|`BeyondAlottedAddressSize`: Beyond alotted address size in reservation!|
|41|`ReservationNotComplete`: The reservation has only been partially alotted|
|42|`TriedToReplaceAnExistingReservation`: You cannot splice over an existing reservation!|
|43|`InvalidOperation`: Invalid operation|
|44|`InvalidOwner`: Invalid Owner|
|45|`PrintingMintSupplyMustBeZeroForConversion`: Printing mint supply must be zero for conversion|
|46|`OneTimeAuthMintSupplyMustBeZeroForConversion`: One Time Auth mint supply must be zero for conversion|
|47|`InvalidEditionIndex`: You tried to insert one edition too many into an edition mark pda|
|48|`ReservationArrayShouldBeSizeOne`: In the legacy system the reservation needs to be of size one for cpu limit reasons|
