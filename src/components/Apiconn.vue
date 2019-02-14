<template>
	<div>
		<div v-for="currency in info" class="currency" >
    {{ currency.description }}:
    <span class="lighten">
      <span v-html="currency.symbol"></span><pre>{{ currency }}</pre>
      <span v-html="raw"></span>
    </span>
  </div>
	</div>
</template>

<script>
import axios from 'axios'
export default{
	data(){
     return{
     	info: null,
     	raw: '<button>ABC</button>'
     }
	},
	mounted(){
		axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => (this.info = response.data))
      .catch((err)=>{this.info = err})
	}




}

</script>
