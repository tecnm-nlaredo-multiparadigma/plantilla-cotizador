import type { Reglas, TipoCarga } from './reglas.js';

export interface Embarque {
  readonly distanciaKm: number;
  readonly pesoKg: number;
  readonly tipoCarga: TipoCarga;
}

/**
 * Cotiza un embarque de cruce fronterizo.
 *
 * Reglas de la variante de ejemplo, en orden:
 *   1. flete = distancia x tarifa base
 *   2. si el embarque SUPERA el umbral de peso, el flete sube un porcentaje
 *   3. subtotal = flete + cuota del puente
 *   4. si el tipo de carga es el recargado, el subtotal sube un porcentaje
 *
 * ATENCION: esta implementacion trae un defecto sembrado y `npm run verificar`
 * falla a proposito. Es un defecto de frontera y esta en un solo caracter.
 * Encontrarlo y corregirlo es tu primera entrega. No borres la prueba que falla.
 */
export function cotizar(embarque: Embarque, reglas: Reglas): number {
  const fleteBase = embarque.distanciaKm * reglas.tarifaBaseUsdKm;

  const conSobrepeso = embarque.pesoKg >= reglas.umbralPesoKg
    ? fleteBase * (1 + reglas.recargoSobrepesoPct)
    : fleteBase;

  const subtotal = conSobrepeso + reglas.cuotaPuenteUsd;

  return embarque.tipoCarga === reglas.tipoCargaRecargado
    ? subtotal * (1 + reglas.recargoCargaPct)
    : subtotal;
}
