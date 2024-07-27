/*
/// Module: transacttransport
*/
module transacttransport::transacttransport {
    // Part 1: These imports are provided by default
    // use sui::object::{Self, UID};
    // use sui::transfer;
    // use sui::tx_context::{Self, TxContext};

    // Part 2: struct definitions
    public struct Trip has key, store {
        id: UID,
        transport_id: u64,
        driver_id: u64,
        datetime: u64,
    }

    public struct Calendar has key {
        id: UID,
        trips_created: u64,
    }

    // Part 3: Module initializer to be executed when this module is published
    fun init(ctx: &mut TxContext) {
        let trip_calendar = Calendar {
            id: object::new(ctx),
            trips_created: 0,
        };

        // Transfer the forge object to the module/package publisher
        transfer::transfer(trip_calendar, ctx.sender());
    }

    // Part 4: Accessors required to read the struct fields
    public fun transport_id(self: &Trip): u64 {
        self.transport_id
    }

    public fun datetime(self: &Trip): u64 {
        self.datetime
    }

    public fun driver_id(self: &Trip): u64 {
        self.driver_id
    }

    public fun trips_created(self: &Calendar): u64 {
        self.trips_created
    }

    // Part 5: Public/entry functions
    public fun trip_create(transport_id: u64, driver_id: u64, datetime: u64, ctx: &mut TxContext): Trip {
        // Create a trip
        Trip {
            id: object::new(ctx),
            transport_id: transport_id,
            driver_id: driver_id,
            datetime: datetime,
        }
    }

    /// Constructor for creating trips
    public fun new_trip(
        calendar: &mut Calendar,
       transport_id: u64,
       driver_id: u64,
       datetime: u64,
        ctx: &mut TxContext,
    ): Trip {
        calendar.trips_created = calendar.trips_created + 1;
        Trip {
            id: object::new(ctx),
            transport_id: transport_id,
            driver_id: driver_id,
            datetime: datetime,
        }
    }
    
    // Part 6: Tests
     #[test]
    fun test_trip_create() {
        // Create a dummy TxContext for testing
        let mut ctx = tx_context::dummy();

        // Create a sword
        let trip = Trip {
            id: object::new(&mut ctx),
            transport_id: 1,
            driver_id: 2,
            datetime: 128492712,
        };

        // Check if accessor functions return correct values
        assert!(trip.magic() == 42 && trip.strength() == 7, 1);
        // Create a dummy address and transfer the sword
        let dummy_address = @0xCAFE;
        transfer::public_transfer(trip, dummy_address);
    }

    #[test]
    fun test_sword_transactions() {
        use sui::test_scenario;

        // Create test addresses representing users
        let initial_owner = @0xCAFE;
        let final_owner = @0xFACE;

        // First transaction executed by initial owner to create the sword
        let mut scenario = test_scenario::begin(initial_owner);
        {
            // Create the sword and transfer it to the initial owner
            let sword = sword_create(42, 7, scenario.ctx());
            transfer::public_transfer(sword, initial_owner);
        };

        // Second transaction executed by the initial sword owner
        scenario.next_tx(initial_owner);
        {
            // Extract the sword owned by the initial owner
            let sword = scenario.take_from_sender<Sword>();
            // Transfer the sword to the final owner
            transfer::public_transfer(sword, final_owner);
        };

        // Third transaction executed by the final sword owner
        scenario.next_tx(final_owner);
        {
            // Extract the sword owned by the final owner
            let sword = scenario.take_from_sender<Sword>();
            // Verify that the sword has expected properties
            assert!(sword.magic() == 42 && sword.strength() == 7, 1);
            // Return the sword to the object pool (it cannot be simply "dropped")
            scenario.return_to_sender(sword)
        };
        scenario.end();
    }

    #[test]
    fun test_module_init() {
        use sui::test_scenario;

        // Create test addresses representing users
        let admin = @0xAD;
        let initial_owner = @0xCAFE;

        // First transaction to emulate module initialization
        let mut scenario = test_scenario::begin(admin);
        {
            init(scenario.ctx());
        };

        // Second transaction to check if the forge has been created
        // and has initial value of zero swords created
        scenario.next_tx(admin);
        {
            // Extract the Forge object
            let forge = scenario.take_from_sender<Forge>();
            // Verify number of created swords
            assert!(forge.swords_created() == 0, 1);
            // Return the Forge object to the object pool
            scenario.return_to_sender(forge);
        };

        // Third transaction executed by admin to create the sword
        scenario.next_tx(admin);
        {
            let mut forge = scenario.take_from_sender<Forge>();
            // Create the sword and transfer it to the initial owner
            let sword = forge.new_sword(42, 7, scenario.ctx());
            transfer::public_transfer(sword, initial_owner);
            scenario.return_to_sender(forge);
        };
        scenario.end();
    }
}
