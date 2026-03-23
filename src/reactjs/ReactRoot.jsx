import { observer } from "mobx-react-lite";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Details } from "./detailsPresenter.jsx";
import { Dash } from "./dashPresenter.jsx";
import { History } from "./historyPresenter.jsx";
// import { Library } from "./libraryPresenter.jsx";
// import { Results } from "./resultsPresenter.jsx";
// import { Tutorial } from "./tutorialPresenter.jsx";

const ReactRoot = observer(function ReactRoot(props) {
  return (
    <div>
        <Details model={props.model} />
        <Dash model={props.model} />
        <History model={props.model} />
        {/* <Library model={props.model} /> */}
        {/* <Results model={props.model} /> */}
        {/* <Tutorial model={props.model} /> */}
    </div>
  );
});

// // Root Distributes Model to Children
// export default function ReactRoot(props){
//     return (<div>
//                 <div>
//                     <Details model={props.model} />
//                 </div>
//             </div>
//            );
// }
// // )

export { ReactRoot }
