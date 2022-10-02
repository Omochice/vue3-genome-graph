<template>
  <Scatter
    :chartData="chartData"
    :chartOptions="chartOptions"
    :chartId="props.chartId"
    :width="props.width"
    :height="props.height"
    :cssClasses="props.cssclasses"
    :styles="props.styles"
    :plugins="props.plugins"
  ></Scatter>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Scatter } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Plugin,
} from "chart.js";
import { useCalculateSequence } from "@/composables/useCalculateSequence";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
);

const props = withDefaults(
  defineProps<{
    chartId?: string;
    width?: number;
    height?: number;
    cssclasses?: string;
    styles?: Partial<CSSStyleDeclaration>;
    plugins?: Plugin[];
    sequence: string;
  }>(),
  {
    chartId: "line-chart",
    width: 400,
    height: 400,
    cssclasses: "",
    styles: () => ({}),
    plugins: () => [],
  },
);

const { calculateSequence } = useCalculateSequence();

const chartData = computed({
  get: () => {
    return {
      datasets: [
        {
          label: "Sample graph",
          backgroundColor: "#f87979",
          data: calculateSequence(props.sequence),
          fill: false,
          showLine: true,
        },
      ],
    };
  },
  set: () => {},
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
