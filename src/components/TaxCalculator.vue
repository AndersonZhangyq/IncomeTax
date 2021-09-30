<template>
  <div class="q-pa-md q-gutter-y-sm" style="min-width: 800px">
    <div class="row q-col-gutter-x-sm">
      <q-input
        class="col-4"
        outlined
        v-model.number="form.income"
        type="number"
        label="每月工资"
      />
      <q-select
        class="col-4"
        outlined
        v-model="form.times"
        label="缴纳期数"
        :options="timesOptions"
      />
      <q-input
        class="col-4"
        outlined
        v-model="totalIncome"
        label="累计工资"
        readonly
      />
    </div>
    <div class="row q-col-gutter-x-sm">
      <q-select
        class="col-4"
        outlined
        v-model="form.shebaoMethod"
        label="社保缴纳方案"
        :options="shebaoMethodOptions"
        @update:model-value="updateshebaoBase()"
      />
      <q-input
        class="col-4"
        outlined
        v-model="form.shebaoBase"
        label="社保缴纳基数"
        type="number"
        :readonly="form.shebaoMethod.value != CUSTOM"
        ref="shebaoBaseInput"
      />
    </div>
    <div class="row q-col-gutter-x-sm">
      <q-select
        class="col-4"
        outlined
        v-model="form.gongjijinMethod"
        label="公积金缴纳方案"
        :options="gongjijinMethodOptions"
        @update:model-value="updategongjijinBase()"
      />
      <q-select
        class="col-4"
        outlined
        v-model="form.gongjijinPercent"
        label="公积金缴纳比例"
        :options="gongjijinPercentOptions"
        @update:model-value="updategongjijinBase()"
      />
      <q-input
        class="col-4"
        outlined
        v-model="form.gongjijinBase"
        label="公积金缴纳基数"
        type="number"
        readonly
      />
    </div>
    <div class="row q-col-gutter-x-sm">
      <q-input
        class="col-4"
        outlined
        v-model.number="form.jiangjinMonths"
        type="number"
        label="奖金月数"
      />
      <q-input
        class="col-4"
        outlined
        v-model.number="form.jiangjinBase"
        type="number"
        label="奖金基数"
      >
        <template v-slot:append>
          <q-btn
            flat
            round
            icon="replay"
            @click="form.jiangjinBase = form.income"
          />
        </template>
      </q-input>
      <q-input
        class="col-4"
        outlined
        v-model="totalBonus"
        label="奖金总数"
        readonly
      />
    </div>
    <div class="row">
      <q-btn color="primary" outline @click="calculate()">计算</q-btn>
    </div>
    <div class="row">
      <q-table
        :columns="[
          { name: 'name', label: 'name', field: 'name' },
          {
            name: 'value',
            label: 'value',
            field: 'value',
            format: (val, row) => val.toFixed(2),
          },
        ]"
        :rows="taxForTable"
        row-key="name"
        :rows-per-page-options="[0]"
        hide-bottom
        hide-header
      />
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineComponent, ref, watch } from 'vue';
import { QSelect } from 'quasar';

const info = {
  shebao: {
    bottom: 5976,
    up: 31014,
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

const taxTable = [
  [36000, 0.03, 0],
  [144000, 0.1, 2520],
  [300000, 0.2, 16920],
  [420000, 0.25, 31920],
  [660000, 0.3, 52920],
  [960000, 0.35, 85920],
  [1e30, 0.45, 181920],
];

const taxFree = 5000;

type gongjijinKeyType = keyof typeof info.gongjijin;

export default defineComponent({
  setup() {
    const CUSTOM = methodType.Custom;
    const shebaoBaseInput = ref<QSelect | null>();
    const totalIncome = computed(() => form.income * form.times);
    const totalBonus = computed(() => form.jiangjinBase * form.jiangjinMonths);
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
      jiangjinMonths: 0,
      jiangjinBase: 0,
    });
    const tax = reactive({
      养老保险金: 0,
      医疗保险金: 0,
      失业保险金: 0,
      工伤保险金: 0,
      基本住房公积金: 0,
      补充住房公积金: 0,
      个人所得税: 0,
    });
    watch(
      () => form.income,
      (value: number) => {
        if (
          form.shebaoMethod.value == methodType.Custom ||
          form.shebaoMethod.value == methodType.Income
        ) {
          form.shebaoBase = value;
        }
        if (
          form.gongjijinMethod.value == methodType.Custom ||
          form.gongjijinMethod.value == methodType.Income
        ) {
          form.gongjijinBase = value;
        }
        form.jiangjinBase = value;
      }
    );
    const updateshebaoBase = () => {
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
        case methodType.Custom:
          form.shebaoBase = form.income;
          break;
      }
    };
    const updategongjijinBase = () => {
      switch (form.gongjijinMethod.value) {
        case methodType.Income:
          form.gongjijinBase = form.income;
          break;
        case methodType.Lowest:
          form.gongjijinBase =
            info.gongjijin[
              form.gongjijinPercent.value as gongjijinKeyType
            ].bottom;
          break;
        case methodType.Highest:
          form.gongjijinBase =
            info.gongjijin[form.gongjijinPercent.value as gongjijinKeyType].up;
          break;
        case methodType.Custom:
          form.gongjijinBase = form.income;
          break;
      }
    };
    const calculate = () => {
      // 调整到给定区间
      form.shebaoBase = Math.max(
        Math.min(form.shebaoBase, info.shebao.up),
        info.shebao.bottom
      );
      const gongjijinUp =
        info.gongjijin[form.gongjijinPercent.value as gongjijinKeyType].up;
      const gongjijinBottom =
        info.gongjijin[form.gongjijinPercent.value as gongjijinKeyType].bottom;
      form.gongjijinBase = Math.max(
        Math.min(form.gongjijinBase, gongjijinUp),
        gongjijinBottom
      );
      const shebaoBase = form.shebaoBase;
      const gongjijinBase = form.gongjijinBase;
      tax['养老保险金'] = shebaoBase * info.shebao.percent.yanglao;
      tax['医疗保险金'] = shebaoBase * info.shebao.percent.yiliao;
      tax['失业保险金'] = shebaoBase * info.shebao.percent.shiye;
      tax['基本住房公积金'] =
        (gongjijinBase * form.gongjijinPercent.value) / 100;
      tax['补充住房公积金'] = 0;
      tax['工伤保险金'] = shebaoBase * info.shebao.percent.gongshang;
      const totalExcludedPerMonth =
        tax['养老保险金'] +
        tax['医疗保险金'] +
        tax['失业保险金'] +
        tax['基本住房公积金'] +
        tax['补充住房公积金'] +
        tax['工伤保险金'] +
        taxFree;
      const totalIncomeWithBonusForTax =
        totalIncome.value -
        totalExcludedPerMonth * form.times +
        form.jiangjinBase * form.jiangjinMonths;
      if (totalIncomeWithBonusForTax <= 0) {
        tax['个人所得税'] = 0;
        return;
      }
      for (const stair of taxTable) {
        const [banner, rate, quickSub] = stair;
        if (totalIncomeWithBonusForTax <= banner) {
          tax['个人所得税'] = totalIncomeWithBonusForTax * rate - quickSub;
          break;
        }
      }
    };
    const taxForTable = computed(() => {
      let key: keyof typeof tax;
      const columns = [];
      for (key in tax) {
        columns.push({
          name: key,
          value: tax[key],
        });
      }
      return columns;
    });
    return {
      CUSTOM,
      shebaoBaseInput,
      form,
      totalIncome,
      totalBonus,
      timesOptions,
      taxForTable,
      tax,
      shebaoMethodOptions,
      gongjijinMethodOptions,
      gongjijinPercentOptions,
      updateshebaoBase,
      updategongjijinBase,
      calculate,
    };
  },
});
</script>
