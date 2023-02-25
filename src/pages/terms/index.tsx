import React from "react";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";
import TermForm from "../../components/TermForm/TermForm";
import { TermList } from "../../components/TermList/TermList";

export const Terms = () => {
  return (
    <PrivatePage>
      <div className="flex w-full flex-col gap-8 p-5 px-4 lg:flex-row lg:px-60">
        <TermForm />
        <TermList />
      </div>
    </PrivatePage>
  );
};

export default Terms;
