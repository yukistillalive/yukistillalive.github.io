import { observer } from "mobx-react-lite";
import { TutorialView } from "../views/tutorialView.jsx";

const Tutorial = observer(
    function Tutorial(props) {
        return (<div>
                    <TutorialView model={props.model} />
                </div>);
    }
);

export { Tutorial };