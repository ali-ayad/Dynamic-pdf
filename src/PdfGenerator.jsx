// PdfDocument.js
import React from 'react';
import { Document, Page, View, Text, StyleSheet,Font   } from '@react-pdf/renderer';
import arabicFont from './Fonts/Amiri/Amiri-Regular.ttf';


// Register the Arabic font with a custom family name
Font.register({ family: 'Amiri', src: arabicFont });

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      padding: 20,
    },
    header: {
      
    borderBottomWidth: 1, // Add bottom border
    borderBottomColor: 'black', // Set bottom border color
   

    padding: 10,
    fontFamily: 'Amiri',
      marginTop: 5,
      textAlign: 'center',
     
    
   
    
    },
    headerText: {
      fontSize: 16,
      textAlign: 'center',
    },
    
    title: {
      fontSize: 20,
      marginBottom: 10,
      fontFamily: 'Amiri', // Use the registered Arabic font
      direction: 'rtl', // Set text direction to right-to-left
    },
   
    
    content: {
      fontSize: 12,
      fontFamily: 'Amiri', // Use the registered Arabic font
      direction: 'rtl', // Set text direction to right-to-left
    },
    footer: {
      padding: 10,
      fontFamily: 'Amiri',
        marginTop: 30,
        textAlign: 'center',
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
       
      },
      logo: {
        width: 50,
        height: 50, 
      },
      footerText: {
        fontSize: 12,
        fontFamily: 'Amiri', // Use the registered Arabic font
        direction: 'rtl', // Set text direction to right-to-left
      },
     
  });

  const Header = ({ HeaderText,headerStyle}) => (
    <View style={[styles.header, headerStyle]}>
       
      <Text style={styles.headerText}>{HeaderText}</Text>
    </View>
  );

const Footer = ({ footerText, footerStyle }) => (
    <View style={[styles.footer, footerStyle]}>
      <Text style={styles.footerText}>{footerText}</Text>
     
    </View>
  );
  // const Table = ({ data }) => (
  //   <View style={styles.table}>
  //     <View style={styles.tableRow}>
       
  //       <View style={styles.tableColHeader}>
  //         <Text style={styles.tableCellHeader}>اسم الموقع</Text>
  //       </View>
  //       <View style={styles.tableColHeader}>
  //         <Text style={styles.tableCellHeader}>المنطقة</Text>
  //       </View>
  //       <View style={styles.tableColHeader}>
  //         <Text style={styles.tableCellHeader}>ت</Text>
  //       </View>
  //     </View>
  //     {data.map((row, rowIndex) => (
  //       <View style={styles.tableRow} key={rowIndex}>
         
  //         <View style={styles.tableCol}>
  //           <Text style={styles.tableCell}>{row.name}</Text>
  //         </View>
  //         <View style={styles.tableCol}>
  //           <Text style={styles.tableCell}>{row.region.name}</Text>
  //         </View>
  //         <View style={styles.tableCol}>
  //           <Text style={styles.tableCell}>{rowIndex + 1}</Text>
  //         </View>
  //       </View>
  //     ))}
  //   </View>
  // );

const PdfDocument = ({ pages, headerText,footerText }) => {
  if (!pages || !Array.isArray(pages)) {
    // Handle case when pages is undefined or not an array
    return null; // Return null or some default content
  }

  return (
    <Document>
      {pages.map((page, pageIndex) => (
        <Page key={pageIndex} style={styles.page}>
          <Header HeaderText={headerText}   />
          <Text style={styles.title}>{page.title}</Text>
          <Text style={styles.content}>{page.content}</Text>
          
          <Footer footerText={footerText}/>
        </Page>
      ))}
    </Document>
  );
};

export default PdfDocument;
