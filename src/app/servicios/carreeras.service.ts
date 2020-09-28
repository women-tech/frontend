import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarreerasService {
  private carreras:any[]=[
    {
      nombre:"Ingeniero Civil",
      descripcion: "La ingeniería civil es la disciplina de la ingeniería que emplea conocimientos de cálculo, mecánica, hidráulica y física para encargarse del diseño, construcción y mantenimiento de las infraestructuras emplazadas en el entorno, incluyendo carreteras, ferrocarriles, puentes, canales, presas, puertos, aeropuertos, diques y otras construcciones relacionadas.",
      perfil:"Haber concluido el bachillerato en el área de las ciencias exactas o ciencias físico-matemáticas para que cuente con una sólida base en estas ciencias.",
      campo: " Empresas constructoras e inmobiliaria, despachos de diseño estructural para proyectos de edificación, vías de comunicación y transporte, empresas que proyectan obras hidráulicas y de tratamiento de agua, así como empresas que realizan estudios de impacto ambiental, gerencias de proyectos y empresas de supervisión de obras de infraestructura pública y privada, sector gobierno y desarrollo de políticas públicas para el desarrollo urbano y social, etc.",
      imagen: "assets/feria/Civil.jpg" 
    },

    {
      nombre:"Ingeniero en Innovación y Desarrollo",
      descripcion: "El Ingeniero en Innovación y Desarrollo es un profesionista que identifica oportunidades de innovación sistemáticamente y crea soluciones de base tecnológica integrales, innovadoras y sostenibles en campos emergentes de la ingeniería. Domina metodologías de innovación sistémicas y de vanguardia, y con un enfoque interdisciplinario, genera consistentemente nuevas formas de crear valor para las organizaciones y ecosistemas en los que participa. Tiene la capacidad de conducir procesos de transferencia tecnológica, y de gestionar portafolios, programas y proyectos de innovación tecnológica de acuerdo con la estrategia organizacional.",
      perfil:" Conocimientos sólidos de física y matemáticas.",
      campo: " Empresas con enfoque en la innovación, creación y desarrollo de nuevos productos y servicios de base tecnológica, diseño de nuevos modelos de negocio para empresas de base tecnológica, etc. ",
      imagen: "assets/feria/iis.jpg"
    },

    {
      nombre:"Ingeniero Mecánico",
      descripcion: "El Ingeniero Mecánico tiene como objetivo el diseño e innovación de sistemas electromecánicos, con habilidades para seleccionar los materiales adecuados para la fabricación de productos; para seleccionar, diseñar e integrar  procesos de manufactura convencionales y avanzados; también para realizar esquemas de mantenimiento, llevar a cabo análisis de fallas, integrar sistemas de transformación de energía mecánica y para integrar de manera innovadora la manufactura y la administración de proyectos a procesos productivos. Todo esto tomando como referencia el desarrollo sostenible.",
      perfil:" Haber concluido el bachillerato en el área de las ciencias exactas o ciencias físico-matemáticas para que cuente con una sólida base en estas ciencias.",
      campo: " Giro automotriz, aeronáutico, metal mecánico, energético, de refrigeración y aire acondicionado, electrodomésticos, entre otros, centros de investigación y desarrollo tecnológico, centros de diseño e ingeniería, etc ",
      imagen: "assets/feria/Mecanica.png" 
    },

    // {
    //   nombre:"Ingeniero en Mecatrónica",
    //   descripcion: "El ingeniero Mecatrónico mediante la aplicación de conocimientos físico-matemáticos y técnicas avanzadas de ingeniería, contribuye al desarrollo tecnológico, es un experto en el diseño y creación de procesos y productos en una amplia gama de áreas, incluyendo robótica, líneas de producción, sistemas automáticos y dispositivos médicos, automotrices y aeroespaciales, entre otros.",
    //   perfil:"Conocimientos sólidos de física y matemáticas, manejo de la computación y del idioma inglés. ",
    //   campo: " La industria automotriz, manufacturera, petrolera, de generación de energía eléctrica, minera, siderúrgica, agroindustrial, de alimentación y salud, así como los servicios de transporte. ",
    //   imagen: "assets/feria/Mecanica.png" 
    // },

    {
      nombre:"Ingeniero en Electrónica",
      descripcion: "El ingeniero Electrónico es el profesional capaz de crear, diseñar y generar tecnología; así como de, innovar, planear y poner en operación sistemas eléctricos y electrónicos; en el desarrollo de tecnologías contribuye a aplicar estas innovaciones en más productos, con el objetivo de mejorar la calidad de vida de las personas e incrementar la competitividad de organizaciones y empresas. Tienen la capacidad de generar tecnología mediante el uso de sensores y dispositivos inteligentes que se utilizan en áreas como las telecomunicaciones, los sistemas autónomos, la transformación de la energía eléctrica, los robots, los automóviles y los accesorios médicos, con el objetivo de elevar la productividad y la competitividad de las empresas y el bienestar de la sociedad.",
      perfil:"Conocimientos sólidos de matemáticas, física, química, computación e inglés.",
      campo: " Empresas públicas y privadas del sector eléctrico, electrónico, de telecomunicaciones, energético,  metal-mecánica, siderúrgica, de la transformación y petrolera. Desarrollo de dispositivos electrónicos inteligentes. Diseño de sistemas de telecomunicaciones. Consultoría en áreas de electrónica, telecomunicaciones y sistemas de energía, Centros de investigación en las áreas de electrónica, telecomunicaciones y electrónica de potencia. ",
      imagen: "assets/feria/electronica.jpg" 
    },

    // {
    //   nombre:"Ingeniero Industrial y de Sistemas",
    //   descripcion: "El ingeniero Industrial y de Sistemas tiene un enfoque integral para gestionar proyectos y procesos de cambio que incrementan la calidad y productividad, utilizando la modelación matemática, la analítica de datos y las tecnologías de información para tomar las mejores decisiones. Diseña el proceso de transformación para una empresa, a partir del de un producto o servicio, aplicando las técnicas y estrategias de ingeniería industrial, con la finalidad optimizar el uso de recursos. Así como también los procesos de administración eficientes, a través del uso adecuado de los recursos, para mejorar la entrega, el proceso y el servicio de las organizaciones. Desarrolla estrategias de negocios que respondan a las áreas de oportunidad de una organización, a través del uso de técnicas de estudio de mercado, planeación, control de la producción y administración de proyectos de inversión, con la finalidad de mejorar la productividad y la competitividad de la organización con un enfoque de sustentabilidad.",
    //   perfil:"Las ciencias básicas y tecnologías de cómputo análisis y síntesis de información, Criterio y razonamiento lógico para la solución de problemas",
    //   campo: " Sector público: Participa automatizando procesos administrativos en entidades gubernamentales en todos sus niveles así como desarrollando software especializado para satisfacer los requerimientos específicos de dependencias gubernamentales.Sector privado: Se desempeñan como diseñadores y desarrolladores líderes y administradores de proyectos computacionales en empresas de transformación servicios y comerciales nacionales e internacionales.",
    //   imagen: "imagen" 
    // },

    // {
    //   nombre:"Ingeniero Biomédico",
    //   descripcion: "La Ingeniería Biomédica es una disciplina de reciente creación. Su definición más aceptada podría ser la aplicación de los principios de la ingeniería a las ciencias de la vida. Combina los criterios de diseño en ingeniería y las herramientas de análisis provenientes de las matemáticas, la física y la química a la resolución de problemas en medicina, biología, biotecnología, farmacia, etc.",
    //   perfil:" Ciencias básicas, biológicas y exactas, informática básica, temas de actualidad en ciencia y tecnología bases de metodología de la investigación, inglés básico.",
    //   campo: "Al egresar, ten la certeza de emplearte en una empresa nacional o transnacional en la que puedas diseñar equipo para hospitales y atención de pacientes o, crea tu propio negocio para comercializar productos biomédicos.",
    //   imagen: "imagen" 
    // },

    {
      nombre:"Ingeniero en Sistemas Digitales y Robótica ",
      descripcion: "El programa de Ingeniero en Robótica y Sistemas Digitales tiene como objetivo formar  profesionistas con sólidos conocimientos en las áreas de diseño digital, ingeniería computacional y electrónica, con énfasis en su aplicación a la robótica. Esta preparación le permite al egresado generar soluciones tecnológicas al servicio de las personas y las organizaciones a través de dispositivos electrónicos y robóticos así como sus correspondientes sistemas de software embebido.",
      perfil:" Conocimientos sólidos de física y matemáticas, manejo de la computación y del idioma inglés. ",
      campo: "Diseño y construcción de sistemas digitales. Desarrollo de componentes de inteligencia de robots.Desarrollo de sistemas embebidos para uso específico.Creación de interfaces para la interacción inteligente entre dispositivos digitales.Centros de investigación y desarrollo de nuevas tecnologías.Administración y/o consultoría en sistemas digitales.",
      imagen: "assets/feria/ISD.jpg" 
    },

    // {
    //   nombre:"Ingeniero en Transformación Digital de Negocios ",
    //   descripcion: "El Ingeniero en Transformación Digital en Negocios tiene como objetivo formar profesionistas que entienden de las necesidades actuales de los negocios y organizaciones, y de las tendencias tecnológicas que pueden ayudar a potencializar las oportunidades futuras de estos.  Es el que evalúa y diseña la arquitectura de información, la digitalización de los procesos y las propuestas de inversión en soluciones tecnológicas.  Es especialista en la administración del cambio en las organizaciones por la incorporación de tecnologías de vanguardia y de  la aplicación de la inteligencia de negocios y la analítica de datos para la generación de valor en el negocio.  Su labor se relaciona con el entendimiento de la estrategia de negocios, el alcance de las tecnologías y la complejidad de las interacciones humanas.",
    //   perfil:" Personas talentosas, entusiastas, comprometidas con el desarrollo de su entorno y con el bienestar de la sociedad; personas que tengan el potencial para concluir exitosamente su programa de licenciatura y convertirse en líderes con espíritu emprendedor, sentido humano y competitivos internacionalmente. ",
    //   campo: "Integración de soluciones de tecnologías de información en los procesos de negocio.Desarrollo de estrategias de manejo de datos e información en una organización.Generación de estrategias de incorporación de tecnologías digitales para la creación, captura y entrega de valor en los negocios.Administración y/o consultoría en tecnología y seguridad de información.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },
    // {
    //   nombre:"Licenciado en Biociencias ",
    //   descripcion: "El Licenciado en Biociencias es un profesionista que tiene como objetivo la creación de propuestas innovadoras para la creación de nuevas alternativas para el cuidado de la salud, colabora efectivamente en equipos interdisciplinarios en soluciones que impactan a la sociedad, combinando evidencia científica en ciencias biomédicas así como tecnología de vanguardia. Asimismo, capaces de gestionar recursos de manera ética y profesional de acuerdo a los principios básicos de la salud y de las normas oficiales que rigen el Sistema de Salud Nacional.",
    //   perfil:"  Haber concluido el bachillerato en el área de salud para que cuente con una base sólida. ",
    //   campo: " Ciencias biomédicas, salud pública, medicina traslacional.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },
    // {
    //   nombre:"Licenciado en Psicología Clínica y de la Salud ",
    //   descripcion: "El Licenciado en Psicología Clínica y de la Salud es un profesionista que tienen como objetivo aplicar la psicología para promover la salud mental y su impacto en el bienestar integral. Realiza acciones de prevención de enfermedades y trastornos mentales que afectan el comportamiento del individuo y los grupos. Asimismo, que participan en el diseño y gestión de programas de salud biopsicosocial en equipos multidisciplinarios e interviene proporcionando tratamientos a individuos, grupos y colectivos sociales.",
    //   perfil:"  Haber concluido el bachillerato en el área de salud para que cuente con una base sólida. ",
    //   campo: "Consultorios, clínicas de salud mental, hospitales generales y de especialidad, asociaciones de pacientes, instituciones académicas, comunidad, equipos de investigación, entidades gubernamentales de salud y de seguridad social.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Licenciado en Nutrición y Bienestar Integral ",
    //   descripcion: "Un Licenciado en Nutrición  aplica la ciencia de los alimentos para brindar atención nutricional a individuos sanos o enfermos, modificando hábitos de alimentación y estilo de vida, para mejorar la calidad de vida y la salud. Asimismo, son líderes en el campo de la nutrición contando con competencias profesionales  en el área dirigidas a la promoción y mejora de la salud, a través del bienestar físico, psicológico y social del individuo.",
    //   perfil:"  Haber concluido el bachillerato en el área de salud para que cuente con una base sólida.",
    //   campo: "Consultorio privado, clínicas, hospitales e instituciones del sector salud, consultoría en la industria farmacéutica y de alimentos, empresas y/o instituciones gubernamentales dedicadas al servicio de alimentos y/o programas preventivos.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Médico Cirujano ",
    //   descripcion: "Un Médico Cirujano es un profesionista que tiene como objetivo ser  líderes e innovadores en el campo de la salud, sensibles a las necesidades de la sociedad, que resuelven problemas de salud con un alto sentido humanitario y que presta atención a los hábitos, valores y creencias de las personas y sus familias; que trabajan como parte de un equipo de salud con profesionalismo y ética de acuerdo a los principios básicos de la medicina y a las normas oficiales de regulación de los Sistemas de Salud.",
    //   perfil:" Haber concluido el bachillerato en el área de salud para que cuente con una base sólida.",
    //   campo: "Diferentes niveles de atención clínica tanto en pública como privada, consultorio privado, ámbito de la investigación en el área de salud.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Médico Cirujano Odontólogo ",
    //   descripcion: "Un Médico Cirujano Odontólogo es un profesionista que posee un amplio y sólido conocimiento de  las ciencias de la salud, con habilidades y destrezas para diagnosticar, prevenir y tratar con un enfoque interdisciplinario,  las enfermedades y padecimientos bucodentales, mediante el uso de técnicas y procedimientos innovadores, con el fin de contribuir a preservar el bienestar integral del ser humano.",
    //   perfil:"Haber concluido el bachillerato en el área de salud para que cuente con una base sólida.",
    //   campo: "Consultorio privado, instituciones de salud públicas y privadas, ámbito de la investigación en el área de salud bucal.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Licenciado en Matemáticas",
    //   descripcion: "El licenciado en Matemáticas es un profesionista que cuenta con habilidades para resolver problemas en las diferentes áreas de esta ciencia como lo son: Aritmética, Álgebra, Probabilidad, Geometría, entre otras más, todo esto a través del desarrollo de sus capacidades numéricas así como habilidades en el mundo de la investigación.",
    //   perfil:" Los aspirantes a cursar la Licenciatura en Matemáticas deben caracterizarse por tener interés en el estudio de las matemáticas, conocimientos básicos de la matemática pre-universitaria (Aritmética, Álgebra elemental, Trigonometría), contar con habilidades para estudiar, analizar y sintetizar y con una actitud positiva para afrontar y resolver problemas.",
    //   campo: "Investigación básica, educación matemática, y apoyo en los procesos tecnológicos, productivos e incluso del ámbito social, además de poseer capacidad para participar en actividades interdisciplinarias.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Licenciado en Física",
    //   descripcion: "Los físicos explican los fenómenos mediante teorías basadas en modelos matemáticos y adquieren conocimientos en: Mecánica Clásica y Relativista, Termodinámica, Electromagnetismo, Física Estadística y Cuántica que les brindan una imagen general de las leyes de la naturaleza, y les permiten desarrollar aplicaciones en investigación, docencia, difusión y divulgación de la Física, así como en el ejercicio libre de la profesión. Resultado de la aplicación de los conocimientos de la Física que la humanidad ha acumulado es el desarrollo tecnológico. Desde la máquina de vapor hasta el automóvil, el avión, la televisión, la computadora, los equipos médicos; todos ellos existen gracias a los conocimientos que poseemos de esta ciencia",
    //   perfil:"Se deberá tener curiosidad por los fenómenos naturales y los desarrollos tecnológicos. Además, para desempeñarse exitosamente en los cursos de la licenciatura, se tendrá que contar con habilidad en matemáticas y con conocimientos del idioma inglés.",
    //   campo: "Educación, industria electrónica, nuclear, óptica, eléctrica, metalúrgica, petrolera, y en la ingeniería de materiales. También en los sectores de salud, el financiero, y en empresas y oficinas gubernamentales. Igualmente investigación en ciencia básica, así como en donde se han desarrollado múltiples aplicaciones de la Física, es notable la presencia de estos profesionales.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Licenciado en Tecnología",
    //   descripcion: "Profesionales encauzados y preparados para solucionar problemas que requieran adaptación o innovación tecnológica, quienes, durante todos sus estudios están en contacto con los desarrollos científicos y tecnológicos más recientes mediante estancias obligatorias en laboratorios especializados, donde se lleva a cabo tanto investigación básica como aplicada, y en esta última generalmente hay una interacción con proyectos ya sea académicos, sociales, o industriales, los cuales atienden las necesidades de nuestro país e impulsan el desarrollo sustentable de la tecnología.",
    //   perfil:"La carrera es recomendable para aquellos jóvenes con espíritu creativo e innovador; que tengan un gran y auténtico interés por la ciencia y la tecnología, la solución de problemas prácticos y la identificación de áreas de oportunidad; y que cuenten con capacidad de abstracción, observación y análisis.",
    //   campo: "Puede incorporarse al mercado de trabajo y para colaborar en el ámbito productivo o social de la innovación, desarrollando investigación científica de aplicación industrial; productos y servicios novedosos, así como en la mejora de procesos productivos trascendentes.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Licenciado Químico Farmacéutico Biólogo",
    //   descripcion: "Capaz de evaluar productos farmacéuticos e insumos para la salud y promover su uso racional evaluado a lo largo de todas las etapas de producción, ejerciendo acciones que garanticen seguridad, calidad y eficacia para los consumidores. También podrás planear los servicios farmacéuticos en instituciones hospitalarias y farmacias comunitarias para desarrollar soluciones integradas a la industria químico-farmacéutica y a los servicios de salud, contribuyendo con el bienestar de la población, con la atención sanitaria de calidad, y sirviendo de manera responsable a la sociedad.",
    //   perfil:"Mejorar la calidad de vida de los pacientes que reciben tratamientos farmacológicos. Curiosidad por conocer cómo se desarrollan la industria y la investigación farmacéutica en nuestro país. Convicción de trabajar por el bien común y el alcance del éxito como miembro del equipo de salud. Visión para cosechar logros a través del aprendizaje.",
    //   campo: " Industrias farmacoquímica y cosmética, industria Bio-farmacéutica, hospitales, farmacias, agencias de regulación sanitaria, secretarías de salud, instituciones educativas, administradoras de servicios de salud, centros de investigación.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Licenciado en Biología",
    //   descripcion: "Identificarás y analizarás procesos biológicos mediante herramientas estadísticas y de diseño experimental, aplicando teorías y conceptos de las ciencias biológicas y de biodiversidad, para el aprovechamiento y la conservación de los recursos bióticos en el ámbito gubernamental, privado o institucional, con un alto sentido de respeto por los seres vivos, el ambiente donde viven y la sociedad con la que interactúan.",
    //   perfil:"Respeto por los organismos y el medio ambiente en el que habitan. Gusto por la promoción del uso adecuado y conservación de la biodiversidad. Habilidad para entender los conceptos y teorías biológicas. Convicción de trabajar por el bien común y el alcance de metas académicas. Gusto por la investigación científica en el área de la biología.",
    //   campo: " Industrias farmacoquímica y cosmética, industria Bio-farmacéutica, hospitales, farmacias, agencias de regulación sanitaria, secretarías de salud, instituciones educativas, administradoras de servicios de salud, centros de investigación.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Ingeniero Agroquímico",
    //   descripcion: "Formar personas profesionales en la ingeniería agroquímica, eficientes y competitivos, mediante un sistema de calidad basado en valores éticos, conocimientos científicos y tecnológicos, con capacidad para tomar decisiones y resolver problemas involucrados en la producción de bienes y servicios para el sector agrícola.",
    //   perfil:"Poseer habilidad verbal y cuantitativa. Contar con conocimientos básicos en las disciplinas de: español, matemáticas, ciencias naturales, ciencias sociales, matemáticas para cálculo, matemáticas para estadística, física, química y biología. Poseer habilidades intelectuales, emocionales, responsabilidad, compromiso y actividades vocacionales.",
    //   campo: " Laboratorio de análisis de fertilidad de suelos y calidad de agua , invernaderos de producción intensiva, industria agroquímica, industria vinícola, industrias alimentarias, asesoría técnica, dependencias gubernamentales, investigación.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Ingeniero en Dirección de Negocioso",
    //   descripcion: "El Ingeniero en Dirección de Negocios Anáhuac cuenta con conocimientos en finanzas, administración, mercadotecnia, matemáticas e ingeniería, que aplica en la toma de decisiones estratégicas de la empresa a fin de lograr un desarrollo sustentable, que transforme positivamente a la sociedad y la cultura. Promueve la mejora continua de los procesos de producción y de servicios de las organizaciones, buscando satisfacer las necesidades de la comunidad, bajo principios de calidad, competitividad y responsabilidad social.",
    //   perfil:"Formula y resuelve problemas matemáticos, aplicando diferentes enfoques. Soluciona problemas a través de métodos numéricos, gráficos, analíticos o variacionales. Interpreta tablas, gráficas, mapas, diagramas y textos con símbolos matemáticos y científicos. Establece la relación entre las dimensiones políticas, económicas, culturales y geográficas de un acontecimiento. Utiliza las tecnologías de la información y comunicación para investigar, resolver problemas, producir materiales y transmitir información. Desarrolla habilidades de solución de problemas simples en áreas específicas de conocimiento.",
    //   campo: "Empresas nacionales y transnacionales en áreas de: dirección general, planeación estratégica, desarrollo de nuevos mercados, desarrollo de nuevos productos, operaciones, comercialización, finanzas, tecnologías de la información, comercialización estratégica de productos y servicios. Crear y liderar micro, pequeñas y medianas empresas, para tomar decisiones fundamentales para el crecimiento de la misma, planteando la estrategia financiera, operativa y de expansión hacia nuevos mercados. Como analista de datos, donde podrás recoger la información y necesidades de clientes para poder hacer un mejor marketing de productos o servicios utilizando herramientas digitales.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Ingeniero en Recursos Renovables",
    //   descripcion: "Ingenieros con alto nivel científico, tecnológico y ético en el manejo sustentable de los recursos naturales renovables, suelo, agua, flora, y fauna, para la producción de bienes y servicios en beneficio de la sociedad.",
    //   perfil:"Poseer conocimientos básicos suficientes en las áreas de física, matemáticas, biología, botánica y químicas. Poseer las habilidades y aptitudes mínimas necesarias para comprender los principios básicos que sustentan los diferentes procesos relacionados con los Recursos Naturales Renovables. Ser dinámico y plural en su desempeño académico. Participar en el trabajo de campo, y tener gran disposición para el estudio. Poseer actitud crítica, reflexiva, cuestionadora y creativa. Tener capacidad para privilegiar el aprendizaje de conceptos, valores, principios y criterios para aplicarse en realidades desconocidas. Poseer actitud propositiva y comprometida para proponer soluciones a problemas de su entorno a partir de conocimientos adquiridos. Poseer hábitos de estudio, lectura y búsqueda de información. Tener una cultura universal básica de acuerdo con sus intereses y con la filosofía de la institución.",
    //   campo: "Diagnóstico de los recursos naturales renovables; planeación del uso de los recursos naturales renovables; aprovechamiento de los recursos naturales renovables; conservación de los recursos naturales; legislación ambiental; indicadores socioeconómicos sobre los recursos naturales; deterioro de los recursos naturales, e impacto ambiental. Podrá desempeñarse profesionalmente en; ordenamiento ecológico territorial; evaluación del impacto ambiental; áreas naturales protegidas; servicios ecoturísticos y cinegéticos; delimitación de zonas de riesgo; protección ecológica; ecosistemas deteriorados y la recuperación de especies amenazadas y en peligro de extinción; flora y fauna silvestres; sistemas de información ambiental; modelos de simulación, paquetes computacionales y cartografía sobre los recursos naturales; recursos acuáticos; cuencas hidrográficas, y en el tratamiento y reuso de residuos sólidos.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Ingeniero Biónico",
    //   descripcion: "Diseñar desarrollar y producir dispositivos artificiales que posean un comportamiento y desempeño morfológico y/o funcional semejante al de órganos o sistemas biológicos. La Ingeniería Biónica se concibe como el conjunto de conocimientos interdisciplinarios entre la electrónica y la biología cuyo propósito es la creación de sistemas artificiales para reproducir las características y la estructura de organismos vivos.",
    //   perfil:"Bases académicas sólidas en las Ciencias Físico-Matemáticas. Bases académicas de Lógica-Matemáticas. Habilidades básicas en el manejo de equipo de cómputo. Realizar Lectura y Comprensión de Textos en su idioma y en inglés. Desarrollar Aprendizaje Autónomo. Desarrollar Trabajo en equipo",
    //   campo: "Sólida formación interdisciplinaria que le permita el estudio de los organismos vivos en su estructura función alteraciones y la interrelación con el medio para crear modelos inspirados en la biología y emplearlos en la solución de problemas de su entorno. En el Sector Salud en el área Biomédica Bio-química Biotecnológica en Institutos de investigación en la SEMARNAT Secretaría de Marina entre otras.",
    //   imagen: "assets/feria/ISD.jpg" 
    // },

    // {
    //   nombre:"Ingeniero Robótico Industrial",
    //   descripcion: "Diseñar fabricar y mantener sistemas automatizados y equipos de producción proyectar poner en marcha y mantener en operación plantas industriales Investigar e implantar nuevas tecnologías Crear y dirigir micro pequeñas y medianas empresas del área de automatización y de la manufactura.",
    //   perfil:"Bases académicas sólidas en las Ciencias Físico-Matemáticas. Bases académicas de Lógica-Matemáticas. Habilidades básicas en el manejo de equipo de cómputo. Realizar Lectura y Comprensión de Textos en su idioma y en inglés. Desarrollar Aprendizaje Autónomo. Desarrollar Trabajo en equipo",
    //   campo: "Al concluir su carrera el egresado será capaz de fundamentar y aplicar los conocimientos científicos y tecnológicos así como las habilidades actitudes y valores necesarios para el ejercicio de su profesión en beneficio de la sociedad y desarrollo de la nación. Diseñar, mantener y construir dispositivos equipos y máquinas de la ingeniería en robótica industrial. Proyectar diseñar y poner en operación plantas y sistemas que integren equipos de la ingeniería en robótica industrial. Investigar adaptar y construir nuevas tecnologías y conocimiento. Planear, organizar, asesorar y dirigir empresas de servicios fabricación y mantenimiento en ingeniería en robótica industrial. Aplicar las normas nacionales internacionales e industriales técnicas jurídicas éticas ecológicas de higiene y seguridad inherentes a la ingeniería en robótica industrial. Capacitar, instruir y entrenar en las ramas de la ingeniería en robótica industrial a diverso personal. Comprender aplicar y desarrollar los principios científicos técnicos y socioeconómicos básicos de la ingeniería en robótica industrial. Manejar los principios y aplicaciones de otras disciplinas relacionadas con la ingeniería en robótica industrial. Obtener y procesar información de manera oral y escrita para los proyectos e investigaciones. Aplicar el pensamiento analítico creativo e innovador para el análisis de problemas y la toma de decisiones. Utilizar los procesos métodos instrumentos y herramientas propios de la ingeniería en robótica industrial",
    //   imagen: "assets/feria/ISD.jpg" 
    // }


    

    
  ]
  constructor() { }

  getCarreras(){
    return this.carreras;
  }
}
