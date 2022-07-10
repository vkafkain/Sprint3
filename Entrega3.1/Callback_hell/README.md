# Entrega 3.1 Callback Hell 🔥

## Instruccions d'ús: 🧙‍♂️

He intentat treure els callbacks i modulat el codi a trossos perquè sigui més interpretable.

Per executar el programa introduirem el següent comandament per consola:

    node callback_hell.js

## Actualitzacions introduïdes: ✅

- En la nova versió la carpeta outbox es crea en introduir el comandament, node callback_hell.js per terminal.

- Per la creació de carpetes hem introduït les següents línies de codi:

        const ruta = './outbox';
        !fs.existsSync(ruta) ? fs.mkdirSync(ruta): console.log("Ja existeix la carpeta amb aquest nom");

