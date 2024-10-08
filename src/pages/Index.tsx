import { Globe, LucideIcon, MailQuestion, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";
import neovim from "../assets/neovim.svg";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    fetch("http://localhost:5173/src/assets/neovim.svg").then((res) =>
      res.text().then((x) => console.log(x)),
    );
  }, []);
  return (
    <main className="p-6">
      <div className="flex gap-3">
        <Card
          title="Ariadnet"
          description="The whole web stack written in rust."
          icon={Globe}
          tags={["web", "rust"]}
        />
        <Card
          title="Map"
          description="A touristic map for a school project."
          icon={MapPinned}
          tags={["map", "js", "mobile"]}
        />
        <Card
          title="Neovim config"
          description="My Neovim configuration including lsp and tree-sitter."
          img={neovim}
          tags={["neovim", "config", "editor"]}
        />
        <Card
          title="Spam detector"
          description="A simple neural net for spam detection."
          icon={MailQuestion}
          tags={["python", "NLP", "TensorFlow"]}
        />
      </div>
    </main>
  );
}

type CardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  img?: string;
  tags: string[];
};

function Card(props: CardProps) {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 rounded-xl shadow-xl border p-3 overflow-hidden">
      <Link to={`/posts/${props.title.split(" ")[0].toLowerCase()}`}>
        {props.icon && (
          <props.icon
            className="w-full h-[60%]"
            strokeWidth={1.25}
            color="#05313d"
          />
        )}
        {props.img && <img src={props.img} className="w-full h-[60%]" />}
        <div className="px-6 py-4">
          <h3 className="font-semibold text-xl mb-2">{props.title}</h3>
          <p className="text-base">{props.description}</p>
        </div>
        <div className="px-6">
          <div>
            {props.tags.map((x) => (
              <span
                className="inline-block rounded-full px-3 bg-zinc-200 mr-2 py-1 mt-1"
                key={x}
              >
                {x.charAt(0).toUpperCase() + x.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
