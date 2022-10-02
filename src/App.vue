<script setup lang="ts">
import { ref, computed } from "vue";
import BaseInput from "@/components/BaseInput.vue";
import TheChart from "@/components/TheChart.vue";

const sequence = ref("");
const computedSequence = computed({
  get: () => sequence.value,
  set: (value: string) => (sequence.value = value),
});
</script>

<template>
  <BaseInput v-model:sequence="computedSequence" />

  <TheChart :sequence="computedSequence" />
</template>

<style scoped></style>
