import type { ReactNode } from "react";

type ProgramData = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: ProgramData;
  onSubmit: (program: ProgramData) => void;
}

function ProgramForm({ children, defaultValue, onSubmit }: ProgramFormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const programData: ProgramData = {
          title: formData.get("title") as string,
          synopsis: formData.get("synopsis") as string,
          poster: formData.get("poster") as string,
          country: formData.get("country") as string,
          year: Number(formData.get("year")),
        };

        onSubmit(programData);
      }}
    >
      <input
        type="text"
        name="title"
        defaultValue={defaultValue.title}
        placeholder="Titre"
      />
      <textarea
        name="synopsis"
        defaultValue={defaultValue.synopsis}
        placeholder="Synopsis"
      />
      <input
        type="text"
        name="poster"
        defaultValue={defaultValue.poster}
        placeholder="URL du poster"
      />
      <input
        type="text"
        name="country"
        defaultValue={defaultValue.country}
        placeholder="Pays"
      />
      <input
        type="number"
        name="year"
        defaultValue={defaultValue.year}
        placeholder="Année"
      />

      <button type="submit">{children}</button>
    </form>
  );
}

export default ProgramForm;
