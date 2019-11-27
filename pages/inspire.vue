<template>
  <div v-for="item in hotCity" :v-for="item.id">
    {{item.name}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData () {
    return axios.get('http://47.106.189.145/api/city.json')
    .then(res => {
      return {
        hotCity: res.data.data.hotCity
      }
    })
  }
}
</script>
