<template>
  <div>
    Page : {{ page.name }} <br>
    ----------------------------------------- <br>
    Pages : {{ pages.length }}
  </div>
</template>

<script>
export default {
  props: ['page', 'pages']
}
</script>