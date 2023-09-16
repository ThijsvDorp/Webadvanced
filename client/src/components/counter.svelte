<script>
    let counter = 0;
    const increment = () => counter++;
    const decrement = () => counter--;
    const reset = () => counter = 0;
</script>

Counted: {counter}
<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>
<button on:click={reset}>reset</button>