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
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    cambiarTexto() {
      this.mensaje = "Texto cambiado";
    },
    sumar() {
      this.valor += 1;
    },
    agregar() {
      console.log(this.nombre);
      console.log(this.apellido);
      const nuevo = { nombre: this.nombre, Apellido: this.apellido };
      this.lista.unshift(nuevo);
      this.resetear();
    },
    resetear(){
      this.nombre = null; 
      this.apellido = null;
    },
    agregar2({charCode}){
      console.log(charCode)
      if(charCode !== 13) return;
      if(this.nombre !== null && this.apellido!==null){
        this.agregar();
      }
      
    }
  },
});

app.mount("#myApp");
