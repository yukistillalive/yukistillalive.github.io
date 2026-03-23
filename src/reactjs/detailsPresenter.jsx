import { observer } from "mobx-react-lite";
import { DetailsView } from "../views/detailsView.jsx";

const Details = observer(
    function Details(props) {
        return (<div>
                    <DetailsView model={props.model} />
                </div>);
    }
);

export { Details };