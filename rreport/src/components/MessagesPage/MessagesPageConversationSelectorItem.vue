<template>
    <div class="conversation-item content is-medium">
        <p class='ConvoName'>{{conversation.name}} <span class='Count'>{{conversation.Victims.length}}</span></p>
    </div>

</template>

<script>

import firebase from 'firebase'
import db from '@/firebase/init'

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
  },
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
.Count {
  text-align: right;
}


</style>
