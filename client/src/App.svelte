<script>
  import router from 'page';

  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Header from "./components/Header.svelte";

  let page;
  let params;

  function setPage(newPage){
    page = newPage;
  }

  function setParams(newParams){
    params = newParams;
  }
  onMount(async () =>{
    const token = localStorage.getItem('token');
    if (token){
      try {
        await
      }
    }
  })
</script>

<main>
  <svelte:component this={page} {params} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

</style>
