import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        GreenGPT 🌿
      </h1>
      <ul>
        <li className="text-l">
          🌏
          <span className="ml-2">
            GreenGPT showcases our capabilities in intertwining technological advancements with ecological consciousness.
          </span>
        </li>
        <li className="text-l md:block">
          🤖
          <span className="ml-2">
            As we delve deeper into the era of digital transformation, GreenGPT stands as a testament to our commitment to a sustainable future.
          </span>
        </li>
        <li className="text-l">
          🌱
          <span className="ml-2">
            Our primary focus is to enhance environmental awareness through advanced technology, fostering a world where innovation goes hand in hand with environmental responsibility.
          </span>
        </li>
        <li className="text-l md:block">
          💡
          <span className="ml-2">
            By utilizing tools like <a href="https://js.langchain.com/" target="_blank">LangChain.js</a>, the Vercel <a href="https://sdk.vercel.ai/docs" target="_blank">AI SDK</a>, and the <a href="https://nextjs.org/" target="_blank">Next.js</a> framework, we ensure a seamless and efficient development experience.
          </span>
        </li>
        <li className="text-l">
          🛠️
          <span className="ml-2">
            The main logic for this use-case is found in <code>app/api/chat/route.ts</code> and the frontend in <code>app/page.tsx</code>.
          </span>
        </li>
        <li className="text-l">
          📖
          <span className="ml-2">
            For those interested, Please contact us for more info.
          </span>
        </li>
      </ul>
    </div>
);
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🍀"
      titleText="GreenGPT"
      placeholder="I'm an LLM that help with sustainability and environment"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
