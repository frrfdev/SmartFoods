import type { DialogProps } from "@mui/material";
import type { ProductData } from "../../@types/ProductData";

export type ProductPreviewModalProps = DialogProps & {
  product?: ProductData;
};
