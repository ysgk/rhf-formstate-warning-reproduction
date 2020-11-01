import { useForm } from 'react-hook-form'

function App() {
  const { register, formState } = useForm({ mode: 'onChange' })

  return (
    <form>
      <input name={'email'} type={'email'} ref={register({ required: true })} />
      <button disabled={!formState.isValid}>Submit</button>
    </form>
  );
}

export default App;
