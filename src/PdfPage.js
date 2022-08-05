import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import './pdf.css';



function PdfPage() {

  const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);

	return (
		<div className="pdf-wrapper">
			<nav>
       
				<button className="pdf-button" onClick={goToPrevPage}>Prev</button>
				<button className="pdf-button" onClick={goToNextPage}>Next</button>
      
				<p>
					Page {pageNumber} of {numPages}
				</p>
			</nav>

			<Document
				file="proposal.pdf"
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page wrap={false} pageNumber={pageNumber} className="page-desktop" />
        <Page height="600" wrap={false} pageNumber={pageNumber} className="page-mobile" />
        
			</Document>
		</div>
	);
};




export default PdfPage