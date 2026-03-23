import { observer } from "mobx-react-lite";
import { ResultsView } from "../views/resultsView.jsx";

const Results = observer(
    function Results(props) {
        return (<div>
                    <ResultsView model={props.model} />
                </div>);
    }
);

export { Results };