import React, {useRef, useEffect, useState} from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import './App.css';

import pdf from './rapport d\'expertise rétroexpertise';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function loadPdf(win, props) {
    const options = {title: 'Classic Expert',};

    pdfMake.createPdf(pdf).open(options, win);
}

const PdfInvoice = (props) => {
    const [pdfLoaded, setPdfLoaded] = useState(false);
    const iframeRef = useRef(null);

    useEffect(() => {
        if (pdfLoaded) {
            return;
        }

        const timer = setInterval(function () {
            const iframe = iframeRef.current;
            if (!iframe) {
                return;
            }
            if (pdfLoaded) {
                return;
            }

            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            // Check if loading is complete
            if (iframeDoc.readyState === 'complete' || iframeDoc.readyState === 'interactive') {
                clearInterval(timer);
                setPdfLoaded(true);

                loadPdf(iframeDoc.defaultView, props);

                return;
            }
        }, 200);

        return () => {
            clearInterval(timer);
        };
    });


    return (
        <iframe title="invoicePdf" src="about:blank" frameBorder="0" width='100%' height='100%' ref={iframeRef}
                onLoad={(event) => loadPdf(event, props)} style={{width: '100%', height: '100%'}}>
        </iframe>
    );
};


function App() {
    return (
        <div className="App">
            <PdfInvoice/>
        </div>
    );
}

export default App;
