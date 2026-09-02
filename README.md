# Cotizador de cruce fronterizo

El repositorio del proyecto de tu pareja. Publico, compartido, y el mismo **todo el
semestre**: cada unidad agrega un subsistema, no un repositorio nuevo. El historial de commits
es la evidencia de como pensaste, asi que se cuida como se cuida el codigo.

## Arranca aqui

```bash
npm install
npm run verificar
```

**Va a fallar.** Una sola prueba, y es a proposito: el codigo trae un defecto de
frontera de un solo caracter. Encontrarlo, corregirlo y abrir el PR que lo cierra
es tu primera entrega. **No borres la prueba.**

## Comandos

| Comando | Que hace |
|---|---|
| `npm run verificar` | Tipos + linter + pruebas. Es lo mismo que corre CI. |
| `npm run prueba:ver` | Pruebas en modo continuo mientras trabajas. |
| `npm run lint` | Solo analisis estatico. |

## Flujo de trabajo

`main` esta protegida: no se le hace push directo, ni con `--force`.

```bash
git switch -c fix/frontera-del-umbral
# ... trabajas ...
git commit -m "fix: no cobra recargo cuando el peso es exactamente el umbral"
git push -u origin fix/frontera-del-umbral
```

Luego abres el PR y **pides revision a tu pareja**. `main` exige una aprobacion y CI
en verde para mergear, asi que ninguno de los dos puede meter codigo sin que el otro
lo haya leido. Aprobar sin leer te va a costar en la defensa: a cada quien se le
pregunta preferentemente sobre el modulo que escribio el otro.

### Mensajes de commit

Conventional Commits, y el mensaje dice **el porque**, no el que:

- Si: `fix: corrige el calculo de descuento cuando el peso es exactamente 1000`
- No: `fix: cambios varios`

El mensaje de commit es una senal de comprension y se lee como tal en la defensa.

## Estructura conforme avanza el semestre

```
src/            cotizador.ts, reglas.ts        U1 · TypeScript
tests/          pruebas                        U1 · TypeScript
motor/          motor de calculo puro          U2 · Elixir
dominio/        modelo tipado                  U3 · TypeScript
reglas/         motor de reglas declarativo    U4 · Prolog / SQL
lote/           procesamiento concurrente      U5 · Elixir
docs/           carta del proyecto, ensayo     todo el semestre
                CARTA-DEL-PROYECTO.md         U1 · semana 3
                ensayo-comparativo.md         cierre · semana 15
```

Cada carpeta llega cuando llega su unidad. No las crees vacias.

## Tu variante

`src/reglas.ts` trae la variante de **ejemplo**, que no es la de tu equipo.
Sustituirla por la que les toco en `variantes-tarifarias.md` del repositorio del curso
es parte de la entrega de la unidad 1, y las pruebas hay que rehacerlas con sus numeros.

## Alcance: cada subsistema es pequeno a proposito

Del orden de **100 a 200 lineas** por unidad. El proyecto completo no busca ser un
producto: busca ser cinco decisiones de diseno bien tomadas y bien defendidas.
Si tu modulo de la unidad 2 lleva 600 lineas, no vas adelantado, vas perdido.

## La defensa

Tres veces en el semestre abro este repositorio con los dos enfrente y pregunto:

- Explicame que hace esta funcion (proposito, no linea por linea)
- ¿Por que esta linea y no esta otra?
- ¿Que pasa si aqui llega `null`, cadena vacia, 10 000 registros?
- Modificala ahora para que ademas haga X (5 minutos, en vivo, con IA permitida)
- Meti un bug en tu codigo hace un minuto. Encuentralo.
- ¿Que te propuso la IA aqui que rechazaste?

| Ronda | Cuando | Duracion |
|---|---|---|
| Defensa 1 | viernes de las semanas 6 a 10 | 15 min por pareja |
| Defensa 2 | viernes de las semanas 12 a 15 | 15 min por pareja |
| Defensa final | semana 16, sobre el proyecto completo | 15 min por pareja |

La rubrica esta publicada desde la semana 1. No hay sorpresas.
