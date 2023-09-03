<script>
    import Nav from "../+page.svelte";
</script>

<main>
  <Nav />
  <div class="container m-auto grid md:grid-cols-12 grid-cols-4 grid-rows-6 gap-1 mt-2">
    <div class="md:block md:tile md:bg-blue-400 md:col-span-2 md:row-start-1 md:row-end-4 hidden" />
    <div class="tile bg-red-400 col-span-4 row-start-1 row-end-4 md:row-end-6" />
    <div class="md:block md:tile md:bg-blue-400 md:col-span-6 md:row-start-1 md:row-end-3 hidden" />
    <div class="md:block md:tile md:bg-pink-200 md:text-white md:row-start-4 md:row-end-6 md:col-span-2 hidden" />
    <div class="md:block md:tile md:bg-pink-400 md:row-start-6 md:row-end-7 md:col-span-6 hidden">
    </div>
    <div class="tile relative bg-yellow-100 md:row-start-3 row-start-4 row-end-7 col-span-4 md:p-5 p-2 parent">
      <div class="outer-square">
        <div class="inner-circle">
          <div class="mountain" />
        </div>
      </div>
    </div>
    <div class="md:block md:tile md:bg-yellow-300 md:row-start-3 md:row-end-7 md:col-span-2 hidden" />
  </div>
</main>

<style>
  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .outer-square {
    width: 300px;
    height: 300px;
    background-color: #293462;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner-circle {
    width: 200px;
    height: 200px;
    background-color: #fef9c3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
  }

  .mountain {
    border-left: 90px solid transparent;
    border-right: 55px solid transparent;
    border-bottom: 80px solid #fe5f55;
    position: absolute;
    bottom: 30px;
  }
</style>
