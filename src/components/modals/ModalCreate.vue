<template>
  <Modal>
    <template v-slot:container>
      <div class="bg-white rounded-md max-w-lg w-full p-5 m-auto">

        <div class="text-3xl text-gray-500 font-bold">
          Adicionar Livro
        </div>
      
        <div class="mt-5">
          <form action="">
            <div class="flex flex-col mb-3">
              <label for="" class="text-xl text-gray-500">ISBN:</label>
              <input v-model="isbn" class="px-3 py-2 outline-none rounded-md border-gray-200 border-2 h-10" type="text" name="" id="">
            </div>
            <div class="flex flex-col mb-3">
              <label for="" class="text-xl text-gray-500">Título</label>
              <input v-model="title" class="px-3 py-2 outline-none rounded-md border-gray-200 border-2 h-10" type="text" name="" id="">
            </div>
            <div class="flex flex-col mb-3">
              <label for="" class="text-xl text-gray-500">Autor</label>
              <input v-model="author" class="px-3 py-2 outline-none rounded-md border-gray-200 border-2 h-10" type="text" name="" id="">
            </div>
            <div class="flex flex-col mb-3">
              <label for="" class="text-xl text-gray-500">Imagem</label>
              <input v-model="image_url" class="px-3 py-2 outline-none rounded-md border-gray-200 border-2 h-10" type="text" name="" id="">
            </div>
            <div class="flex flex-col mb-3">
              <label for="" class="text-xl text-gray-500">Preço</label>
              <input v-model="price" class="px-3 py-2 outline-none rounded-md border-gray-200 border-2 h-10" type="number" step="00,00" name="" id="">
            </div>
          </form>
        </div>      
        <div class="mt-5 flex justify-end">
          <button class="bg-primary text-black text-xl px-3 py-2 rounded-md hover:opacity-80 mx-1" @click="save()">Salvar</button>
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
      isbn: ref(''),
      title: ref(''),
      author: ref(''),
      image_url: ref(''),
      price: ref(0)
    }
  },

  methods: {
    save(){
      if(this.isbn && this.title && this.image_url && this.author){
        if(this.price >= 0){
          const { isbn, title, image_url, price, author } = this
          const book = {
            isbn, title, image_url, price, author
          }
          this.$store.commit('addBook', book)
        }
      }

      this.$emit('close');
    }
  },
}
</script>


