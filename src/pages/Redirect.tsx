import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Redirect(props: {destination: string; }) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(props.destination)
  }, [])

  return <></>
}

export default Redirect