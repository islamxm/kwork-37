import { useContext } from "react";
import { VlsContext } from "../hoc/VlsProvider";

function useGlobal() {
    return useContext(VlsContext);
}

export default useGlobal;