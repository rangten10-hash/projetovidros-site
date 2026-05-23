import { Link, LinkProps } from "react-router-dom";
import { prefetchRoute } from "@/lib/routePrefetch";

/**
 * Drop-in replacement for react-router's <Link> that prefetches the target
 * route's JS chunk on hover, focus, or touchstart — well before the user
 * actually clicks. Idempotent: each chunk only loads once.
 */
const SmartLink = ({ to, onMouseEnter, onFocus, onTouchStart, ...rest }: LinkProps) => {
  const path = typeof to === "string" ? to : to.pathname ?? "";

  const warm = () => prefetchRoute(path);

  return (
    <Link
      to={to}
      onMouseEnter={(e) => {
        warm();
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        warm();
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        warm();
        onTouchStart?.(e);
      }}
      {...rest}
    />
  );
};

export default SmartLink;
