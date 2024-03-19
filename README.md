# Logger custom basato su PinoJS

Questo repository contiene un pacchetto che estende e personalizza il logger fornito da [PinoJS](https://github.com/pinojs/pino). Il pacchetto è stato modificato per includere il parametro `logId` nei metodi `error` e `fatal`, offrendo maggiore flessibilità e facilitando la tracciabilità dei log.

## Installazione

Puoi installare il pacchetto tramite npm:

```bash
npm install @unipd/logger
```

## Utilizzo

```javascript
import { asitLogger } from "@unipd/logger";
const logger = asitLogger();

// Utilizzo del metodo error personalizzato
logger.error("LOG_ID", "Messaggio di errore");

// Utilizzo del metodo fatal personalizzato
logger.fatal("LOG_ID", "Messaggio di errore fatale");
```

## Generatore di Log ID

Puoi generare un ID di log personalizzato utilizzando [questo tool](https://piattaforme-applicativi.github.io/LogIdGenerator/). 
Puoi usare l'ID generato per identificare log o errori personalizzati.

## Modifiche apportate

Il pacchetto si basa su PinoJS e mantiene tutte le altre proprietà e funzionalità disponibili in PinoJS. Le modifiche principali sono state apportate ai seguenti metodi:

- `error`: È stato aggiunto il parametro `logId` per consentire una tracciabilità più dettagliata degli errori.
- `fatal`: Come nel metodo `error`, è stato aggiunto il parametro `logId` per garantire una gestione precisa degli errori fatali.

## Segnalazione problemi

Se incontri problemi con questo pacchetto, per favore apri una nuova issue su GitHub [qui](https://github.com/Piattaforme-Applicativi/AsitLogger/issues).

## Licenza

Questo pacchetto è rilasciato sotto la licenza MIT. Per ulteriori informazioni, consulta il file [LICENSE](LICENSE).
