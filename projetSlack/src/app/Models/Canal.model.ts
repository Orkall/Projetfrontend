import { MessageGet } from "./MessageGet.model";


export interface Canal {
    id: number;
    estLeGeneral: boolean;
    estActif: boolean;
    nomCanal: string;
    listContenuMessage: MessageGet[];
  }