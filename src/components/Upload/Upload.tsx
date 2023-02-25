import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Button } from "../Button/Button";
import { convertImage, toBase64 } from "../../utils/images";
import { motion, useAnimationControls } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import type { UploadProps } from "./Upload.types";
import { validator } from "./Upload.validator";

export const Upload = ({ value = [], name, onChange }: UploadProps) => {
  const [parent] = useAutoAnimate<HTMLDivElement>();

  const controls = useAnimationControls();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      console.log([...value, ...acceptedFiles]);
      // setFiles([...files, ...acceptedFiles]);
      if (onChange) onChange([...value, ...acceptedFiles]);
    },
    [value, onChange]
  );

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    onDrop,
    validator,
  });

  const handleRemove = (name: string) => {
    const newFilesList = value.filter((file) => file.name !== name);
    // setFiles(newFilesList);
    if (onChange) onChange(newFilesList);
  };

  useEffect(() => {
    if (value) {
      console.log("value", value);
    }
  }, [value]);

  useEffect(() => {
    if (fileRejections.length)
      controls.start({
        rotate: [-1, 1.3, 0],
        transition: {
          delay: 0,
          repeat: 3,
          duration: 0.2,
        },
      });
  }, [fileRejections, controls]);

  return (
    <div className="flex flex-col gap-2">
      <div {...getRootProps()}>
        <motion.div
          animate={controls}
          className={`flex w-full flex-col items-center rounded-md border-2  py-10 font-bold  ${
            fileRejections.length
              ? "border-red-600 text-red-600 "
              : "border-gray-100 text-gray-800"
          }`}
        >
          <input {...getInputProps()} name={name} />
          <AiOutlineCloudUpload size={30} />
          <span className="text-center text-sm">Carregar foto do produto</span>

          {fileRejections.length > 0 && (
            <span className="text-sm text-red-600">
              {fileRejections[0]?.errors[0]?.message}
            </span>
          )}
        </motion.div>
      </div>

      <div className="flex flex-wrap gap-2" ref={parent}>
        {value?.map((file) => (
          <div
            key={file.name}
            className="relative h-[200px] w-full overflow-hidden rounded-md"
          >
            <Image
              alt="product image"
              src={URL.createObjectURL(file)}
              fill
              placeholder="blur"
              style={{ zIndex: 1, objectFit: "cover" }}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                convertImage(700, 475)
              )}`}
            ></Image>

            <span
              className="absolute right-1 top-1 z-10"
              onClick={() => handleRemove(file.name)}
            >
              <Button size="sm">
                <FaTimes />
              </Button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
