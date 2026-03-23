import { observable, configure, reaction } from "mobx";
import { model } from "./TarotModel.js";
configure({ enforceActions: "never", });  // we don't use Mobx actions in the Lab

// It wraps the data in a proxy that detects all changes and automatically update to the view.
export const reactiveModel=observable(model);