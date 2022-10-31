<template>
  <main class=" w-full flex justify-center max-w-7xl m-auto">
    <div v-if="books && books.length > 0" class="grid grid-cols-2 md:grid-cols-4 flex-wrap py-10  ">
      

      <div v-for="book in books" :key="book.id" class=" rounded-md shadow-xl bg-white  m-2 p-3">
        <div><img :src="book.image_url" alt=""></div>
        <div class="pt-5 text-xl">{{book.title}}</div>
        <div>{{book.author}}</div>
        <div>{{book.isbn}}</div>
        <div class="font-bold text-2xl">R${{book.price}}</div>
        <div class="flex justify-end">
          <div @click="selectBook(book, true)" class=" bg-red-500 text-white p-3 rounded-md mx-1 hover:cursor-pointer hover:opacity-80">
            <font-awesome-icon icon="trash" />
          </div>
          <div @click="selectBook(book)" class=" bg-primary text-white p-3 rounded-md mx-1 hover:cursor-pointer hover:opacity-80 ">
            <font-awesome-icon icon="pen" />
          </div>
        </div>
        
      </div>
      
    </div>
    <ModalUpdate v-if="showModalUpdate"  @close="handleModalUpdate(false)"/>
    <ModalDelete v-if="showModalDelete"  @close="handleModalDelete(false)"/>
  </main>
</template>

<script>
import { ref } from 'vue'
import ModalUpdate from './modals/ModalUpdate.vue'
import ModalDelete from './modals/ModalDelete.vue'

export default {

  components:{
    ModalDelete,
    ModalUpdate
  },

  setup(){
    
    return{
      showModalUpdate: ref(false),
      showModalDelete: ref(false),
    }
  },

  mounted(){
    console.log('store',this.$store.state);
  },

  methods:{
    handleModalUpdate(flag){
      this.showModalUpdate = flag;
    },

    handleModalDelete(flag){
      this.showModalDelete = flag;
    },

    selectBook(book, isDelete = false){
      this.$store.commit('setBookSelected', book);
      if(isDelete)
        this.handleModalDelete(true);
      else
        this.handleModalUpdate(true);
    }
  },

  computed:{
    books(){
      return this.$store.state.books
    }
  }

}
</script>