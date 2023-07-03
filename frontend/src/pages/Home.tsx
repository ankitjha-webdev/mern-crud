import AddUser from "../components/user/Add";
import { Routes, Route, useParams } from 'react-router-dom';
import Users from "../components/user/Users";
import Navbar from "../components/header/Navbar";

export default function home() {
  return (
    <>
      <main>
        <Navbar/>
        <article className="">
            {/* <h2 className="text-4xl text-center">Curd React</h2> */}
            {/* <AddUser/> */}
            <Users/>
        </article>
  
      </main>
    </>
  );
}
