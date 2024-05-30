console.log(Vue);

const estudiantes = [
  { nombre: "Willan", Apellido: "Diaz" },
  { nombre: "Alexander", Apellido: "Cordova" },
  { nombre: "Moris", Apellido: "Goku" },
];

const app = Vue.createApp({
  /* template: `
    <h1>Hola mundo desde Vue.JS</h1>
    <p>{{1+1}}</p>
    <p>{{[1,2,3,4,5]}}</p>
    <p>{{true? "Verdadero": "Falso"}}</p>

    ` */
  data() {
    return {
      mensaje: "Hola mundo Propiedad reactivas",
      valor: 777,
      lista: estudiantes,
    };
  },
  methods: {
    cambiarTexto() {
      this.mensaje = "Texto cambiado";
    },
    sumar() {
      this.valor += 1;
    },
    agregar(){
        const nuevo = {nombre:"Perico", Apellido:"Palotes"};
        this.lista.unshift(nuevo);
    }
  },
});

app.mount("#myApp");
