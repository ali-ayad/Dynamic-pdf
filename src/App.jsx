// App.jsx
import React from 'react';
import {BlobProvider} from '@react-pdf/renderer';
import PdfDocument from './PdfGenerator';
import './index.css';

const App = () => {
  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'document.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // const [pages, setPages] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.example.com/data');
  //       const data = await response.json();
  //       // Assume data is an array of objects
  //       const formattedPages = data.map((item, index) => ({
  //         title: `Page ${index + 1}`,
  //         content: item,
  //       }));
  //       setPages(formattedPages);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (loading) return <div>Loading data...</div>;
  // if (error) return <div>Error loading data: {error.message}</div>;
 
  const pages = [
    {  title: ' الصفحة الاولة', content: ' مرحبا', },
    { title: ' الصفحة الثانية', content: ' مرحبا', },
    { title: ' الصفحة الثالثة', content: ' مرحبا  ' },
    { title: ' الصفحة الرابعة', content: '  مرحبا' },
  ];
  const headerText = 'رأس الصفحة';
  const footerText = 'تذييل الصفحة';
 

  return (
    <div className='container'>
      <BlobProvider document={<PdfDocument  pages={pages}    footerText={footerText} headerText={headerText}    />}>
        {({ blob, url, loading, error }) => {
          if (loading) {
            return <div>Loading document...</div>;
          }
          if (error) {
            return <div>Error loading document: {error.message}</div>;
          }

          // Log the blob and URL for debugging purposes
          console.log('Blob:', blob);
          console.log('URL:', url);

          return (
            <div>
              <button onClick={() => handleDownload(url)}>Download PDF</button>
            </div>
          );
        }}
      </BlobProvider>
    </div>
  );
};

export default App;
