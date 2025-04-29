export interface UniversitiesResponse {
  universities: UniversityResource[];
}

export interface UniversityResource {
  domains: string[];             // Lista de dominios asociados a la universidad
  alpha_two_code: string;        // Código del país (en este caso CR para Costa Rica)
  name: string;                  // Nombre de la universidad
  web_pages: string[];           // Lista de páginas web relacionadas con la universidad
  country: string;               // País en el que se encuentra la universidad
}

