import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Atom,
  Chrome,
  FileCode2,
  Flower2,
  Server,
  ShieldHalf,
  SquareTerminal,
} from "lucide-react";

const Home: React.FC = () => {
  return (
    <main className="w-2/3 mx-auto min-h-full pt-6">
      <h2 className="text-xl">Select the topic that you want to train:</h2>
      <ul>
        <Link to={"topic/" + "web"}>
          <li>
            <Button variant="link">
              <Chrome />
              <p className="text-xl ml-2">Web</p>
            </Button>
          </li>
        </Link>
        <Link to={"topic/" + "html"}>
          <li>
            <Button variant="link">
              <FileCode2 />
              <p className="text-xl ml-2">HTML</p>
            </Button>
          </li>
        </Link>
        <Link to={"topic/" + "css"}>
          <li>
            <Button variant="link">
              <Flower2 />
              <p className="text-xl ml-2">CSS</p>
            </Button>
          </li>
        </Link>
        <Link to={"topic/" + "js"}>
          <li>
            <Button variant="link">
              <SquareTerminal />
              <p className="text-xl ml-2">Javascript</p>
            </Button>
          </li>
        </Link>
        <Link to={"topic/" + "ts"}>
          <li>
            <Button variant="link">
              <ShieldHalf />
              <p className="text-xl ml-2">Typescript</p>
            </Button>
          </li>
        </Link>
        <Link to={"topic/" + "react"}>
          <li>
            <Button variant="link">
              <Atom />
              <p className="text-xl ml-2">React</p>
            </Button>
          </li>
        </Link>
        <Link to={"topic/" + "next"}>
          <li>
            <Button variant="link">
              <Server />
              <p className="text-xl ml-2">Next</p>
            </Button>
          </li>
        </Link>
      </ul>
    </main>
  );
};

export default Home;
