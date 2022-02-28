<template>
  <div>
    {{ destination.name }} <br>
    ----------------------------- <br>
    {{ destinations.length }}
  </div>
</template>

<script>
export default {
  props: ['destination', 'destinations']
}
</script>