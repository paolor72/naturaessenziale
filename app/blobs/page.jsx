import { Markdown } from 'components/markdown';
import { ShapeEditor } from './editor';
import { ContextAlert } from 'components/context-alert';

export const metadata = {
    title: 'Blobs'
};

const explainer = `
Questo esempio mostra come utilizzare un oggetto store per qualsiasi tipo di dato, sia esso JSON, binario, 
o qualsiasi altra cosa. In questo esempio, lo store è utilizzato per **tenere i dati di forme blobby generate dagli utenti**.

L'uso dello store è praticamente zero-config. Di seguito è riportato un esempio di come caricare dati.

~~~js
'use server';
// Funzione per caricare forme
export async function uploadShape({ shapeData }) {
    // Logica per caricare i dati
}
~~~

Clicca "Randomize" per ottenere una forma che ti piace, poi premi "Upload".
Scegli qualsiasi oggetto esistente per visualizzarlo.
`;

const uploadDisabledText = `
Gli upload degli utenti sono disabilitati in questo sito. Per eseguire il tuo e provare: 
<a href="https://app.example.com/start/deploy?repository=https://github.com/example/your-repo">
<img src="https://www.example.com/img/deploy/button.svg" style="display: inline;" alt="Deploy" />
</a>
`;

const Page = () => {
    return (
        <div>
            <h1>Benvenuto!</h1>
        </div>
    );
};

export default Page;
