<template>
  <navbar class=" w-full h-20 flex bg-primary justify-center ">
    <div class="w-full max-w-7xl flex items-center justify-between xl:p-0 px-3  ">
      <div class="flex justify-center  items-center">
        <img class=" w-full h-10" src="/src/assets/logoBooks.png" alt="">
      </div>
      <div class="flex justify-center  items-center w-full ">
        <div class="w-full max-w-sm flex">
          <input class="bg-white  rounded-bl-md rounded-tl-md h-10 w-full outline-none px-5 py-3" type="text" name="" id="">
          <span class="bg-white h-10 hover:cursor-pointer hover:opacity-80 flex justify-center items-center p-3 rounded-br-md rounded-tr-md">
            <font-awesome-icon icon="magnifying-glass" />
          </span>
        </div>
      </div>
      <div>
        <button @click="handleModal(true)" class="bg-black text-white text-xl px-3 py-2 rounded-md hover:opacity-80">Criar</button>
      </div>
      
    </div>
    <ModalCreate v-if="showModal" @close="handleModal(false)" />
  </navbar>
</template>

<script>
import ModalCreate from './modals/ModalCreate.vue'
import { ref } from 'vue';
export default {
  components:{
    ModalCreate
  },

  setup(){
    return {
      showModal: ref(false),
    }
  },

  methods:{
    handleModal(flag){
      this.showModal = flag;
    }
  },
}
</script>