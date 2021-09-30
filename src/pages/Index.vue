<template>
  <q-page class="row items-center justify-evenly" style="width: 100%">
    <tax-calculator></tax-calculator>
  </q-page>
</template>

<script lang="ts">
import TaxCalculator from 'components/TaxCalculator.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { TaxCalculator },
  setup() {
    return {};
  },
});
</script>
