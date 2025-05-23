<template>
  <div class="dashboard">
    <h2>Your Dashboard</h2>
    <div v-if="appointmentsStore.appointments.length === 0">
      No turn has been recorded.
    </div>
    <ul>
      <li v-for="(appt, index) in appointmentsStore.appointments" :key="index">
        {{ appt }}
        <button @click="cancelAppointment(index)">Cancel</button>
      </li>
    </ul>
    <router-link to="/booking">Booking Page</router-link>
    <router-link to="/">Log out</router-link>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue'
import { useAppointmentsStore } from '../store/appointments'
import { useUserStore } from '../store/user'

const appointmentsStore = useAppointmentsStore()
const userStore = useUserStore()

watchEffect(() => {
  appointmentsStore.loadAppointments(userStore.currentUser)
})

const cancelAppointment = (index) => {
  appointmentsStore.cancelAppointment(index)
}
</script>


  

<style scoped>
.dashboard {
  max-width: 600px;
  margin: 60px auto;
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  color: #2e3c52;
}

.dashboard h2 {
  text-align: center;
  margin-bottom: 20px;
}

.dashboard ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.dashboard li {
  background: #f1f5f9;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard button {
  background: #f44336;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.dashboard button:hover {
  background: #d32f2f;
}

.dashboard a {
  display: inline-block;
  margin-top: 15px;
  margin-right: 10px;
  color: #2196f3;
  text-decoration: none;
  font-weight: bold;
}

.dashboard a:hover {
  text-decoration: underline;
}
</style>