<template>
  <div>
    Category: {{ tourCategory.name }} <br>
    ----------------------------------- <br>
    Count: {{ tourCategories.length }}
  </div>
</template>

<script>
export default {
  props: {
    tourCategories: Array,
    tourCategory: Object
  }
}
</script>