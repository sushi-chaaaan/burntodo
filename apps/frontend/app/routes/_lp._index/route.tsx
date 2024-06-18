import type { MetaFunction } from "@remix-run/cloudflare";

import { Button, Container } from "@mantine/core";
import { FaBolt, FaFigma, FaGithub } from "react-icons/fa6";

import Link from "../../../components/element/Link";
import { REPO_URL } from "../../const";

export const meta: MetaFunction = () => {
  return [
    { title: "BurnTodo" },
    {
      content: "A simple todo app built with Hono and Remix",
      name: "description",
    },
  ];
};

export default function Index() {
  return (
    <Container className="flex-1 space-y-8 p-4 pt-[5vh] md:space-y-16 md:pt-[15vh]">
      <div>
        <h1 className="text-4xl font-bold text-zinc-950 md:text-6xl">
          BurnTodo🔥
        </h1>
        <p className="mt-3 break-keep text-2xl font-bold md:text-3xl">
          A Todo App built with
          <wbr /> <span className="text-orange-600">Hono</span> and{" "}
          <span className="text-blue-600">Remix</span>.
        </p>
        <p className="mt-4 text-lg font-semibold text-zinc-500">
          Backend and Frontend is connected via Cloudflare's{" "}
          <Link to="https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings">
            Service bindings!
          </Link>
          🚀
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        <Button
          color="orange"
          component={Link}
          leftSection={<FaBolt size={24} />}
          radius="md"
          size="md"
          to="/signup"
          variant="filled"
          variants={{ color: "none" }}
        >
          Getting Started
        </Button>
        <Button
          color="blue"
          component={Link}
          leftSection={<FaFigma size={24} />}
          radius="md"
          size="md"
          to="https://www.figma.com/file/0G1WPjQpdySKBhBsMR8aMl/Workers-Pages-Connect?type=whiteboard&node-id=0%3A1&t=INSAv3hwRCoZ161Q-1"
          variant="filled"
          variants={{ color: "none" }}
        >
          View Architecture
        </Button>
        <Button
          color="dark"
          component={Link}
          leftSection={<FaGithub size={24} />}
          radius="md"
          size="md"
          to={REPO_URL}
          variant="filled"
          variants={{ color: "none" }}
        >
          View on GitHub
        </Button>
      </div>
    </Container>
  );
}
