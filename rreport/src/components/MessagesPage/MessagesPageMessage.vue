<template>
    <div class="message columns">
        <div class="column">
            {{message}}
        </div>
    </div>

</template>

<script>
export default {
  name: 'MessagesPageMessage',
  props: {
      message: {
          type: String
      }
  },
  data () {
    return {

    }
  },
  methods: {
   
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .message {
        /* height: 50px; */
        width: 80%;
        margin: 10px;
    }

</style>
