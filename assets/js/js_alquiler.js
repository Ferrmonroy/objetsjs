const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "assets/img/alquiler1.avif",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "assets/img/alquiler2.avif",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "assets/img/alquiler3.avif",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Mansión tenebrosa para valientes",
    src: "assets/img/alquiler4.jpg",
    descripcion:
      "Esta antigua mansión se encuentra en las afueras de Atlanta. Apto para viajes urbanos y turismo misterio",
    ubicacion: "387 Louise Street, Atlanta, AT 678943",
    habitaciones: 6,
    costo: 5600,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Hermosa casa en sector de los suburbios",
    src: "assets/img/alquiler5.jpeg",
    descripcion:
      "Cómoda casa con elegantes terminaciones y lujosas instalaciones",
    ubicacion: "865 Maxwell Street, New Orlans, NO 987462",
    habitaciones: 4,
    costo: 2400,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Elegante casa en orillas del río",
    src: "assets/img/alquiler6.png",
    descripcion:
      "Espaciosa y lujosa casa en orillas del río más importante de la ciudad",
    ubicacion: "424 Martin Louis Street, Seatle, ST 984462",
    habitaciones: 4,
    costo: 3400,
    smoke: true,
    pets: true,
  },
];

const propiedadesAlquilerContainer = document.getElementById(
  "propiedadesAlquilerContainer"
);

propiedades_alquiler.forEach((propiedad) => {
  const propiedadHTML = `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${
                  propiedad.src
                }" class="card-img-top" alt="Imagen del departamento">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${
                      propiedad.ubicacion
                    }</p>
                    <p><i class="fas fa-bed"></i> ${
                      propiedad.habitaciones
                    } Habitaciones</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    ${
                      propiedad.smoke
                        ? '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
                        : '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                    }
                    ${
                      propiedad.pets
                        ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                        : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'
                    }
                </div>
            </div>
        </div>
    `;
  propiedadesAlquilerContainer.insertAdjacentHTML("beforeend", propiedadHTML);
});
