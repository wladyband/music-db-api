<template>
  <div>
    {{ pageName }} #{{ artistId }}
  </div>
</template>
<script>
  export default {
    props: {
      artistId: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        pageName: 'artist.show',
      };
    },
  };
</script>
