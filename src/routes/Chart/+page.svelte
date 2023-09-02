<script>
  import CountryTable from "../../components/CountryTable.svelte";
  import PolarAreaChart from "../../components/PolarAreaChart.svelte";
</script>

<main>
  <div class="flex justify-between gap-1">
    <div>
      <h1 class="text-5xl text-center font-medium">Country Data Table</h1>
      <CountryTable />
    </div>
    <div>
      <h1 class="text-5xl text-center font-medium">Polar Area Chart</h1>
      <PolarAreaChart />
    </div>
  </div>
</main>
