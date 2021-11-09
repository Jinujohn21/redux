import { useSelector } from 'react-redux'

const Header = () => {
  const color = useSelector((state) => state.color.value)
  const count = useSelector((state) => state.count.value)
  return (
    <div className='header'>
      <h1 style={{ color }}> Redux Project</h1>
      <h3>Count is - {count}</h3>
    </div>
  )
}

export default Header
