import { observer } from "mobx-react-lite";
import { HistoryView } from "../views/historyView.jsx";

const History = observer(
    function History(props) {
        return (<div>
                    <HistoryView model={props.model} />
                </div>);
    }
);

export { History };