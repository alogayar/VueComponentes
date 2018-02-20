
Vue.component('caja-contribuyente',{
  template:'#caja',
})




var urlAPI = 'https://randomuser.me/api/?results=12'
new Vue({
    el: '#app',
    data: {
      contribuyentes:{},
    },
    created: function(){
      this.consultarContribuyente();
    },
    methods: {
      consultarContribuyente: function(){
       // GET /someUrl
       this.$http.get(urlAPI2)
        .then(function(respuesta) {
            // success
          this.contribuyentes = respuesta.data.results;
        }, 
        response => {
          // error
          alert("error");
        }); 
    }
    },
    /* locales a la instancia */
    components:{
      'contribuyente': {
        template: '#contribuyente-template',
        props:['']
      }
    },

  })