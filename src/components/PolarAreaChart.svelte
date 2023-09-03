<script>
  import { onMount } from "svelte";
  import { Chart } from "chart.js/auto";
  import { top10CountriesStore } from '../components/stores/countryDataStore';

  let top10Countries;

  $: {
    top10Countries = $top10CountriesStore;
  }

  
  const sampleData = [
    {
      flag: "🇺🇸",
      name: "United States",
      cioc: "USA",
      status: "UN Member",
      currencies: {
        USD: {
          name: "United States Dollar",
          symbol: "$",
        },
      },
      population: 331002651,
      languages: {
        eng: "English",
      },
    },
    {
      flag: "🇨🇳",
      name: "China",
      cioc: "CHN",
      status: "UN Member",
      currencies: {
        CNY: {
          name: "Chinese Yuan",
          symbol: "¥",
        },
      },
      population: 1439323776,
      languages: {
        zho: "Chinese",
      },
    },
    {
      flag: "🇮🇳",
      name: "India",
      cioc: "IND",
      status: "UN Member",
      currencies: {
        INR: {
          name: "Indian Rupee",
          symbol: "₹",
        },
      },
      population: 1380004385,
      languages: {
        eng: "English",
        hin: "Hindi",
      },
    },
    {
      flag: "🇧🇷",
      name: "Brazil",
      cioc: "BRA",
      status: "UN Member",
      currencies: {
        BRL: {
          name: "Brazilian Real",
          symbol: "R$",
        },
      },
      population: 212559417,
      languages: {
        por: "Portuguese",
      },
    },
    {
      flag: "🇵🇹",
      name: "Portugal",
      cioc: "POR",
      status: "UN Member",
      currencies: {
        EUR: {
          name: "Euro",
          symbol: "€",
        },
      },
      population: 10196709,
      languages: {
        por: "Portuguese",
      },
    },
    {
      flag: "🇷🇺",
      name: "Russia",
      cioc: "RUS",
      status: "UN Member",
      currencies: {
        RUB: {
          name: "Russian Ruble",
          symbol: "₽",
        },
      },
      population: 145934462,
      languages: {
        rus: "Russian",
      },
    },
    {
      flag: "🇩🇪",
      name: "Germany",
      cioc: "GER",
      status: "UN Member",
      currencies: {
        EUR: {
          name: "Euro",
          symbol: "€",
        },
      },
      population: 83783942,
      languages: {
        deu: "German",
      },
    },
    {
      flag: "🇫🇷",
      name: "France",
      cioc: "FRA",
      status: "UN Member",
      currencies: {
        EUR: {
          name: "Euro",
          symbol: "€",
        },
      },
      population: 65273511,
      languages: {
        fra: "French",
      },
    },
    {
      flag: "🇬🇧",
      name: "United Kingdom",
      cioc: "GBR",
      status: "UN Member",
      currencies: {
        GBP: {
          name: "British Pound Sterling",
          symbol: "£",
        },
      },
      population: 68207116,
      languages: {
        eng: "English",
      },
    },
    {
      flag: "🇯🇵",
      name: "Japan",
      cioc: "JPN",
      status: "UN Member",
      currencies: {
        JPY: {
          name: "Japanese Yen",
          symbol: "¥",
        },
      },
      population: 126476461,
      languages: {
        jpn: "Japanese",
      },
    },
  ];
  let chart;

  onMount(() => {

    const ctx = document.getElementById("polar-area-chart").getContext("2d");

    const data = {
      labels: sampleData.map((country) => country?.name?.common || country?.name),
      datasets: [
        {
          data: sampleData.map((country) => country?.population),
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
