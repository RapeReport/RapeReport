<template>
    <div class="column is-three-quarters">
        <div class="max-height border">
            <MessagesPageMessage v-for="message in messages" :key="message"
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
        this.messages.push(message)
        console.log(this.messages)
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
.message-input {
    display: flex;
    flex-direction: column;
}

</style>
