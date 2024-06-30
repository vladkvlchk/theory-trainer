import { BookType } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="border-b py-4 sticky">
      <div className="flex w-2/3 m-auto items-center justify-between">
        <span className="flex items-center gap-2">
          <BookType />
          <h1 className="text-2xl">Theory Trainer</h1>
        </span>
        <Button>Switch Theme</Button>
      </div>
    </header>
  );
};

export default Header;
