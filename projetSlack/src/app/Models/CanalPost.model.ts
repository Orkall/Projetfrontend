import { MessageGet } from "./MessageGet.model";


export interface CanalPost {
    id: number;
    estLeGeneral: boolean;
    estActif: boolean;
    nomCanal: string;
    listContenuMessage: MessageGet[];
  }