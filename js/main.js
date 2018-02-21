
Vue.component('caja-contribuyente',{
  template:'#caja',
})




var urlAPI = 'https://randomuser.me/api/?results=5&inc=id,name,email,picture'
new Vue({
    el: '#app',
    data: {
      contribuyentes:{},
      mostrar:false,
    },
    created: function(){
      this.consultarContribuyente();
    },
    methods: {
      consultarContribuyente: function(){
       // GET /someUrl
       this.$http.get(urlAPI)
        .then(function(respuesta) {
            // success
          this.contribuyentes = respuesta.data.results;
        }, 
        response => {
          // error         
        }); 
    },
      
    },
    /* locales a la instancia */
    components:{
      'lista-contribuyentes': {
        template: '#contribuyente-template',
        props:['']
      },
      'caja-contribuyente': {
        template: '#caja-contribuyente-template',
        props:['contribuyente']
      }
    },

  })