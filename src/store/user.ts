import { defineStore} from 'pinia';

export  const userStore = defineStore('userStore', () => {
  const firstName = ref('w')
  const lastName = ref('kx')

  function setFirstName(params:any){
    firstName.value = params
  }
  function setLastName(params:any){
    lastName.value = params
  }

  const fullName = computed(()=>{
    return firstName.value + lastName.value
  })

  return {firstName, lastName, setFirstName, setLastName, fullName}
})