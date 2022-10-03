<template>
  <div class="q-pa-md">
    <div class="row q-pt-sm q-col-gutter-sm">
      <q-input
        class="col-12 col-md-4"
        outlined
        v-model.number="form.income"
        type="number"
        label="每月工资"
      />
      <q-select
        class="col-12 col-md-4"
        outlined
        v-model="form.times"
        label="缴纳期数"
        :options="timesOptions"
      />
      <q-input
        class="col-12 col-md-4"
        outlined
        v-model="totalSalary"
        label="累计工资"
        readonly
      />
    </div>
    <div class="row q-pt-sm q-col-gutter-sm">
      <q-select
        class="col-12 col-md-4"
        outlined
        v-model="form.shebaoMethod"
        label="社保缴纳方案"
        :options="shebaoMethodOptions"
        @update:model-value="updateshebaoBase()"
      />
      <q-input
        class="col-12 col-md-4"
        outlined
        v-model="form.shebaoBase"
        label="社保缴纳基数"
        type="number"
        :readonly="form.shebaoMethod.value != CUSTOM"
      />
    </div>
    <div class="row q-pt-sm q-col-gutter-sm">
      <q-select
        class="col-12 col-md-4"
        outlined
        v-model="form.gongjijinMethod"
        label="公积金缴纳方案"
        :options="gongjijinMethodOptions"
        @update:model-value="updategongjijinBase()"
      />
      <q-select
        class="col-12 col-md-4"
        outlined
        v-model="form.gongjijinPercent"
        label="公积金缴纳比例"
        :options="gongjijinPercentOptions"
        @update:model-value="updategongjijinBase()"
      />
      <q-input
        class="col-12 col-md-4"
        outlined
        v-model="form.gongjijinBase"
        label="公积金缴纳基数"
        type="number"
        :readonly="form.gongjijinMethod.value != CUSTOM"
      />
    </div>
    <div class="row q-pt-sm q-col-gutter-sm">
      <q-select
        class="col-12 col-md-4"
        outlined
        v-model="form.buchonggongjijinMethod"
        label="补充公积金缴纳方案"
        :options="gongjijinMethodOptions"
        @update:model-value="updatebuchonggongjijinBase()"
      />
      <q-select
        class="col-12 col-md-4"
        outlined
        v-model="form.buchonggongjijinPercent"
        label="补充公积金缴纳比例"
        :options="buchonggongjijinPercentOptions"
        @update:model-value="updatebuchonggongjijinBase()"
      />
      <q-input
        class="col-12 col-md-4"
        outlined
        v-model="form.buchonggongjijinBase"
        label="补充公积金缴纳基数"
        type="number"
        :readonly="form.buchonggongjijinMethod.value != CUSTOM"
      />
    </div>
    <div class="row q-pt-sm q-col-gutter-sm">
      <q-input
        class="col-12 col-md-4"
        outlined
        v-model.number="form.jiangjinMonths"
        type="number"
        label="奖金月数"
      />
      <q-input
        class="col-12 col-md-4"
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
        class="col-12 col-md-4"
        outlined
        v-model="totalBonus"
        label="奖金总数"
        readonly
      />
    </div>
    <div class="row q-pt-sm q-col-gutter-sm">
      <q-input
        class="col-12 col-md-4"
        outlined
        v-model.number="form.hoursPerDay"
        type="number"
        label="每天工作时长"
      />
      <q-input
        class="col-12 col-md-4"
        outlined
        v-model.number="form.daysPerWeek"
        type="number"
        label="每周工作天数"
      />
      <q-input
        class="col-12 col-md-4"
        outlined
        v-model="hoursPerWeek"
        label="每周工作小时数"
        readonly
      />
    </div>
    <div class="row q-pt-sm q-col-gutter-sm">
      <q-input
        class="col-12 col-md-4"
        outlined
        v-model.number="form.other"
        type="number"
        label="其他收入"
      />
      <q-input
        class="col-12 col-md-4"
        outlined
        v-model.number="form.special"
        type="number"
        label="每月专项扣除总和"
      />
    </div>
    <div class="row q-pt-sm justify-center">
      <div class="col-2 text-center">税级 {{ taxInfo.level }}</div>
      <div class="col-2 text-center">
        税率 {{ taxInfo.rate == '-' ? taxInfo.rate : `${taxInfo.rate * 100}%` }}
      </div>
      <q-toggle
        dense
        :label="`年终奖${isCalcuateCombined ? '合并计税' : '分别计税'}`"
        color="blue"
        v-model="isCalcuateCombined"
      />
    </div>
    <div class="row q-pt-sm justify-center">
      <div class="col-12 col-md-8">
        <q-table
          dense
          :columns="[
            {
              name: 'name',
              label: 'name',
              field: 'name',
              align: 'center',
              style: 'width: 15em; padding: 8px 10px',
            },
            {
              name: 'value',
              label: 'value',
              field: 'value',
              align: 'center',
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
    <div class="row q-pt-sm justify-center">
      <q-btn color="primary" @click="info.configDialog = true">数据配置</q-btn>
    </div>
    <q-dialog v-model="info.configDialog">
      <q-card style="min-width: 750px">
        <q-tabs v-model="info.tab">
          <q-tab name="config" label="五险一金配置" />
          <q-tab name="tax" label="税率表" />
        </q-tabs>

        <q-tab-panels v-model="info.tab">
          <q-tab-panel name="config">
            <div class="row q-pt-sm justify-start q-col-gutter-sm">
              <q-input
                class="col-12 col-md-4"
                outlined
                v-model.number="info.taxFree"
                type="number"
                label="个税免征额"
              />
              <q-input
                class="col-12 col-md-4"
                outlined
                v-model.number="info.shebao.up"
                type="number"
                label="社保上限"
              /><q-input
                class="col-12 col-md-4"
                outlined
                v-model.number="info.shebao.bottom"
                type="number"
                label="社保下限"
              />
            </div>
            <div class="row q-pt-sm justify-start q-col-gutter-sm">
              <q-input
                class="col-12 col-md-4"
                outlined
                v-model.number="info.shebao.percent.yanglao"
                type="number"
                label="养老保险缴纳比例"
              /><q-input
                class="col-12 col-md-4"
                outlined
                v-model.number="info.shebao.percent.yiliao"
                type="number"
                label="医疗保险缴纳比例"
              /><q-input
                class="col-12 col-md-4"
                outlined
                v-model.number="info.shebao.percent.shiye"
                type="number"
                label="失业保险缴纳比例"
              />
            </div>
            <template v-for="(value, key) in info.gongjijin" :key="value">
              <div class="row q-pt-sm justify-start q-col-gutter-sm">
                <q-input
                  class="col-12 col-md-4"
                  outlined
                  v-model.number="info.gongjijin[key].up"
                  type="number"
                  :label="`公积金缴存${key}%上限`"
                /><q-input
                  class="col-12 col-md-4"
                  outlined
                  v-model.number="info.gongjijin[key].bottom"
                  type="number"
                  :label="`公积金缴存${key}%下限`"
                />
              </div>
            </template>
            <template
              v-for="(value, key) in info.buchonggongjijin"
              :key="value"
            >
              <div
                class="row q-pt-sm justify-start q-col-gutter-sm"
                v-if="key != 0"
              >
                <q-input
                  class="col-12 col-md-4"
                  outlined
                  v-model.number="info.buchonggongjijin[key].up"
                  type="number"
                  :label="`补充公积金缴存${key}%上限`"
                /><q-input
                  class="col-12 col-md-4"
                  outlined
                  v-model.number="info.buchonggongjijin[key].bottom"
                  type="number"
                  :label="`补充公积金缴存${key}%下限`"
                />
              </div>
            </template>
          </q-tab-panel>
          <q-tab-panel name="tax">
            <template v-for="(item, index) in taxTable" :key="item[0]">
              <div class="row q-pt-sm justify-start q-col-gutter-sm">
                <q-input
                  class="col-12 col-md-4"
                  outlined
                  v-model.number="taxTable[index][0]"
                  type="number"
                  :label="`第${index + 1}级税阶上限`"
                /><q-input
                  class="col-12 col-md-4"
                  outlined
                  v-model.number="taxTable[index][1]"
                  type="number"
                  :label="`第${index + 1}级税率`"
                /><q-input
                  class="col-12 col-md-4"
                  outlined
                  v-model.number="taxTable[index][2]"
                  type="number"
                  :label="`第${index + 1}级税阶速算扣除数`"
                />
              </div> </template
          ></q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const info = reactive({
      shebao: {
        bottom: 6520,
        up: 34188,
        percent: { yanglao: 0.08, yiliao: 0.02, shiye: 0.005 },
      },
      gongjijin: {
        7: { up: 2393, bottom: 181 },
        6: { up: 2051, bottom: 155 },
        5: { up: 1709, bottom: 130 },
      },
      buchonggongjijin: {
        5: { up: 1709, bottom: 130 },
        4: { up: 1368, bottom: 104 },
        3: { up: 1026, bottom: 78 },
        2: { up: 684, bottom: 52 },
        1: { up: 342, bottom: 26 },
        0: { up: 0, bottom: 0 },
      },
      configDialog: false,
      taxFree: 5000,
      tab: 'config',
    });

    const enum methodType {
      Income,
      Lowest,
      Highest,
      Custom,
    }

    const isCalcuateCombined = ref(true);

    const taxTable = reactive([
      [36000, 0.03, 0],
      [144000, 0.1, 2520],
      [300000, 0.2, 16920],
      [420000, 0.25, 31920],
      [660000, 0.3, 52920],
      [960000, 0.35, 85920],
      [1e30, 0.45, 181920],
    ]);

    type gongjijinKeyType = keyof typeof info.gongjijin;
    type buchonggongjijinKeyType = keyof typeof info.buchonggongjijin;
    const CUSTOM = methodType.Custom;
    const totalSalary = computed(() => form.income * form.times);
    const totalBonus = computed(() => form.jiangjinBase * form.jiangjinMonths);
    const totalIncome = computed(() => totalBonus.value + totalSalary.value);
    const timesOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const shebaoMethodOptions = [
      { label: '按工资', value: methodType.Income },
      { label: '当地最低', value: methodType.Lowest },
      { label: '当地最高', value: methodType.Highest },
      { label: '自定义', value: methodType.Custom },
    ];
    const gongjijinMethodOptions = [
      { label: '按工资', value: methodType.Income },
      { label: '自定义', value: methodType.Custom },
    ];
    const gongjijinPercentOptions = [];
    for (const key in info.gongjijin) {
      gongjijinPercentOptions.push({
        label: `${key}%`,
        value: key as unknown as gongjijinKeyType,
      });
    }
    const buchonggongjijinPercentOptions = [];
    for (const key in info.buchonggongjijin) {
      buchonggongjijinPercentOptions.push({
        label: `${key}%`,
        value: key as unknown as buchonggongjijinKeyType,
      });
    }
    const taxInfo = reactive({ level: '-', rate: '-' });
    const form = reactive({
      income: 0,
      times: 12,
      shebaoMethod: ref(shebaoMethodOptions[0]),
      shebaoBase: 0,
      gongjijinMethod: ref(gongjijinMethodOptions[0]),
      gongjijinPercent: ref(gongjijinPercentOptions[2]),
      gongjijinBase: 0,
      buchonggongjijinMethod: ref(gongjijinMethodOptions[0]),
      buchonggongjijinPercent: ref(buchonggongjijinPercentOptions[0]),
      buchonggongjijinBase: 0,
      jiangjinMonths: 0,
      jiangjinBase: 0,
      hoursPerDay: 8,
      daysPerWeek: 5,
      other: 0,
      special: 0,
    });
    const taxCombined = reactive({
      养老保险金: 0,
      医疗保险金: 0,
      失业保险金: 0,
      基本住房公积金: 0,
      补充住房公积金: 0,
      年度个人所得税: 0,
    });
    const taxSeperated = reactive({
      养老保险金: 0,
      医疗保险金: 0,
      失业保险金: 0,
      基本住房公积金: 0,
      补充住房公积金: 0,
      年度个人所得税: 0,
    });
    watch(
      () => form.income,
      (value: number) => {
        if (form.shebaoMethod.value == methodType.Income) {
          form.shebaoBase = value;
        }
        if (form.gongjijinMethod.value == methodType.Income) {
          form.gongjijinBase = value;
        }
        if (form.buchonggongjijinMethod.value == methodType.Income) {
          form.buchonggongjijinBase = value;
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
      }
    };
    const updategongjijinBase = () => {
      switch (form.gongjijinMethod.value) {
        case methodType.Income:
          form.gongjijinBase = form.income;
          break;
      }
    };
    const updatebuchonggongjijinBase = () => {
      switch (form.buchonggongjijinMethod.value) {
        case methodType.Income:
          form.buchonggongjijinBase = form.income;
          break;
      }
    };

    const calculateTax = (income: number) => {
      let ret = { tax: -1, taxInfo_level: '/', taxInfo_rate: '/' };
      for (const [index, stair] of taxTable.entries()) {
        let [banner, rate, quickSub] = stair;
        if (income <= banner) {
          ret.tax = income * rate - quickSub;
          ret.taxInfo_level = (index + 1).toString();
          ret.taxInfo_rate = rate.toString();
          break;
        }
      }
      return ret;
    };

    const calculateCombined = () => {
      // 合并计税
      // 调整社保基数到给定区间
      const shebaoBase = Math.max(
        Math.min(form.shebaoBase, info.shebao.up),
        info.shebao.bottom
      );

      // 调整公积金到给定区间
      let gongjijin = (form.gongjijinBase * form.gongjijinPercent.value) / 100;
      const gongjijinUp = info.gongjijin[form.gongjijinPercent.value].up;
      const gongjijinBottom =
        info.gongjijin[form.gongjijinPercent.value].bottom;
      gongjijin = Math.max(Math.min(gongjijin, gongjijinUp), gongjijinBottom);
      let buchonggongjijin =
        (form.buchonggongjijinBase * form.buchonggongjijinPercent.value) / 100;
      const buchonggongjijinUp =
          info.buchonggongjijin[form.buchonggongjijinPercent.value].up,
        buchonggongjijinBottom =
          info.buchonggongjijin[form.buchonggongjijinPercent.value].bottom;
      buchonggongjijin = Math.max(
        Math.min(buchonggongjijin, buchonggongjijinUp),
        buchonggongjijinBottom
      );

      // 计算五险一金
      taxCombined['养老保险金'] = shebaoBase * info.shebao.percent.yanglao;
      taxCombined['医疗保险金'] = shebaoBase * info.shebao.percent.yiliao;
      taxCombined['失业保险金'] = shebaoBase * info.shebao.percent.shiye;
      taxCombined['基本住房公积金'] = gongjijin;
      taxCombined['补充住房公积金'] = buchonggongjijin;
      const totalExcludedPerMonth =
        taxCombined['养老保险金'] +
        taxCombined['医疗保险金'] +
        taxCombined['失业保险金'] +
        taxCombined['基本住房公积金'] +
        taxCombined['补充住房公积金'] +
        info.taxFree +
        form.special;

      // 计算待缴金额
      const totalIncomeWithBonusForTax =
        totalSalary.value -
        totalExcludedPerMonth * form.times +
        form.jiangjinBase * form.jiangjinMonths +
        form.other * 1;
      if (totalIncomeWithBonusForTax <= 0) {
        taxCombined['年度个人所得税'] = 0;
        taxInfo.level = '-';
        taxInfo.rate = '-';
        return;
      }
      const result = calculateTax(totalIncomeWithBonusForTax);
      taxCombined['年度个人所得税'] = result.tax;
      taxInfo.level = result.taxInfo_level;
      taxInfo.rate = result.taxInfo_rate;
    };
    const calculateSeperated = () => {
      // 分别计税
      // 调整社保基数到给定区间
      const shebaoBase = Math.max(
        Math.min(form.shebaoBase, info.shebao.up),
        info.shebao.bottom
      );

      // 调整公积金到给定区间
      let gongjijin = (form.gongjijinBase * form.gongjijinPercent.value) / 100;
      const gongjijinUp = info.gongjijin[form.gongjijinPercent.value].up;
      const gongjijinBottom =
        info.gongjijin[form.gongjijinPercent.value].bottom;
      gongjijin = Math.max(Math.min(gongjijin, gongjijinUp), gongjijinBottom);
      let buchonggongjijin =
        (form.buchonggongjijinBase * form.buchonggongjijinPercent.value) / 100;
      const buchonggongjijinUp =
          info.buchonggongjijin[form.buchonggongjijinPercent.value].up,
        buchonggongjijinBottom =
          info.buchonggongjijin[form.buchonggongjijinPercent.value].bottom;
      buchonggongjijin = Math.max(
        Math.min(buchonggongjijin, buchonggongjijinUp),
        buchonggongjijinBottom
      );

      // 计算五险一金
      taxSeperated['养老保险金'] = shebaoBase * info.shebao.percent.yanglao;
      taxSeperated['医疗保险金'] = shebaoBase * info.shebao.percent.yiliao;
      taxSeperated['失业保险金'] = shebaoBase * info.shebao.percent.shiye;
      taxSeperated['基本住房公积金'] = gongjijin;
      taxSeperated['补充住房公积金'] = buchonggongjijin;
      const totalExcludedPerMonth =
        taxSeperated['养老保险金'] +
        taxSeperated['医疗保险金'] +
        taxSeperated['失业保险金'] +
        taxSeperated['基本住房公积金'] +
        taxSeperated['补充住房公积金'] +
        info.taxFree +
        form.special;

      // 计算待缴金额
      const totalIncomeWithBonusForTax =
        totalSalary.value -
        totalExcludedPerMonth * form.times +
        // 此处不并入奖金
        // form.jiangjinBase * form.jiangjinMonths +
        form.other * 1;
      // 奖金
      const jiangjin = form.jiangjinBase * form.jiangjinMonths;

      if (totalIncomeWithBonusForTax <= 0) {
        const result = calculateTax(jiangjin);
        taxSeperated['年度个人所得税'] = result.tax;
        taxInfo.level = '-';
        taxInfo.rate = '-';
        return;
      }
      const result = calculateTax(totalIncomeWithBonusForTax);
      taxSeperated['年度个人所得税'] = result.tax + calculateTax(jiangjin).tax;
      taxInfo.level = result.taxInfo_level;
      taxInfo.rate = result.taxInfo_rate;
    };

    const taxForTable = computed(() => {
      let tax;
      if (isCalcuateCombined.value) {
        calculateCombined();
        tax = taxCombined;
      } else {
        calculateSeperated();
        tax = taxSeperated;
      }
      let key: keyof typeof tax;
      const socialEnsuranceAndHouseFund =
        (tax['养老保险金'] +
          tax['医疗保险金'] +
          tax['失业保险金'] +
          tax['基本住房公积金'] +
          tax['补充住房公积金']) *
        form.times;
      const columns = [];
      const beforeTaxIncome = totalIncome.value + form.other * 1;
      columns.push({
        name: '税前年收入',
        value: beforeTaxIncome,
      });
      columns.push({
        name: '税后年收入',
        value:
          beforeTaxIncome - tax['年度个人所得税'] - socialEnsuranceAndHouseFund,
      });
      columns.push({
        name: '年度公积金总额（个人+公司）',
        value: 2 * 12 * (tax['基本住房公积金'] + tax['补充住房公积金']),
      });
      columns.push({
        name: '税后月收入',
        value:
          (beforeTaxIncome -
            tax['年度个人所得税'] -
            socialEnsuranceAndHouseFund) /
          12,
      });
      columns.push({
        name: '税后时薪',
        value:
          (beforeTaxIncome -
            tax['年度个人所得税'] -
            socialEnsuranceAndHouseFund) /
          12 /
          hoursPerWeek.value /
          4,
      });
      for (key in tax) {
        columns.push({
          name: (key != '年度个人所得税' ? '每月' : '') + key,
          value: tax[key],
        });
      }
      return columns;
    });
    const hoursPerWeek = computed(() => {
      return form.hoursPerDay * form.daysPerWeek;
    });
    return {
      CUSTOM,
      info,
      form,
      taxTable,
      totalSalary,
      totalBonus,
      totalIncome,
      timesOptions,
      taxForTable,
      hoursPerWeek,
      taxCombined,
      taxSeperated,
      taxInfo,
      shebaoMethodOptions,
      gongjijinMethodOptions,
      gongjijinPercentOptions,
      buchonggongjijinPercentOptions,
      isCalcuateCombined,
      updateshebaoBase,
      updategongjijinBase,
      updatebuchonggongjijinBase,
      calculateCombined,
      calculateSeperated,
      calculateTax,
    };
  },
});
</script>
