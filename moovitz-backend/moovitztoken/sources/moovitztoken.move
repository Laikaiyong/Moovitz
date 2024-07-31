module moovitztoken::moovitztoken {
    use sui::coin;
    use sui::transfer;
    use sui::tx_context::TxContext;

    /// One-time witness type
    public struct MOOVITZTOKEN has drop {}

    fun init(witness: MOOVITZTOKEN, ctx: &mut TxContext) {
        let (treasury_cap, metadata) = coin::create_currency(witness, 3, b"MOOV", b"", b"", option::none(), ctx);
        transfer::public_freeze_object(metadata);
        transfer::public_transfer(treasury_cap, tx_context::sender(ctx))
    }
     public entry fun mint(
        treasury_cap: &mut TreasuryCap<MOOVITZTOKEN>,
        amount: u64,
        recipient: address,
        ctx: &mut TxContext
    ) {
        let coin = coin::mint(treasury_cap, amount, ctx);
        transfer::public_transfer(coin, recipient);
    }
}