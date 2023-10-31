<script>
    import { onMount } from "svelte";
    import auctionApi from '../lib/api/auctionApi.js';
    let auctions = [
        /*{
            id: 1,
            name: "Auction 1",
            description: "Dit is een veiling",
            startPrice: 0,
            endTime: "",
            categories: {

            },
            bids: [
                {bidAmount: 1, userId: '1'},
                {bidAmount: 2, userId: '2'},
                {bidAmount: 3, userId: '3'}
            ]
        },
        {
            id: 2,
            name: "Auction 2",
            description: "Dit is een veiling",
            startPrice: 0,
            endTime: "",
            categories: {

            },
            bids: [
                {bidAmount: 1, userId: '1'},
                {bidAmount: 2, userId: '2'},
                {bidAmount: 3, userId: '3'}
            ]
        },*/
    ];
    onMount(async () => {
        const response = await auctionApi.getAllAuctions()
        if (response.ok) {
            auctions = response.json();
        }
    });
</script>

<!-- HTML structure for displaying the list of auctions -->
<div class="homepage">
    <h1>Items Up for Auction</h1>

    <!-- Auction list -->
    <ul>
        {#each auctions as auction (auction.id)}
            <li>
                <h2>{auction.name}</h2>
                <p>{auction.description}</p>
                <p>{auction.startPrice}</p>
                <a href="/{auction.id}">View Details</a>
            </li>
        {/each}
    </ul>
</div>
<style>
    h2 {
        margin-bottom: 10px;
        color: greenyellow;
    }
</style>