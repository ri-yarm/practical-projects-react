const Form = ({getData,input}) => (
  <form onSubmit={getData}>
      <input onChange={(e) => input(e.target.value)} type='text' name='city' placeholder="Magnitogorsk" />
      <button>get fuck</button>
    </form>
)
 
export default Form;