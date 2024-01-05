<template lang="pug">
  Layout
    main
      div(class="center")
        div(class="stack")
          div
            h1 Order Online
            p Order for pickup or delivery by clicking one of the options below
          div(class="cluster")
            a(class="order-online-link" href="https://www.clover.com/online-ordering/dars-steaks") In-Store Pickup
            a(class="order-online-link" href="https://www.grubhub.com/restaurant/dars-steaks-142-haddon-ave-collingswood/6837120") DoorDash
            a(class="order-online-link" href="https://www.grubhub.com/restaurant/dars-steaks-142-haddon-ave-collingswood/6837120") GrubHub

</template>

<style scoped>

  main {
    height: 100%;
    padding-block-start: 4rem;
    padding-block-end: 10rem;
    font-size: 120%;
  }

  div {
    margin: 0 auto;
    text-align: center;
  }

  .center {
    box-sizing: content-box;
    margin-inline: auto;
  }

  .stack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start
  }

  .stack > * {
    margin-block: 0;
  }

  .stack > * + * {
    margin-block-start: 2rem;
  }

  .cluster {
    display: flex;
		flex-wrap: wrap;
		gap: var(--space, 1rem);
		justify-content: center;
		align-items: center;
  }

  h1 {
    color: #004BAD;
    text-shadow: 1px 1px 2px #1F85B7;
  }


</style>