import React, { FC } from "react";

interface ContainerProps {
  id: string;
  sectionClassName?: string;
  innerClassName?: string;
  children: React.ReactNode;
}
const Container: FC<ContainerProps> = ({
  id,
  sectionClassName,
  innerClassName,
  children,
}) => {
  return (
    <section
      id={id}
      className={`flex h-min w-full items-center justify-center py-24 ${sectionClassName} bg-[#31333b]`}
    >
      <div className={`mx-24 w-full ${innerClassName}`}>{children}</div>
    </section>
  );
};

export default Container;
