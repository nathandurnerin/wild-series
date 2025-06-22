import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import ProgramDeleteForm from "../components/programDeleteForm";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function ProgramDetail() {
  const { id } = useParams();
  const [program, setProgram] = useState(null as null | Program);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: Program) => {
        setProgram(data);
      });
  }, [id]);

  return (
    program && (
      <>
        <article className="mx-auto mb-8 p-4 border rounded-lg shadow-md w-1/2 h-full flex flex-col items-center bg-gray-100">
          <h1 className="text-lg font-semibold">{program.title}</h1>
          <img
            src={program.poster}
            alt={program.title}
            className="w-2/3 mx-auto rounded-2xl mt-2"
          />
          <p className="text-gray-600 mt-2 text-xs">{program.synopsis}</p>
          <p className="text-gray-600 mt-2 text-xs">
            <strong>Année :</strong> {program.year}
          </p>
          <p className="text-gray-600 mt-2 text-xs">
            <strong>Pays :</strong> {program.country}
          </p>
        </article>
        <div className="flex flex-col text-white justify-center items-center">
          <Link to={`/programs/${program.id}/edit`}>Modifier</Link>
          <ProgramDeleteForm id={program.id}>Supprimer</ProgramDeleteForm>
        </div>
      </>
    )
  );
}

export default ProgramDetail;
