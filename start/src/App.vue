<script>
import data from './assets/data.json'

export default {
  data() {
    return {
      email: "",
      password: "",
      products: data,
      isLoggedIn: false
    }
  },
  methods: {
    login() {
      console.log("Logging in with email:", this.email, "and password:", this.password)

      this.isLoggedIn = true
    },
    logout() {
      console.log("Logging out")
      this.isLoggedIn = false
    }
  },
}
</script>


<template>
  <div class="p-5">
    <!-- login -->
    <div class="min-h-screen flex items-center justify-center w-full" v-if="!isLoggedIn">
      <div
        class="rounded-lg px-8 py-6 w-1/3 bg-blue-400 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        <h1 class="text-2xl font-bold text-center mb-4">Login</h1>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium ">Email
              Address : <b>{{ email }}</b></label>
            <input type="email" id="email"
              class="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              placeholder="your@email.com" v-model="email">
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium">Password : <b>{{ password }}</b></label>
            <input type="password" id="password"
              class="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              placeholder="Enter your password" v-model="password">
          </div>
          <button
            class="w-full mt-5 justify-center py-2 px-4 border-2 border-black rounded-2xl text-sm font-medium text-white bg-gray-700 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">Login</button>
        </form>
      </div>
    </div>

    <!-- home -->
    <div v-else="isLoggedIn">
      <!-- navbar -->
      <nav
        class="sticky top-0 z-10 p-3 bg-purple-400 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        <div class="flex justify-between items-center">
          <a class="text-2xl font-bold px-6 cursor-pointer">
            <span>Vue Introduction - Option</span>
          </a>

          <a class="text-2xl font-bold px-6 cursor-pointer hover:text-red-500" @click="logout">
            <span>Logout</span>
          </a>
        </div>
      </nav>
      <br />

      <!-- product list -->
      <div id="PAGE-HOME" class="min-h-screen flex items-center justify-center">
        <main class="my-5 bg-white grid grid-cols-4 gap-5">
          <!-- card 1 -->
          <div
            class="h-full flex flex-col justify-center items-center bg-yellow-400 border-2 border-black p-5 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            v-for="product in products">
            <div class="flex flex-1">
              <img :src="product.imgUrl" class="border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            </div>
            <div class="flex flex-col divide-y divide-black">
              <b class="mt-5">{{ product.name }}</b>
              <p>
                {{ product.description.length > 100 ? product.description.substring(0, 100) + "..." :
                  product.description
                }}
              </p>
            </div>
          </div>
          <!-- end of row -->
        </main>
      </div>
    </div>

  </div>
</template>