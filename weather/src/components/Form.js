const Form = ({getData}) => {
  return ( 
    <form onSubmit={getData}>
      <input type='text' name='city' placeholder="city" />
      <button>get fuck</button>
    </form>
   );
}
 
export default Form;