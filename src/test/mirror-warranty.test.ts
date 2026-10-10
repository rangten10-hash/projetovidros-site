import { describe, expect, it } from "vitest";
import { getPostBySlug } from "@/data/blogPosts";

describe("mirror warranty", () => {
  it("states the supplied one-year warranty against manufacturing defects and early oxidation", () => {
    const post = getPostBySlug("espelhos-protecao-borda-tekbond-guardian-cebrace");
    const warranty = post?.faq?.find((item) => item.question === "Qual é a garantia dos espelhos da Projeto Vidros?");
    expect(warranty?.answer).toContain("1 ano contra defeitos de fabricação e oxidação precoce");
  });
});