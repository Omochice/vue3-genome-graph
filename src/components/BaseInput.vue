<template>
  <textarea
    id=""
    name=""
    cols="30"
    rows="10"
    v-model="computedSequence"
  ></textarea>
</template>

<script lang="ts" setup>
import { computed, toRef } from "vue";

const props = defineProps<{ sequence: string }>();
const emits = defineEmits<{
  (e: "update:sequence", newValue: string): void;
}>();

const sequence = toRef(props, "sequence");

const computedSequence = computed({
  get: () => sequence.value,
  set: (value: string) => {
    emits("update:sequence", value);
  },
});
</script>

<style scoped></style>
