import { ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children?: ReactElement;
  content?: string;
  shouldMatchExactLink?: boolean;
}

export function ActiveLink({
  children,
  content,
  shouldMatchExactLink = false,
  ...restProps
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = false;

  if (
    shouldMatchExactLink &&
    (asPath === restProps.href || asPath === restProps.as)
  ) {
    isActive = true;
  }

  if (
    !shouldMatchExactLink &&
    (asPath.startsWith(String(restProps.href)) ||
      asPath.endsWith(String(restProps.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...restProps}>
      <a href={asPath} className={isActive && "active"}>
        {content}
      </a>
    </Link>
  );
}
