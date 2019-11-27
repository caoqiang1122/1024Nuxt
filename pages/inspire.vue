<template>
  <div>
    <div v-for="item in hotCity" :key="item.id">
      {{item.name}}
    </div>
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
