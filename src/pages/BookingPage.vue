<template>
  <div class="booking">
    <h2>Appointment Booking</h2>
    <ul>
      <li v-for="(time, index) in availableTimes" :key="index">
        {{ time }}
        <button @click="reserveTime(time)" :disabled="isReserved(time)">Reservation</button>
      </li>
    </ul>
    <router-link to="/dashboard">Dashboard Page</router-link>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useAppointmentsStore } from '../store/appointments';

  const appointmentStore = useAppointmentsStore()

  const availableTimes = ref([
  'Saturday 10:00 AM',
  'Saturday 3:00 PM',
  'Sunday 11:00 AM',
  'Monday 2:00 PM',
  'Tuesday 9:00 AM',
  ])

  onMounted(()=>{
    appointmentStore.loadAppointments(localStorage.getItem("currentUser") || "")
  })

  function reserveTime(time){
    appointmentStore.reserve(time)
  }

  function isReserved(time){
    return appointmentStore.isReserved(time)
  }

</script>

  

<style scoped>
.booking {
  max-width: 600px;
  margin: 60px auto;
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  color: #2e3c52;
}

.booking h2 {
  text-align: center;
  margin-bottom: 20px;
}

.booking ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.booking li {
  background: #e3f2fd;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.booking button {
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 0.3s;
}

.booking button:disabled {
  background: #bdbdbd;
  cursor: not-allowed;
}

.booking button:hover:enabled {
  background: #388e3c;
}

.booking a {
  display: inline-block;
  margin-top: 15px;
  color: #2196f3;
  text-decoration: none;
  font-weight: bold;
}

.booking a:hover {
  text-decoration: underline;
}
</style>
