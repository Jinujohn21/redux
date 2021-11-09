import { useSelector, useDispatch } from 'react-redux'
import randomcolor from 'randomcolor'
import { change_color } from '../Redux/color/colorSlice'
const Aside = () => {
  const color = useSelector((state) => state.color.value)
  const dispatch = useDispatch()
  const changeColor = () => {
    dispatch(
      change_color({
        color: randomcolor(),
      })
    )
  }
  return (
    <div className='aside'>
      <h3 style={{ color }}>Aside</h3>
      <button onClick={changeColor}>Click to change color</button>
    </div>
  )
}

export default Aside
