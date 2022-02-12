import { useEffect } from "react";
import { navigate } from "gatsby";

function NotFoundPage() {
  useEffect(() => {
    navigate("/");
  }, []);

  return null;
}

export default NotFoundPage;
