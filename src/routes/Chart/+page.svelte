<script>
  import CountryTable from "../../components/CountryTable.svelte";
  import PolarAreaChart from "../../components/PolarAreaChart.svelte";
  import Nav from "../+page.svelte";
</script>

<main>
  <Nav />
  <div class="lg:flex justify-center gap-4 mt-4 s overflow-x-scroll overscroll-y-scroll">
    <div>
      <h1 class="text-3xl text-center font-medium">Country Data Table</h1>
      <CountryTable />
    </div>
    <div>
      <h1 class="text-3xl text-center font-medium mb-4">Polar Area Chart</h1>
      <PolarAreaChart />
    </div>
  </div>
</main>
