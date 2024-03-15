import './styles.css';

function Button() {
   function onLearnMore(){
      alert('glub glub!');
   };

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;