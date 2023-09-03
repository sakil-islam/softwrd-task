<script>
  import {
    countryDataStore,
  } from "../components/stores/countryDataStore";

  let Countries;

  $: {
    Countries = $countryDataStore;
  }
</script>

<main class="p-6">
  <div class="mx-auto bg-white shadow-lg rounded-lg">
    <table class="table-auto">
      <thead>
        <tr class="bg-gray-200">
          <th class="py-2 px-4">Flag</th>
          <th class="py-2 px-4">Name</th>
          <th class="py-2 px-4">CIOC</th>
          <th class="py-2 px-4">UN Member Status</th>
          <th class="py-2 px-4">Currencies (Key)</th>
          <th class="py-2 px-4">Population</th>
          <th class="py-2 px-4">Languages</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through the Countries array of object to populate the table -->
        {#each Countries as country (country)}
          <tr class="bg-white border-b-2">
            <td class="py-2 px-4">{country?.flag}</td>
            <td class="py-2 px-4">{country?.name?.common}</td>
            <td class="py-2 px-4">{country?.cioc}</td>
            <td class="py-2 px-4">{country?.status}</td>
            <td class="py-2 px-4"
              >{Object.keys(country?.currencies).join(", ")}</td
            >
            <td class="py-2 px-4">{country?.population}</td>
            <td class="py-2 px-4"
              >{Object.values(country?.languages).join(", ")}</td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</main>
