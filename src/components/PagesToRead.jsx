import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import Navbar from './Navbar';


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const generateRandomBook = () => {
  const bookNames = ['Book A', 'Book B', 'Book C', 'Book D', 'Book E', 'Book F', 'Book G'];
  const randomBookName = bookNames[Math.floor(Math.random() * bookNames.length)];
  const totalPages = Math.floor(Math.random() * 500) + 100; // Random number between 100 and 600
  return { bookName: randomBookName, totalPages };
};

const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16); // Random hexadecimal color
};

const PagesToRead = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const readList = localStorage.getItem('readList');
    if (readList) {
      setBooks(JSON.parse(readList));
    } else {
      generateRandomData();
    }
  }, []);

 

  const generateRandomData = () => {
    const data = Array.from({ length: 7 }, () => generateRandomBook());
    setBooks(data);
    localStorage.setItem('readList', JSON.stringify(data));
  };

  return (
    <div className="pages-to-read-container" style={{ width: '100%', height: '100%' }}>
      
    <Navbar></Navbar>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={books}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar 
            dataKey="totalPages" 
            shape={<TriangleBar />} 
            label={{ position: 'top' }}
          >
            {books.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={generateRandomColor()} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
