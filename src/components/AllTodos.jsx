import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";


const AllTodos = () => {

          const [todos, setTodos] = useState([]);
      const [loading, setLoading] = useState(true)
    
      useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            
            const data = await response.json();
            setTodos(data);
            setLoading(false)
          } catch (error) {
            console.error("Error fetching posts:", error);
          }
        };
    
        fetchPosts();
      }, []);

      if(loading) return <div className="loader absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

    return (
        <TableContainer component={Paper} sx={{ width: { xs: "100%", md: "50%" }, margin: "auto", mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default AllTodos;

