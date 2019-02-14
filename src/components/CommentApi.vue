<template>
	<div>
	 <pre>{{ info }}</pre>
  </div>

</template>

<script>
import axios from 'axios'
export default{
	data(){
     return{
     	info: null
     }
	},
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => (this.info = response.data))
      .catch((err)=>{this.info = err})
	}
}

</script>
