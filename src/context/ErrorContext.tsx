import { createContext, useContext, useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import autoAnimate from "@formkit/auto-animate";

export interface ErrorContextProps {
  error: string | null;
  setError: (error: string | null) => void;
}

export const ErrorContext = createContext<ErrorContextProps>(
  {} as ErrorContextProps
);

export const useErrorContext = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<string | null>(null);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const resetError = () => setError(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(null);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <div ref={parent} className=" z-50">
        {error ? (
          <div className="absolute flex w-full items-center justify-between border-2 border-red-200 bg-red-100 p-5 font-bold text-red-600">
            {error}
            <FaTimes className="cursor-pointer" onClick={resetError} />
          </div>
        ) : null}
      </div>
      {children}
    </ErrorContext.Provider>
  );
};
