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
		axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => (this.info = response.data))
      .catch((err)=>{this.info = err})
	}




}

</script>
