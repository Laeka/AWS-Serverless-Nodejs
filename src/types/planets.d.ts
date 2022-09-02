export interface Planets {
  diametro: "10465",
	nombre: string,
	residentes: Residents[],
	periodo_orbita: string,
	lider: string,
	url: string,
	poblacion: string,
	peliculas: Films[],
	superficie_agua: string,
	editado: string,
	periodo_rotacion: string,
	gravedad: string,
	creado: string,
	id: string,
	terreno:  string
}

export type Residents = any;
export type Films = any;

export interface PostPlanetBody{
  nombre: string,
  lider: string
}
