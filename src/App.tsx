import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card';
import Counter from './components/Counter';

type Student = {
  name: string;
  nim: number;
  semester: number;
};

function App() {
  const students: Student[] = [
    {
      name: 'Budi Santoso',
      nim: 12345678,
      semester: 4,
    },
    {
      name: 'Siti Aminah',
      nim: 87654321,
      semester: 2,
    },
    {
      name: 'Andi Wijaya',
      nim: 11223344,
      semester: 6,
    },
    {
      name: 'Fikri Amrullah',
      nim: 224260064,
      semester: 7,
    },
  ];

  return (
    <>
      <Navbar />
      <div className='container'>
        {students.map((students) => {
          return <Card key={students.nim} name={students.name} nim={students.nim} semester={students.semester} />
        })}
      </div>
      <Counter />
    </>
  )
}

export default App
