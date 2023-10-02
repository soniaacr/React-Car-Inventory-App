import { useSubmit } from "react-router-dom"
import Button from "./Button"
import { Input } from '../SharedComponents/Input'
import { server_calls } from '../api/server'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useForm } from 'react-hook-form'
import { chooseMake, chooseModel, chooseYear, chooseColor } from '../redux/slices/RootSlice'

interface CarFormProps {
  id?: string[]
}

const CarForm = (props:CarFormProps) => {
  const dispatch = useDispatch();
  const store = useStore();
  const { register, handleSubmit } = useForm({ })

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      console.log(`Updated: ${ data } ${ props.id }`);
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    } else {
          // Dispatch basically updates our state / Redux store
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseYear(data.year));
      dispatch(chooseColor(data.color));
      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000)
      }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="make">Car Make</label>
          <Input {...register('make')} name='make' placeholder="Make" />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <Input {...register('model')} name='model' placeholder="Model" />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <Input {...register('year')} name='year' placeholder="Year" />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <Input {...register('color')} name='color' placeholder="Color" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CarForm