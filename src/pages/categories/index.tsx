import React from "react";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { CategoryList } from "../../components/CategoryList/CategoryList";
import type { CategoryData } from "../../@types/CategoryData";

export const Categories = () => {
  const [categoryToEdit, setCategoryToEdit] =
    React.useState<null | CategoryData>(null);

  const handleEditCategory = (term: CategoryData) => setCategoryToEdit(term);

  return (
    <PrivatePage>
      <div className="flex w-full flex-col gap-8 py-5 px-4 lg:flex-row lg:px-60">
        <CategoryForm
          categoryToEdit={categoryToEdit}
          setCategoryToEdit={setCategoryToEdit}
        />
        <CategoryList handleEditCategory={handleEditCategory} />
      </div>
    </PrivatePage>
  );
};

export default Categories;
