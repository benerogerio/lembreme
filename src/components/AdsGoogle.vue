<template>
	<div></div>
</template>

<script>

export default  {
	data(){
		return{
			banner: null
		}
	},
	mounted(){
		if(window.cordova) // se cordova definido dispara banner
			return this.fireBanner()
	},
	methods : {
		async fireBanner() {
			this.banner = new window.admob.BannerAd({
				adUnitId: 'ca-app-pub-6515701583756658/6475121818',
			})

			this.banner.on('impression', async () => {
				// await this.banner.hide()
			})

			await this.banner.show()
		}
	}
}
</script>
