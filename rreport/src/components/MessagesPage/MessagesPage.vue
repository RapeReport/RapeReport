<template>
<div class="page columns">
    <MessagesPageConversationSelector>

    </MessagesPageConversationSelector>
    <MessagesPageConversationPane>
        
    </MessagesPageConversationPane>
</div>

</template>

<script>
import MessagesPageConversationSelector from '@/components/MessagesPage/MessagesPageConversationSelector'
import MessagesPageConversationPane from '@/components/MessagesPage/MessagesPageConversationPane'
export default {
  name: 'MessagesPage',
  components: {
      'MessagesPageConversationSelector': MessagesPageConversationSelector,
      'MessagesPageConversationPane': MessagesPageConversationPane
  },
  data () {
    return {

         
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
