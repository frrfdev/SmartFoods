import React from "react";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";
import TermForm from "../../components/TermForm/TermForm";
import { TermList } from "../../components/TermList/TermList";
import type { TermData } from "../../@types/TermData";

export const Terms = () => {
  const [termToEdit, setTermToEdit] = React.useState<null | TermData>(null);

  const handleEditTerm = (term: TermData) => setTermToEdit(term);

  return (
    <PrivatePage>
      <div className="flex w-full flex-col gap-8 p-5 px-4 lg:flex-row lg:px-60">
        <TermForm termToEdit={termToEdit} setTermToEdit={setTermToEdit} />
        <TermList handleEditTerm={handleEditTerm} />
      </div>
    </PrivatePage>
  );
};

export default Terms;
