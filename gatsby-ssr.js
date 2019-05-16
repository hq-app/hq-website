const React = require('react')
const { JssProvider, SheetsRegistry, ThemeProvider } = require("react-jss")
const {renderToString} = require('react-dom/server')

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
 const sheets = new SheetsRegistry()

 replaceBodyHTMLString(
   renderToString(
     <JssProvider
       registry={sheets}
     >
       { bodyComponent }
     </JssProvider>
   )
 );

 setHeadComponents([
   <style
     type="text/css"
     id="server-side-jss"
     key="server-side-jss"
     dangerouslySetInnerHTML={{ __html: sheets.toString() }}
   />
 ]);
};
// eslint-disable-next-line react/prop-types,react/display-name
// exports.wrapRootElement = (p, q) => {
//   const { element } = p ;
//   const { theme = {} } = q;
//
//   console.log('p', p)
//   console.log('q', q)
//   console.log('theme', theme)
//   return (
//     <JssProvider registry={sheets}>
//       <ThemeProvider theme={theme}>{element}</ThemeProvider>
//     </JssProvider>
//   )
// }
//
// exports.onRenderBody = (p) => {
//   const { setHeadComponents } = p;
//   // console.log('banana', p)
//   return (
//     setHeadComponents([
//       <style
//         type="text/css"
//         id="server-side-jss"
//         key="server-side-jss"
//         dangerouslySetInnerHTML={{ __html: sheets.toString() }}
//       />,
//     ])
//   )
// }
