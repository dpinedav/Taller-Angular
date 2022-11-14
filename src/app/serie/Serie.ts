export class Serie {
  idSerie: number;
  nombre: String;
  canal: String;
  temporadas: number;
  descripcion: String;
  link: String;
  imagen: String;

public constructor(idSerie: number, nombre: String,canal: String,temporadas: number,descripcion: String,link: String,imagen: String)
{
  this.idSerie = idSerie;
  this.nombre = nombre;
  this.canal = canal;
  this.temporadas = temporadas;
  this.descripcion = descripcion;
  this.link = link;
  this.imagen = imagen;
}
}
