// Variante de EJEMPLO (V00). No es la tuya.
// Sustituye estos valores por los de la variante que te toco en
// `variantes-tarifarias.md` del repositorio del curso. Ese cambio es
// parte de la entrega de la unidad 1.

export type TipoCarga = 'general' | 'refrigerada' | 'peligrosa' | 'sobredimensionada' | 'perecedera';

export interface Reglas {
  /** Cuota fija del puente asignado, en USD. */
  readonly cuotaPuenteUsd: number;
  /** Tarifa por kilometro recorrido, en USD. */
  readonly tarifaBaseUsdKm: number;
  /** Peso a partir del cual el embarque se considera con sobrepeso. */
  readonly umbralPesoKg: number;
  /** Incremento sobre el flete cuando el embarque SUPERA el umbral. */
  readonly recargoSobrepesoPct: number;
  /** Unico tipo de carga que paga recargo en esta variante. */
  readonly tipoCargaRecargado: TipoCarga;
  /** Incremento sobre el subtotal para ese tipo de carga. */
  readonly recargoCargaPct: number;
}

export const REGLAS_EJEMPLO: Reglas = {
  cuotaPuenteUsd: 40,
  tarifaBaseUsdKm: 1.5,
  umbralPesoKg: 1000,
  recargoSobrepesoPct: 0.2,
  tipoCargaRecargado: 'refrigerada',
  recargoCargaPct: 0.15,
};
