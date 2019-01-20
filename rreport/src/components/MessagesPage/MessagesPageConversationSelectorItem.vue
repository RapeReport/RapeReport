<template>
    <div class="conversation-item content is-medium">
      <div class="columns is-gapless">
      <div class="column is-three-quarters">
        {{conversation.name}}
      </div>
      <div class="column">
        <p class="VCount">{{conversation.Victims.length}}</p>
      </div>
    </div>
        <!-- <p class='ConvoName'>{{conversation.name}} {{conversation.Victims.length}}</p> -->
    </div>

</template>

<script>

import firebase from 'firebase'
import db from '@/firebase/init'
import {mapGetters, mapMutations } from 'vuex'

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
  methods:{
    ...mapMutations([
        'setSelectedConversation'
    ]),
    selectConversation(){
        console.log(this.conversation.Name)
        this.setSelectedConversation(this.conversation)
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
.VCount {
  text-align: right;
}


</style>
