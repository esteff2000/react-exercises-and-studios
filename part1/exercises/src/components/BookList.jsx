export default function BookList() {
   let pageTitle = "My Books of the Month";
   let book1 = "https://m.media-amazon.com/images/I/41+lJ5JhcXL.jpg";
   let book2 = "https://m.media-amazon.com/images/I/91TfZ+Y1CyL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71HplarpIqL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Immortal Longings by Chloe Gong" />
         <img src={book2} alt="The Mark of Athena by Rick Riordan" />
         <img src={book3} alt="Foul Heart Huntsman by Chloe Gong" />
      </div>      
   );
}