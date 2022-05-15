<template>
  <div>this is {{ contestId }} page.</div>
</template>

<script>
export default {
  async asyncData(context) {
    return { contestId: context.params.contest }
  },
}
</script>

<style>
</style>