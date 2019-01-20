<template>
    <div class="conversation-item content is-medium">
        <p>{{conversation.name}}</p>
    </div>

</template>

<script>
export default {
  name: 'MessagesPageConversationSelectorItem',
  props: {
      conversation: {
          type: Object
      }
  },
  data () {
    return {

         
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.conversation-item {
    height: 50px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: lightgray;
}


</style>
