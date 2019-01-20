<template>
    <div class="message columns">
        <div class="column ">
            {{message.content}}
        </div>
    </div>

</template>

<script>
export default {
  name: 'MessagesPageMyMessage',
  props: {
      message: {
          type: Object
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
        float: right;
        right: 3em;
    }

</style>
