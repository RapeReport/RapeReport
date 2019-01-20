<template>
    <div class="column ">
        <div class="max-height messageBox">
            <MessagesPageMessage v-for="(message,n) in messages" :key="n+message"
              :message="message"
            ></MessagesPageMessage>
        </div>
        <div class="message-input">
            <b-field position="is-centered">
                <b-input type="textarea"
                    v-model="newMessage"
                    placeholder="Send a message...."
                ></b-input>
            </b-field>
            <button class="button" @click="submit(newMessage)">Send</button>
        </div>
    </div>

</template>

<script>
import MessagesPageMessage from '@/components/MessagesPage/MessagesPageMessage'
import {mapGetters} from 'vuex'
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
  name: 'MessagesPageConversationPane',
  components: {
      'MessagesPageMessage': MessagesPageMessage
  },
  props: {
      conversation: {
          type: Object
      }
  },
  data () {
    return {
        newMessage: null,
        messages: [],
    }
  },
  methods: {
    submit(message) {
        db.collection('messages').add({
            assailantId: this.getSelectedConversation.Name,
            sender: this.getAuth.uid,
            content: message,
            time_sent: Date.now()
        })
    },
    getMessages(id) {
        console.log(id)
        this.messages=[]
        db.collection('messages').where('assailantId', '==', id)
        .onSnapshot((snapshot) => {
            console.log(1)
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added') {
                    this.messages.push(change.doc.data())
                    console.log(this.messages)
                    console.log(change.doc.data())
                }
            })
        })

    }
  },
  computed: {
      ...mapGetters([
          'getSelectedConversation',
          'getAuth'
      ])
  },
  watch: {
      getSelectedConversation: function(oldVal, newVal) {
          this.getMessages(newVal.Name)
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.max-height {
  height: 475px;
  overflow: auto;
}
.border {
  border-style: solid;
  border-width: 2px;
  border-radius: 2px;
}
.width { 
    width: 100%;
}
.messageBox {
  border-radius: .3em;
  background-color: white;
}
.message-input {
    display: flex;
    flex-direction: column;
}

</style>
