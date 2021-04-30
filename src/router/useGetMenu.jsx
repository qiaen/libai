import { useEffect, useState } from "react";
import menus from "./menus";
export default function (pathname) {
  const [c, setC] = useState(null);

  function getMenu(menus) {
    for (let item of menus) {
      if (item.child) {
        getMenu(item.child);
      } else {
        if (item.path === pathname) {
          setC({
            ...item,
            pathname: item.path,
          });
          break;
        }
      }
    }
  }
  useEffect(() => {
    getMenu(menus)
  }, [pathname]);
  return c;
}
