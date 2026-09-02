import { describe, it, expect } from 'vitest';
import { cotizar } from '../src/cotizador.js';
import { REGLAS_EJEMPLO } from '../src/reglas.js';

const base = { distanciaKm: 200, pesoKg: 500, tipoCarga: 'general' } as const;

describe('cotizar', () => {
  it('cobra flete mas cuota de puente cuando no hay sobrepeso ni recargo', () => {
    expect(cotizar(base, REGLAS_EJEMPLO)).toBe(340);
  });

  it('recarga el flete cuando el embarque supera el umbral de peso', () => {
    expect(cotizar({ ...base, pesoKg: 1500 }, REGLAS_EJEMPLO)).toBe(400);
  });

  it('aplica el recargo al tipo de carga senalado por las reglas', () => {
    expect(cotizar({ ...base, tipoCarga: 'refrigerada' }, REGLAS_EJEMPLO)).toBeCloseTo(391, 6);
  });

  // ---------------------------------------------------------------------
  // Esta prueba ARRANCA EN ROJO. Es el defecto de frontera del encuadre.
  // El umbral es de 1000 kg. Un embarque de exactamente 1000 kg NO supera
  // el umbral, asi que no debe pagar recargo por sobrepeso.
  // Ponerla en verde es la entrega de la unidad 1. No la borres.
  // ---------------------------------------------------------------------
  it('un embarque de exactamente el peso umbral no paga recargo por sobrepeso', () => {
    expect(cotizar({ ...base, pesoKg: 1000 }, REGLAS_EJEMPLO)).toBe(340);
  });
});
