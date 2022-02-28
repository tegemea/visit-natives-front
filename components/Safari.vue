<template>
  <div>
    Safari : {{ safari.name }} <br>
    ------------------------------- <br>
    Safaris : {{ safaris.length }}
  </div>
</template>

<script>
export default {
  props: {
    safaris : Array,
    safari: Object
  }
}
</script>