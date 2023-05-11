/* tslint:disable */
/* eslint-disable */
import { RoleUtilisateurDto } from './role-utilisateur-dto';
export interface UtilisateurDto {
  email?: string;
  id?: string;
  nom?: string;
  password?: string;
  prenom?: string;
  role?: RoleUtilisateurDto;
}
