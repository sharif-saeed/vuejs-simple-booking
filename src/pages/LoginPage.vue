<template>
    <div class="login">
      <h2>Login Page</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="username" type="text" placeholder="Username"  />
        <input v-model="password" type="password" placeholder="Password"  />
        <button type="submit">Login</button>
      </form>
    </div>
</template>
  

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user';
import { useRouter } from 'vue-router';

const username = ref("")
const password = ref("")

const userStore = useUserStore()
const router = useRouter()

function handleLogin(){
  if(username.value && password.value){
    userStore.login(username.value)
    router.push("/dashboard")
  } else{
    alert("Please enter the information")
  }
}
</script>



<style scoped>
.login {
  max-width: 400px;
  margin: 60px auto;
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: inherit;
}

.login h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #2e3c52;
}

.login form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.login input {
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border 0.2s, box-shadow 0.2s;
}

.login input:focus {
  border-color: #2196f3;
  box-shadow: 0 0 5px rgba(33, 150, 243, 0.4);
  outline: none;
}

.login button {
  padding: 10px;
  background: #2196f3;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.login button:hover {
  background: #1976d2;
}

</style>
