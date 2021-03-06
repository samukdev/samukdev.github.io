new Vue({
  el: '#app',
  data: {
    habilidades: {},
    idiomas: {},
    links: {},
    formacao: {},
    projetos: {},
    menuIsVisible: false,
    menuIsSticky: false,
    showModal: false,
    imagemModal: {}
  },
  methods: {
    buscarJson: function () {
      fetch("assets/json/habilidades.json")
        .then(r => r.json())
        .then(r => {
          this.habilidades = r.habilidades;
        });
      fetch("assets/json/idiomas.json")
        .then(r => r.json())
        .then(r => {
          this.idiomas = r.habilidades;
        });
      fetch("assets/json/links.json")
        .then(r => r.json())
        .then(r => {
          this.links = r;
        });
      fetch("assets/json/formacao.json")
        .then(r => r.json())
        .then(r => {
          this.formacao = r;
        });
      fetch("assets/json/projetos.json")
        .then(r => r.json())
        .then(r => {
          this.projetos = r;
        });
    },
    abrirModal: function (item) {
      this.imagemModal = item;
      this.showModal = true;
    }
  },
  created: function () {
    this.buscarJson();
  },
  mounted: function () {

    // BACKGROUND NAVBAR ON SCROLL
    var vm = this;
    window.addEventListener('scroll', function () {
      vm.menuIsVisible = false;
      vm.showModal = false;

      if (window.pageYOffset > 10) {
        vm.menuIsSticky = true;
      }
      else {
        vm.menuIsSticky = false;
      }

    });


  }

})