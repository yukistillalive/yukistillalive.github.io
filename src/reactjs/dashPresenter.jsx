import { observer } from "mobx-react-lite";
import { DashView } from "../views/dashView.jsx";

const Dash = observer(
    function Dash(props) {
        return (<div>
                    <DashView model={props.model} />
                </div>);
    }
);

export { Dash };