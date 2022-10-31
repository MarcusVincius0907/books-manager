<template>
  <Modal>
    <template v-slot:container>
      <div class="bg-white rounded-md max-w-lg w-full p-5 m-auto">

        <div class="text-3xl text-gray-500 font-bold">
          Deletar Livro
        </div>
      
        <div class="mt-5">
          Você tem certeza que deseja deletar o livro {{title}}
        </div>      
        <div class="mt-5 flex justify-end">
          <button class="bg-red-500 text-white text-xl px-3 py-2 rounded-md hover:opacity-80 mx-1" @click="deleteBook()">Deletar</button>
          <button class="bg-gray-500 text-white text-xl px-3 py-2 rounded-md hover:opacity-80 mx-1" @click="$emit('close')">Cancelar</button>
        </div>
      </div>
      
    </template>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
import { ref } from 'vue'
export default {

  components:{
    Modal
  },

  setup(){
    return{
      id: ref(''),
      title: ref(''),
    }
  },

  mounted(){
    if(this.$store.state.bookSelected){
      this.id = this.$store.state.bookSelected.id
      this.title = this.$store.state.bookSelected.title
    }
  },

  methods: {
    deleteBook(){
      this.$store.commit('removeBook', this.id)
      this.$emit('close');
    }
  },
}
</script>


