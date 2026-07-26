import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";

/** Termos que viram links internos dentro do texto dos posts (ordem: mais específico primeiro) */
const TERMS: { pattern: RegExp; href: string }[] = [
  { pattern: /box de banheiro/i, href: "/box-de-banheiro" },
  { pattern: /portas de vidro/i, href: "/portas-de-vidro" },
  { pattern: /vidro temperado/i, href: "/box-seguro" },
  { pattern: /pel[ií]culas?/i, href: "/box-seguro" },
  { pattern: /espelhos?/i, href: "/espelhos" },
];

const LINK_CLASS =
  "text-copper font-semibold underline underline-offset-2 hover:text-petrol transition-colors";

/**
 * Converte a primeira ocorrência de cada termo do texto em um link interno (mesma aba).
 * Cada termo é linkado apenas uma vez por texto para evitar excesso de links.
 */
export function autoLinkText(text: string, used?: Set<string>): ReactNode {
  const seen = used ?? new Set<string>();
  let nodes: ReactNode[] = [text];

  TERMS.forEach(({ pattern, href }) => {
    if (seen.has(href)) return;
    let done = false;
    nodes = nodes.flatMap((node) => {
      if (done || typeof node !== "string") return [node];
      const match = node.match(pattern);
      if (!match || match.index === undefined) return [node];
      done = true;
      seen.add(href);
      const before = node.slice(0, match.index);
      const after = node.slice(match.index + match[0].length);
      return [
        before,
        <Link key={`${href}-${match.index}`} to={href} className={LINK_CLASS}>
          {match[0]}
        </Link>,
        after,
      ];
    });
  });

  return nodes.map((n, i) => <Fragment key={i}>{n}</Fragment>);
}
