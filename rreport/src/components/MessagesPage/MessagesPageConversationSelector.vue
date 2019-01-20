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
import firebase from 'firebase'
import db from '@/firebase/init'
import { mapGetters } from 'vuex'
import MessagesPageConversationSelectorItem from '@/components/MessagesPage/MessagesPageConversationSelectorItem'
export default {
  components: {
    'MessagesPageConversationSelectorItem': MessagesPageConversationSelectorItem 
  },
  name: 'MessagesPageConversationSelector',
  data () {
    return {
      conversations: [

      ]
         
    }
  },
  methods: {
    getConversations() {
      db.collection('Assailants').where('Victims', "array-contains",this.getAuth.uid).get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.conversations.push(doc.data())
        })
      })
    },
  },
  computed: {
    ...mapGetters([
      'getAuth'
    ])
  },
  mounted() {
    this.getConversations()
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
