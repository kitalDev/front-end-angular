/* tslint:disable */
/* eslint-disable */
import { AdherentDto } from './adherent-dto';
import { VersementDto } from './versement-dto';
export interface CotisationDto {
  adherent?: AdherentDto;
  id?: string;
  montant?: number;
  periode?: string;
  typeCotisation?: 'MENSUELLE' | 'TRIMESTRIELLE';
  utilisateurId?: string;
  versement?: VersementDto;
}
