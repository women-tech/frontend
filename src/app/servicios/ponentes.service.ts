import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PonentesService {

  private ponentes:any[]=[
    {
        nombre: "Daniella Servín Cervantes",
        descripcion:"Soy estudiante de 7mo semestre de la carrera de Ingeniería Agroquímica en la Universidad Autónoma de Querétaro y he tenido la oportunidad de promocionar mi carrera en diferentes semanas culturales que ofrece mi facultad. Es una carrera muy demandante ya que en mi generación solo nos encontramos 2 mujeres y es importante el difundir nuestra área de oportunidades para que más mujeres se interesen por esta ramita de la ciencia. Considero que en mis vidas pasadas fui bruja o hierbera porque tengo una fascinación hacia la botánica y las plantas medicinales, practico yoga desde hace varios años, puedo ser una mujer de ciencia pero leo mi horóscopo y sé leer el tarot. Me encanta ver cómo se mueven las hojas de los árboles con el aire y soy amante de las flores.",
        imagen:"assets/feria/daniela.jpeg",
        carrera: "Agroquímica",
        fecha: "5 de noviembre",
        horario: "16:00pm"
    },
    {
      nombre: "Wendy Michelle Arellano Martínez",
      descripcion:"Experiencia:Integrante de la primera generación de “Mujeres líderes en STEAM”. Programa nacional de empoderamiento a estudiantes preuniversitarias para estudiar carreras dentro de las áreas de Ciencia, Tecnología, Ingeniería y Matemáticas.Segundo lugar del Reto Emprendedor 2016 en el Tecnológico de Monterrey, Campus Puebla. Integrante de la primera etapa de la elaboración de un medicamento con Roseoflavina. Colaboración con Universidades de Alemania y el Tecnológico de Monterrey, Campus Puebla. Intereses profesionales: Me gustaría enfocarme en la Biotecnología Roja, crear algún medicamento nuevo o vacuna. Asimismo me encantaría trabajar en alguna empresa importante nacional o extranjera de Biotecnología como IBTech o Johnson & Johnson. Intereses personales:Me gusta hacer ejercicio (algo de pesas), escuchar música, estudiar algunos documentos cientificos y pasar el tiempo con mi familia y amigos.",
      carrera: "Biotecnología",
      fecha: "2 de noviembre",
      horario: "19:00pm"
  },
    
    

  ]
  constructor() { }
  getPonentes(){
    return this.ponentes;
  }
}
