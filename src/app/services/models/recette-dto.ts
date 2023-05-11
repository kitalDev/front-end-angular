/* tslint:disable */
/* eslint-disable */
import { AdherentDto } from './adherent-dto';
import { TypeRecetteDto } from './type-recette-dto';
import { VersementDto } from './versement-dto';
export interface RecetteDto {
  adherent?: AdherentDto;
  id?: string;
  montant?: number;
  typeRecette?: TypeRecetteDto;
  utilisateurId?: string;
  versement?: VersementDto;
}
