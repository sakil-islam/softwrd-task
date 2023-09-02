<script>
  import { onMount } from "svelte";
  import { Chart } from "chart.js/auto";
  import { top10CountriesStore } from '../components/stores/countryDataStore';

  let top10Countries;

  $: {
    top10Countries = $top10CountriesStore;
  }

  let chart;

  onMount(() => {
    const ctx = document.getElementById("polar-area-chart").getContext("2d");

    const data = {
      labels: top10Countries.map((country) => country.name.common),
      datasets: [
        {
          data: top10Countries.map((country) => country.population),
          backgroundColor: [
            "red",
            "blue",
            "green",
            "orange",
            "purple",
            "pink",
            "yellow",
            "brown",
            "cyan",
            "gray",
          ],
        },
      ],
    };

    chart = new Chart(ctx, {
      type: "polarArea",
      data,
    });
  });
</script>

<main>
  <canvas id="polar-area-chart" width="400" height="400" />
</main>
