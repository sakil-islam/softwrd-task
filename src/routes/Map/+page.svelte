<script>
  import { onMount } from "svelte";
  import { Map, View } from "ol";
  import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
  import { OSM } from "ol/source";
  import GeoJSON from "ol/format/GeoJSON";
  import { Style, Fill } from "ol/style";
  import { fromLonLat } from "ol/proj";
  import Nav from "../+page.svelte";

  let map;

  onMount(() => {
    // Create a map with full-screen width and height
    map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 5,
      }),
    });

    // Load GeoJSON data and add it to the map
    const geoJsonLayer = new VectorLayer({
      source: new VectorLayer({
        url:
          "./countries.geojson",
        format: new GeoJSON(),
      }),
      style: new Style({
        fill: new Fill({
          color: "#006a4e",
        }),
      }),
      opacity: 0.75,
    });

    map.addLayer(geoJsonLayer);
  });
</script>

<Nav />
<div id="map" style="width: 100%; height: 100vh; margin-top: 10px" />

<style>
  #map {
    position: absolute;
  }
</style>
