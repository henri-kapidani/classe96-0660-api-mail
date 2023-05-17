// chiedere 10 mail al server e stamparle in pagina

const app = Vue.createApp({
	data() {
		return {
			arrMails: [],
			numMails: 10,
			loading: true,
		}
	},
	methods: {
		getMails() {
			const mailCount = this.numMails; // IMPORTANTE DA FARE
			this.loading = true;
			this.arrMails = [];
			for (let i = 0; i < this.numMails; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
					.then(serverResponse => {
						this.arrMails.push(serverResponse.data.response);
						// if (this.arrMails.length == this.numMails) {
						if (this.arrMails.length == mailCount) {
							this.loading = false;
						}
					});
			}
		}
	},
	created() {
		this.getMails();
	},
});

app.mount('#app');
