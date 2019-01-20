<template>
<div class="column one-quarter">
  <div class="max-height">
    <MessagesPageConversationSelectorItem v-for="conversation in conversations" :key="conversation.id"
      :conversation="conversation"
    ></MessagesPageConversationSelectorItem>
  </div>
</div>

</template>


<script>
import MessagesPageConversationSelectorItem from '@/components/MessagesPage/MessagesPageConversationSelectorItem'
export default {
  components: {
    'MessagesPageConversationSelectorItem': MessagesPageConversationSelectorItem 
  },
  name: 'MessagesPageConversationSelector',
  data () {
    return {
      conversations: [
        {id: 1, name: 'Daniel Richards', Victims: [0,1,2]},
        {id: 2, name: 'Daniel Richards', Victims: [0,1]},
        {id: 3, name: 'Daniel Richards', Victims: []},
        {id: 4, name: 'Daniel Richards', Victims: [0]},
        {id: 5, name: 'Daniel Richards', Victims: [2]},
        {id: 6, name: 'Daniel Richards', Victims: [0,1,2]}

      ]
         
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.max-height {
  height: 600px;
  overflow: auto;
}
.border {
  border-style: solid;
  border-width: 2px;
  border-radius: 2px;
}


</style>
