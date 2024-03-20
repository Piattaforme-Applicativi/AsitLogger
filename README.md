# Logger custom basato su Pino

Questo repository contiene un pacchetto che estende e personalizza il logger fornito da [Pino](https://github.com/pinojs/pino). Il pacchetto è stato modificato per includere il parametro `logId` nei metodi `error` e `fatal`, offrendo maggiore flessibilità e facilitando la tracciabilità dei log.

## Installazione

Puoi installare il pacchetto tramite npm:

```bash
npm install @unipd/logger
```

## Utilizzo

Utilizzo con stringa di log personalizzata:

```javascript
import { asitLogger } from "@unipd/logger";
const logger = asitLogger();

// Utilizzo del metodo error personalizzato
logger.error("LOG_ID", "Messaggio di errore");
// output: {"level":50,"time":<timestamp>,"pid":<processId>,"hostname":"<hostname>","logId":"LOG_ID","msg":"Messaggio di errore"}

// Utilizzo del metodo fatal personalizzato
logger.fatal("rz5Z9n4twh", "Messaggio di errore fatale");
// output: {"level":60,"time":<timestamp>,"pid":<processId>,"hostname":"<hostname>","logId":"rz5Z9n4twh","msg":"Messaggio di errore fatale"}
```

Utilizzo con oggetto di log personalizzato:

```javascript
import { asitLogger } from "@unipd/logger";
const logger = asitLogger();

// Utilizzo del metodo error personalizzato
logger.error(
  "LOG_ID",
  { chiave: "Oggetto da loggare" },
  "Messaggio di errore opzionale"
);
// output: {"level":50,"time":<timestamp>,"pid":<processId>,"hostname":"<hostname>","logId":"LOG_ID","chiave":"valore","msg":"Messaggio di errore opzionale"}

// Utilizzo del metodo fatal personalizzato
logger.fatal(
  "faFnzi5TVd",
  { chiave: "valore" },
  "Messaggio di errore fatale opzionale"
);
// output: {"level":60,"time":<timestamp>,"pid":<processId>,"hostname":"<hostname>","logId":"faFnzi5TVd","chiave":"valore","msg":"Messaggio di errore fatale opzionale"}
```

**Attenzione**

Il parametro `logId` NON può essere una stringa vuota ma **deve contenere almeno 3 caratteri**.

## Generatore di Log ID

Per generare un ID di log personalizzato è **fortemente consigliato** l'utilizzo di [questo tool](https://piattaforme-applicativi.github.io/LogIdGenerator/).
L'ID generato viene utilizzato per identificare log o errori personalizzati.

## Modifiche apportate

Il pacchetto si basa su Pino e mantiene tutte le altre proprietà e funzionalità disponibili in Pino. Le modifiche principali sono state apportate ai seguenti metodi:

- `error`: È stato aggiunto il parametro `logId` per consentire una tracciabilità più dettagliata degli errori.
- `fatal`: Come nel metodo `error`, è stato aggiunto il parametro `logId` per garantire una gestione precisa degli errori fatali.

## Segnalazione problemi

Se incontri problemi con questo pacchetto, per favore apri una nuova issue su GitHub [qui](https://github.com/Piattaforme-Applicativi/AsitLogger/issues).

## Licenza

Questo pacchetto è rilasciato sotto la licenza MIT. Per ulteriori informazioni, consulta il file [LICENSE](LICENSE).
