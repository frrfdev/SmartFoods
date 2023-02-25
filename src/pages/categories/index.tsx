import React from "react";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { CategoryList } from "../../components/CategoryList/CategoryList";

export const Categories = () => {
  return (
    <PrivatePage>
      <div className="flex w-full flex-col gap-8 py-5 px-4 lg:flex-row lg:px-60">
        <CategoryForm />
        <CategoryList />
      </div>
    </PrivatePage>
  );
};

export default Categories;
