type PropsType = {
  name: string;
  nim: number;
  semester: number;
}

const Card = (props: PropsType) => {
  const { name, nim, semester } = props
  return (
    <div className='card'>
      <h2 className='item'>Nama: {name}</h2>
      <p className='item'>NIM: {nim}</p>
      <p className='item'>Semester: {semester}</p>
    </div>
  )
}

export default Card