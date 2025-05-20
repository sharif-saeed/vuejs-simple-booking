import { defineStore } from 'pinia'

export const useAppointmentsStore = defineStore('appointments', {
  state: () => ({
    appointments: [],
    allReservedTimes: []
  }),
  actions: {
    loadAppointments(user) {
      this.appointments = JSON.parse(localStorage.getItem(`appointments_${user}`)) || []
      this.allReservedTimes = JSON.parse(localStorage.getItem('all_reserved_times')) || []
    },
    cancelAppointment(index) {
      const user = localStorage.getItem('currentUser') || ''
      const time = this.appointments.splice(index, 1)[0]
      this.allReservedTimes = this.allReservedTimes.filter(t => t !== time)
      localStorage.setItem(`appointments_${user}`, JSON.stringify(this.appointments))
      localStorage.setItem('all_reserved_times', JSON.stringify(this.allReservedTimes))
    },
    reserve(appointmentTime) {
      const user = localStorage.getItem('currentUser') || ''
      if (!this.allReservedTimes.includes(appointmentTime)) {
        this.appointments.push(appointmentTime)
        this.allReservedTimes.push(appointmentTime)
        localStorage.setItem(`appointments_${user}`, JSON.stringify(this.appointments))
        localStorage.setItem('all_reserved_times', JSON.stringify(this.allReservedTimes))
      }
    },
    isReserved(appointmentTime) {
      return this.allReservedTimes.includes(appointmentTime)
    }
  }
})
