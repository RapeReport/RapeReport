<template lang="html">
  <div>
  <header class="Title">Connect</header>

  <div class="tile is-ancestor Description">
    <div class="tile is-vertical is-3 ">

      <div class="tile is-parent is-vertical is-danger">
        <article class="tile is-child notification is-info">
            <MessagesPageConversationSelector/>
        </article>
      </div>

    </div>

    <div class="tile is-vertical is-8">
      <div class="tile is-parent is-vertical"> 
          <article class="tile is-child notification">
            <MessagesPageConversationPane/>          

          </article>
      </div>


    </div>




  </div>
</div>


</template>


<!-- <template>
<div class="page columns">
    <MessagesPageConversationSelector>

    </MessagesPageConversationSelector>
    <MessagesPageConversationPane>

    </MessagesPageConversationPane>
</div>

</template> -->

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
.Title{
  font: Helvetica;
  font-style: italic;
  font-weight: bold;
  font-size: 4em;
  text-align: left;
  position: relative;
  z-index: 2;
  left: .7em;
}
.Welcome{
  text-align: left;
}
.Continue{
  position: relative;
  z-index: 2;
  top: .4em;
}
.Login_B{
/*  position: relative;
  z-index: 2;
  left: 18em;*/
}
.fact{
  font-weight: bold;
}
.Login{
  text-align: right;
}
.Description{
  position: relative;
  z-index: 2;
  left: 3em;
}
</style>
