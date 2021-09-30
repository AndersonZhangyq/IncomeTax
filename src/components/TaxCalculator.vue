<template>
  <div class="q-pa-md" style="min-width: 400px">
    <q-input
      outlined
      v-model="form.income"
      label="每月工资"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />
    <q-select
      outlined
      v-model="form.times"
      label="缴纳期数"
      :options="timesOptions"
    />
    <q-input outlined v-model="totalIncome" label="累计工资" readonly />
    <q-select
      outlined
      v-model="form.shebaoMethod"
      label="社保缴纳方案"
      :options="shebaoMethodOptions"
      @input="updateshebaoBase"
      @change="updateshebaoBase"
      @update="updateshebaoBase"
    />
    <q-input outlined v-model="form.shebaoBase" label="社保缴纳基数" readonly />
    <q-select
      outlined
      v-model="form.gongjijinMethod"
      label="公积金缴纳方案"
      :options="gongjijinMethodOptions"
    />
    <q-select
      outlined
      v-model="form.gongjijinPercent"
      label="公积金缴纳比例"
      :options="gongjijinPercentOptions"
    />
    <q-input
      outlined
      v-model="form.gongjijinBase"
      label="公积金缴纳基数"
      readonly
    />
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineComponent, ref } from 'vue';

const info = {
  shebao: {
    up: 5976,
    bottom: 31014,
    percent: {
      yanglao: 0.16,
      yiliao: 0.105,
      shiye: 0.005,
      gongshang: 0.002,
    },
  },
  gongjijin: {
    7: { up: 4342 / 2, bottom: 348 / 2 },
    6: { up: 3722 / 2, bottom: 298 / 2 },
    5: { up: 3102 / 2, bottom: 248 / 2 },
  },
};

const enum methodType {
  Income,
  Lowest,
  Highest,
  Custom,
}

export default defineComponent({
  setup() {
    const totalIncome = computed(() => form.income * form.times);
    const timesOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const shebaoMethodOptions = [
      { label: '按工资', value: methodType.Income },
      { label: '当地最低', value: methodType.Lowest },
      { label: '当地最高', value: methodType.Highest },
      { label: '自定义', value: methodType.Custom },
    ];
    const gongjijinMethodOptions = [
      { label: '按工资', value: methodType.Income },
      { label: '当地最低', value: methodType.Lowest },
      { label: '当地最高', value: methodType.Highest },
      { label: '自定义', value: methodType.Custom },
    ];
    const gongjijinPercentOptions = [
      { label: '5%', value: 5 },
      { label: '6%', value: 6 },
      { label: '7%', value: 7 },
    ];
    const form = reactive({
      income: 0,
      times: 1,
      shebaoMethod: ref(shebaoMethodOptions[0]),
      shebaoBase: 0,
      gongjijinMethod: ref(gongjijinMethodOptions[0]),
      gongjijinPercent: ref(gongjijinPercentOptions[0]),
      gongjijinBase: 0,
    });
    const updateshebaoBase = () => {
      debugger;
      console.log('1');
      if (form.shebaoMethod.value == methodType.Custom) return;
      else
        switch (form.shebaoMethod.value) {
          case methodType.Income:
            form.shebaoBase = form.income;
            break;
          case methodType.Lowest:
            form.shebaoBase = info.shebao.bottom;
            break;
          case methodType.Highest:
            form.shebaoBase = info.shebao.up;
            break;
        }
    };
    return {
      form,
      totalIncome,
      timesOptions,
      shebaoMethodOptions,
      gongjijinMethodOptions,
      gongjijinPercentOptions,
      updateshebaoBase,
    };
  },
});
</script>
